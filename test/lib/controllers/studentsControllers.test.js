const studentsController = require("../../../lib/controllers/studentsControllers");

describe("Tests to student Controller", () => {
    test("1. Test to get all students informations", () => {
        const test1 = studentsController.getAllStudentsInformation();
        expect(test1[0]).toMatchObject (
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            }
        );
    });
    test("2. Get Student´s emails with certification", () =>{
        const test2 = studentsController.getAllEmailsCertification(); 
        expect(test2[3]).toBe("Howell@visualpartnership.xyz");
    });
    
    test("3. Get all students with credits > 500", () => {
        const test3 = studentsController.getAllStudentsCredits();
        expect(test3.length).toBe(27);
    });
});
