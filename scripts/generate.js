const fs = require("fs-extra");
const path = require("path");

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
    const parsedData = parseData(name, data);
    if (parsedData) {
      fs.writeFile(`${name}.mjs`, parsedData.mjs, "utf-8");
      fs.writeFile(`${name}.cjs`, parsedData.cjs, "utf-8");
      packageJSON.exports[`./${name}`] = {
        import: `./${name}.mjs`,
        require: `./${name}.cjs`,
      };
    }
  }
}

function parseData(name, data) {
  return {
    mjs: `export const ${name} = ${JSON.stringify(data)}`,
    cjs: `module.exports = { ${name}: ${JSON.stringify(data)} }`,
  };
}
