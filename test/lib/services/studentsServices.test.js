const studentsServices = require("../../../lib/services/studentsServices");
const Reader = require("../../../lib/utils/Reader");

describe( "Test to get student´s emails with certification", () => {
    test("1. Students emails with certifications", () => {
        const students = Reader.readJsonFile("./visualpartners.json");
        const test1 = studentsServices.getHaveCertification(students); 
        expect(test1[0]).toBe("Todd@visualpartnership.xyz");
        expect(test1.length).toBe(29);
        expect(test1[28]).toBe("Hays@visualpartnership.xyz");
    });
    test("2. Students with credits > 500", () => {
        const students = Reader.readJsonFile("./visualpartners.json");
        const test2 = studentsServices.getCredits(students); 
        expect(test2[0].name).toBe("Warren");
        expect(test2[26].name).toBe("Ware");
        expect(test2.length).toBe(27);
    });
    test("3. Get all students", () => {
        const students = Reader.readJsonFile("./visualpartners.json");
        const test3 = studentsServices.getAllStudents(students); 
        expect(test3.length).toBe(51);
    });
});