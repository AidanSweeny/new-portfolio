var db = require("../models")
db.Skill.create({title: "Java", category : "language"})
db.Skill.create({title: "Python", category : "language"})
db.Skill.create({title: "Javascript", category : "language"})
db.Skill.create({title: "HTML", category : "style"})
db.Skill.create({title: "JQuery", category : "library"})
db.Skill.create({title: "Node.js", category : "library"})
db.Skill.create({title: "Express.js", category : "library"})
db.Skill.create({title: "Sequelize", category : "library"})
db.Skill.create({title: "CSS", category : "style"})
db.Project.create({title: "Financhill Application", url : "financhill.jpg", deployed: "https://desolate-sierra-38032.herokuapp.com/", repo: "https://github.com/GabeSucich/BudgetingApp"})
db.Project.create({title: "Weather Application", url : "weather.jpg", deployed: "https://aidansweeny.github.io/weather-dashboard/", repo: "https://github.com/AidanSweeny/weather-dashboard/"})
db.Project.create({title: "Note Taking Application", url : "note-taker.jpg", deployed: "https://mysterious-sands-92673.herokuapp.com/", repo: "https://github.com/AidanSweeny/express-note-taker"})
db.Project.create({title: "Employee Tracker", url : "employee-tracker.jpg", deployed: "", repo: "https://github.com/AidanSweeny/employee-tracker"})
db.Project.create({title: "Express Dog Petter", url : "express-dogs.jpg", deployed: "https://vast-headland-15630.herokuapp.com/", repo: "https://github.com/AidanSweeny/dog-petter"})
db.Project.create({title: "L.I.F.E. Application", url : "life.jpg", deployed: "https://aidansweeny.github.io/life/", repo: "https://github.com/AidanSweeny/life/"})
db.Education.create({school : "Colby College", major : "Computer Science", minor : "Italian and Astronomy"})
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