const express = require("express");
const studentsControllers = require("./controllers/studentsControllers");

const app = express();
app.use(express.json());
const port = 3000; 

app.get("/", (req, res) => {
    res.json("Welcome to Visual Thinking API");
});
app.get("/students", (req, res) => {
    const studentsInformation = studentsControllers.getAllStudentsInformation();
    res.json(studentsInformation);
});
app.get("/students/emails", (req, res) => {
    const emails = studentsControllers.getAllEmailsCertification();
    res.json(emails);
});
app.get("/students/credits", (Req, res) => {
    const credits = studentsControllers.getAllStudentsCredits();
    res.json(credits);
});

const server = app.listen(port, () => {
    console.log(`Server with port ${port}`);

});

module.exports = {app, server};