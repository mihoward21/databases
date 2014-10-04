var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root");
// var mysql = require('mysql');
// var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

exports.findAllMessages = function(cb){
  User.findAll().success(function(result) {
    cb(result);
  }).error(function(errors){
    console.log(errors);
  });
};

exports.findUser = function(username, cb){
  User.findAll({ where: {username: username} }).success(function(result) {
    cb(result);
  }).error(function(errors){
    console.log(errors);
  });
};

exports.saveUser = function(username, cb){
  var newUser = User.build({username: username});
  newUser.save().success(function(result) {
    cb(result);
  }).error(function(errors){
    console.log(errors);
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  var newMessage = Message.build({userid: userid, text: message, roomname: roomname});
  newMessage.save().success(function() {
    cb();
  }).error(function(errors){
    console.log(errors);
  });
};
