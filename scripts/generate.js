const fs = require("fs-extra");
const path = require("path");
const { toCamelCaseName } = require("../helpers");

const packageJSON = fs.readJSONSync(path.join(__dirname, "..", "package.json"));

const dataDir = "./data";
const dataFiles = fs.readdirSync(dataDir);

const allowed = new Set([
  "countries",
  "currencies",
  "domains",
  "languages",
  "locales",
  "timezones",
]);

dataFiles.forEach(async (file) => {
  await createFile(file);
  fs.writeJSONSync(path.join(__dirname, "..", "package.json"), packageJSON, {
    spaces: 2,
  });
});

async function createFile(fileName) {
  const name = fileName.replace(".json", "");
  if (allowed.has(name)) {
    const data = await fs.readJson(
      path.join(__dirname, "..", "data", fileName)
    );
    const parsedExport = parseExport(data);
    fs.writeFileSync(`${name}.mjs`, parsedExport.mjs, "utf-8");
    fs.writeFileSync(`${name}.cjs`, parsedExport.cjs, "utf-8");
    packageJSON.exports[`./${name}`] = {
      import: `./${name}.mjs`,
      require: `./${name}.cjs`,
    };
  }
}

function parseExport(data) {
  return {
    mjs: `export default ${JSON.stringify(data)}`,
    cjs: `module.exports = ${JSON.stringify(data)}`,
  };
}
