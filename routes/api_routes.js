var db = require("../models")
// db.Skill.create({title: "Java", category : "language"})
// db.Skill.create({title: "Python", category : "language"})
// db.Skill.create({title: "Javascript", category : "language"})
// db.Skill.create({title: "HTML", category : "style"})
// db.Skill.create({title: "JQuery", category : "library"})
// db.Skill.create({title: "Node.js", category : "library"})
// db.Skill.create({title: "Express.js", category : "library"})
// db.Skill.create({title: "Sequelize", category : "library"})
// db.Skill.create({title: "CSS", category : "style"})

module.exports = function (app) {
    app.get("/api/projects", function (req, res) {
        db.Project.findAll({}).then(function (data) {
            res.json(JSON.stringify(data));
        });
    });

    app.get("/api/skills", function (req, res) {
        db.Skill.findAll({}).then(function (data) {
            res.json(JSON.stringify(data));
        });
    });

    app.get("/api/education", function (req, res) {
        db.Education.findAll({}).then(function (data) {
            res.json(JSON.stringify(data));
        });
    });
}