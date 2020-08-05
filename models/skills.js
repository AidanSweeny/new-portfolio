module.exports = function (sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
        title: DataTypes.STRING,
        category: DataTypes.STRING
    })

    return Skill;
}