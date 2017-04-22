var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select * from messages';
      db.connection.query(queryString, function(err, data) {
        if (err) {
          console.log('could not get data from database');
          callback(err, null)
        } else {
          console.log('this is our data' , data);
          callback(null, data)
        }
      });
    }, // a function which produces all the messages
    post: function (messageFromForm, callback) {
      var message = [ messageFromForm.id, messageFromForm.username, messageFromForm.messages, messageFromForm.roomname];
      var queryString = 'INSERT INTO messages(id, username, messages, roomname) VALUES (?, ?, ?, ?)'; 
      db.connection.query(queryString, message, function(err, data) {
        if (err) {
          console.log('could not post data to database'); 
          callback(err, null); 
        } else {
          console.log('posted data to database');
          callback(null, data); 
        }
      });
    },
    users: {
      // Ditto as above.
      get: function () {},
      post: function () {}
    }
  }
};

 
