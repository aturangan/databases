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

var getMessages = function(callback) {
  var queryString = 'select * from messages';
  connection.query(queryString, function(err, data) {
    if (err) {
      console.log('could not get data from database');
      callback(err, null)
    } else {
      console.log('this is our data' , data);
      callback(null, data)
    }
  });
} 

var postMessages = function(data, callback) {
  console.log('THIS IS THE DATA', data); 
  
  var queryString = 'INSERT INTO messages(id, username, messages, roomname) VALUES ('+ data.id + ',' + data.username + ',' + data.messages + ',' + data.roomname + ')'; 
  connection.query(queryString, function(err, data) {
    if (err) {
      console.log('could not post data to database'); 
      callback(err, null); 
    } else {
      console.log('posted data to database');
      callback(null, data); 
    }
  });
}
//INSERT INTO tbl(`v1`, `v2`) VALUES ("bla", "bla");  


// connect to your database
module.exports = {
  getMessages: getMessages,
  postMessages: postMessages
}

