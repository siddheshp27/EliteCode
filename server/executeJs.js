const { exec } = require("child_process");

const executeJs = async (filepath) => {
    return new Promise((resolve, reject) => {
        exec(`node ${filepath}`, (error, stdout, stderr) => {
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
};


module.exports = {
    executeJs
};