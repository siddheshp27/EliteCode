const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputJava")

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
}
const executeJava = async (filepath) => {
    const userFile = path.basename(filepath).split(".")[0];
    const userClass = path.join(userFile, `${userFile}.class`)
    return new Promise((resolve, reject) => {
        exec(`cd input && javac ${userFile}.java -d ${outputPath} && cd ${outputPath} && java ${userFile}`
            , (error, stdout, stderr) => {
                if (error) {
                    console.error("Execution error:", error);
                    reject({ error, stderr });
                } else if (stderr) {
                    console.error("Standard error:", stderr);
                    reject(stderr);
                } else {
                    console.log("Standard output:", stdout);
                    resolve(stdout);
                }
            });
    });

}
module.exports = {
    executeJava,
}