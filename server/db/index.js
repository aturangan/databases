var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection  = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  server: '127.0.0.1', 
  database: 'chat' 
});

connection.connect(function(err){
  if (err) {
    console.log('the database is not connected ', err);
  } else {
    console.log('the database is connected');
  }
});

// connect to your database
module.exports = {
  connection: connection,
}

