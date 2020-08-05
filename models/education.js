module.exports = function (sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
        school: DataTypes.STRING,
        major: DataTypes.STRING,
        minor: DataTypes.STRING
    })

    return Education;
}