var express = require('express')
var db = require('./models')

var PORT = process.env.PORT || 3000;

app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

require('./routes/api_routes')(app)
require('./routes/html_routes')(app)

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    })
})
