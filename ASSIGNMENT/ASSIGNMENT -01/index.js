const fs = require('fs');
const userdata = [];

function createFile() {
    fs.writeFile('data.json', JSON.stringify(userdata), (err) => {
        console.log("file is created");
    });
}

function read (){
    fs.readFile('data.json', (err, data) => {
        if (err) {
            console.log("error in reading file");
        } else {
            userdata.push(...JSON.parse(data));
            console.log(userdata);    
        }
    });

}


const newUserData ={
    name: "Deepak",
    age: 30,
    
}

function  update () {
    fs.appendFile('data.json', JSON.stringify(newUserData), (err) => {
        if (err) {
            console.log("error in updating file");

        } else {
            userdata.push(newUserData);
            console.log("file is updated");
        }
    });

}


function delete1 () {
    fs.unlink('data.json', (err) => {
        if (err) {
            console.log("error in deleting file");
        } else {
            console.log("file is deleted");
        }
    });
}

createFile();
read();
update();
// delete1();





