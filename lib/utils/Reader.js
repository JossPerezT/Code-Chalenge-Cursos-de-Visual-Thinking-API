const fs = require("fs");

class Reader {
    static readJsonFile (path) {
        const file = fs.readFileSync(path);
        const students = JSON.parse(file);
        return students;
    }
}

module.exports = Reader; 

