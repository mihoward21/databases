var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root");

exports.User = sequelize.define('User', {
    username: Sequelize.STRING
  });

exports.Message = sequelize.define('Message', {
    userid: Sequelize.INTEGER,
    text: Sequelize.STRING,
    roomname: Sequelize.STRING
  });

exports.initialize = function() {

  /* .sync() makes Sequelize create the database table for us if it doesn't
   *  exist already: */
  exports.User.sync().success(function() {
    console.log("User table created");
  });

  exports.Message.sync().success(function() {
    console.log("Message table created");
  });
};
