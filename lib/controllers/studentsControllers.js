const Reader = require("../utils/Reader");
const studentsServices = require("../services/studentsServices");

class studentsController {
    static getAllStudentsInformation () {
        const students = Reader.readJsonFile("./visualpartners.json");
        const allStudentsInformation = studentsServices.getAllStudents(students);
        return allStudentsInformation; 
    }
    static getAllEmailsCertification() {
        const students = Reader.readJsonFile("./visualpartners.json");
        const allEmailsCertification = studentsServices.getHaveCertification(students);
        return allEmailsCertification;
    }
    static getAllStudentsCredits() {
        const students = Reader.readJsonFile("./visualpartners.json");
        const studentsCredits = studentsServices.getCredits(students); 
        return studentsCredits;
    }
}

module.exports = studentsController;