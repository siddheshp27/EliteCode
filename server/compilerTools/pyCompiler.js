const { exec } = require("child_process");

async function cppCompile(folderPath, fileName) {
  const fName = fileName.split(".")[0];

  const command = `python ${folderPath}\\input\\${fileName}`;

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      }
      if (stderr) {
        console.error(stderr);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

module.exports = cppCompile;
