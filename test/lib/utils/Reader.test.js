const Reader = require("../../../lib/utils/Reader");

describe("Read JSON files", () => {
    test("Readding visualpartner.json", () => {
        const visualpartner = Reader.readJsonFile("./visualpartners.json");
        expect(visualpartner.length).toBe(51);
        expect(visualpartner[50].id).toBe("6264d5d82eb0f4917bd0d332");
    });
});


