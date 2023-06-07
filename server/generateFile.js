const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "input");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (languageType, code) => {
  let userId;
  if (languageType != "java") {
    userId = uuid();
  } else {
    userId = "Test"
  }
  const filename = `${userId}.${languageType}`;
  const filepath = path.join(dirCodes, filename);
  fs.writeFileSync(filepath, code);
  console.log(filepath);
  return filepath;
};


module.exports = {
  generateFile
};