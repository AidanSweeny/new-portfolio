var db = require("../models")

var path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/projects", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/projects.html"))
    })

    app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/about.html"))
    })
}