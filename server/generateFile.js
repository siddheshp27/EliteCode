const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

function generateFile(lang, code) {
  const currdir = __dirname;
  const filename = `${uuidv4()}.${lang}`;

  const folderpath = path.join(currdir, "input");
  const file = path.join(folderpath, filename);

  if (!fs.existsSync(folderpath)) fs.mkdirSync(folderpath);

  fs.writeFileSync(file, code);
}

module.exports = generateFile;
