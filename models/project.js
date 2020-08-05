module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        deployed: DataTypes.STRING,
        repo: DataTypes.STRING
    })

    return Project;
}

