var db = require("../models")

module.exports = function (app) {
    app.get("/api/projects", function (req, res) {
        db.Project.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    app.get("/api/skills", function (req, res) {
        db.Skill.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    app.get("/api/education", function (req, res) {
        db.Education.findAll({}).then(function (data) {
            res.json(data);
        });
    });
}