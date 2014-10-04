var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root");
// var mysql = require('mysql');
// var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




exports.findAllMessages = function(cb){
  var queryString = 'SELECT * FROM messages';
  var query = dbConnection.query(queryString, function(err, result){
    if (err) {
      console.log("ERROR: " + err);
    } else {
      cb(err,result);
    }
  });
};

exports.findUser = function(username, cb){
  var queryString = 'SELECT id FROM users WHERE name = ?';
  var queryArgs = [username];
  var query = dbConnection.query(queryString, queryArgs, function(err, result){

    if (err) {
      console.log("ERROR2: " + err);
    } else {
      cb(err,result);
    }
  });
};

exports.saveUser = function(username, cb){
  var queryString = 'INSERT INTO users (name) VALUES (?)';
  var queryArgs = [username];
  var query = dbConnection.query(queryString, queryArgs, function(err, result){

    if (err) {
      console.log("ERROR3: " + err);
    } else {
      cb(result);
    }
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  var queryString = 'INSERT INTO messages (Text, room, user) VALUES (?, ?, ?)';
  var queryArgs = [message, roomname, userid];
  var query = dbConnection.query(queryString, queryArgs, function(err, result){
    if (err) {
      console.log("ERROR4: " + err);
    } else {
      cb();
    }
  });
};
