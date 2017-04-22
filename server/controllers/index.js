var models = require('../models');
var bodyParser = require('body-parser');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) {
          console.log(err); 
        } else {
          console.log('this is the data from the server', data); 
          res.end(JSON.stringify(data));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, data) {
        if (err) {
          console.log('failed to save message to database', err);
        } else {
          console.log('message was saved to database')
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

//module.exports.messages.post();

// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
