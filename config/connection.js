// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config()
var connection;

if('mysql://wrp96kqe8ky1h8ki:vad96uhn6ewtkha4@a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ltugb1ld9usgv5yf') {
    connection = mysql.createConnection("mysql://wrp96kqe8ky1h8ki:vad96uhn6ewtkha4@a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ltugb1ld9usgv5yf");
} else {
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
}

// Export connection for our ORM to use.
module.exports = connection;
