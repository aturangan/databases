var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      //call get messages
      db.getMessages(function(err, data) {
        if (err) {
          console.log(err); 
        } else {
          console.log('dataaaa', data); 
        }
      })
    }, // a function which produces all the messages
    post: function (messageFromForm) {
      db.postMessages(messageFromForm, function(err, data) {
        if (err) {
          console.log(err); 
        } else {
          console.log('successful'); 
        }
      })

     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
}
}

var obj = {
  id: 2, 
  username: 'bob', 
  roomname: '6th floor',
  messages: 'hello'
}
module.exports.messages.post(obj); 

// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

