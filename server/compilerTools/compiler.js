const { exec } = require("child_process");

async function compiler(folderPath, fileName, lang) {
  const fName = fileName.split(".")[0];

  let command;

  switch (lang) {
    case "cpp": {
      command = `g++ ${folderPath}\\input\\${fileName} -o ${folderPath}\\output\\${fName} &&  ${folderPath}\\output\\${fName}`;
      break;
    }
    case "py": {
      command = `python ${folderPath}\\input\\${fileName}`;
      break;
    }
    case "java": {
      command = `javac ${folderPath}\\input\\${fileName} -d ${folderPath}\\output\\ &&  java -cp ${folderPath}\\output ${fName}`;
      break;
    }
    case "js": {
      command = `node ${folderPath}\\input\\${fileName}`;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      if (stderr) {
        console.error(stderr);
        reject(stderr);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

module.exports = compiler;
