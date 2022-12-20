const User = require("./User");
const Journal = require("./Journal");

User.hasMany(Journal);
Journal.belongsTo(User);

module.exports = {  User };