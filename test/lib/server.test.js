const supertest = require("supertest");
const {app, server} = require ("../../lib/server");

const api = supertest(app);

describe("Test server", () => {
    test("1. Get All Students Information", async () => {
        const test1 = await api 
            .get("/students")
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(test1.body.length).toBe(51);
        expect(test1.body[50].name).toBe("Clare");
    });
    test("2. Get All Student's Emails with Certification", async () => {
        const test2 = await api
            .get("/students/emails")
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(test2.body).toMatchObject(
            [
                "Todd@visualpartnership.xyz",
                "Sexton@visualpartnership.xyz",
                "Sharlene@visualpartnership.xyz",
                "Howell@visualpartnership.xyz",
                "Haynes@visualpartnership.xyz",
                "Montoya@visualpartnership.xyz",
                "Benton@visualpartnership.xyz",
                "Dionne@visualpartnership.xyz",
                "Mcpherson@visualpartnership.xyz",
                "Gracie@visualpartnership.xyz",
                "Ila@visualpartnership.xyz",
                "Dorthy@visualpartnership.xyz",
                "Mcfarland@visualpartnership.xyz",
                "Maryann@visualpartnership.xyz",
                "Alana@visualpartnership.xyz",
                "Rosemary@visualpartnership.xyz",
                "Keith@visualpartnership.xyz",
                "Delaney@visualpartnership.xyz",
                "Ball@visualpartnership.xyz",
                "Sally@visualpartnership.xyz",
                "Antoinette@visualpartnership.xyz",
                "Juliette@visualpartnership.xyz",
                "Harding@visualpartnership.xyz",
                "Dixon@visualpartnership.xyz",
                "Beulah@visualpartnership.xyz",
                "Moses@visualpartnership.xyz",
                "Shields@visualpartnership.xyz",
                "Jewell@visualpartnership.xyz",
                "Hays@visualpartnership.xyz"
            ]
        );
        expect(test2.body.length).toBe(29);
    });
    test("3. Get All Students with credits >= 500", async() => {
        const test3 = await api
            .get("/students/credits")
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(test3.body.length).toBe(27);
    });
    afterAll(() => {
        server.close();
    });
});
