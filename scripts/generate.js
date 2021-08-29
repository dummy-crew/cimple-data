const fs = require("fs-extra");
const path = require("path");
const { toCamelCaseName } = require("../helpers");

const packageJSON = fs.readJSONSync(path.join(__dirname, "..", "package.json"));

const dataDir = "./data";
const dataFiles = fs.readdirSync(dataDir);

const allowed = [
  "countries",
  "currencies",
  "domains",
  "languages",
  "language-strings",
  "timezones",
];

dataFiles.forEach(async (file) => {
  await createFile(file);
  fs.writeJSONSync(path.join(__dirname, "..", "package.json"), packageJSON, {
    spaces: 2,
  });
});

async function createFile(fileName) {
  const name = fileName.replace(".json", "");
  if (allowed.includes(name)) {
    const data = await fs.readJson(
      path.join(__dirname, "..", "data", fileName)
    );
    const parsedExport = parseExport(name, data);
    fs.writeFile(`${name}.mjs`, parsedExport.mjs, "utf-8");
    fs.writeFile(`${name}.cjs`, parsedExport.cjs, "utf-8");
    fs.appendFileSync(
      "index.mjs",
      `export {default as ${toCamelCaseName(name)}} from './${name}.mjs';`
    );
    fs.appendFileSync(
      "index.cjs",
      `const { ${toCamelCaseName(
        name
      )} } = require('./${name}.cjs');module.exports = { ${toCamelCaseName(
        name
      )} };`
    );
  }
}

function parseExport(name, data) {
  return {
    mjs: `export const ${toCamelCaseName(name)} = ${JSON.stringify(data)}`,
    cjs: `module.exports = { ${toCamelCaseName(name)}: ${JSON.stringify(
      data
    )} }`,
  };
}
