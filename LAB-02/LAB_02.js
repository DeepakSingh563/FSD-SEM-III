
import fs from "fs";

const filepath = "data.txt";

function createFile() {
    fs.writeFile(filepath, "Hello Node.js", () => {
        console.log("File created");
    });
}

async function readFile() {
    await fs.readFile(filepath, "utf8", (err, data) => {
        
        console.log(data);
    });
}

async function updateFile() {
    await fs.appendFile(filepath, "\nNew content", () => {
        console.log("File updated");
    });
}

async function deleteFile() {
    await fs.unlink(filepath, () => {
        console.log("File deleted");
    });
}

createFile();
updateFile();
readFile();