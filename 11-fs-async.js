const {readFile, writeFile} = require("fs");

readFile('./content/first.txt','utf-8',(error, data) => {
    if (error) {
        console.log(error);
    }
    const first = data;
    console.log("", first);
    writeFile("./content/second.txt", `${first}`, (error) => {
        if(error) {
            console.log(error)
        }
    });
})