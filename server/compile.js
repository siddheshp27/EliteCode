const generateFile = require("./compilerTools/generateFile");
const Compiler = require("./compilerTools/compiler");

async function compile(lang, code) {
  const metadata = generateFile(lang, code);

  const output = await Compiler(metadata.folderPath, metadata.fileName, lang);
  console.log(`output : ${output}`);
}

module.exports = compile;
