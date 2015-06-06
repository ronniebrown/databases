var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messagesFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete(function(err, results) {
          res.json(results);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findOrCreate({username: req.body[username]})
        .complete(function(err, user) {
        var params = {
         message: req.body[message], 
         userid: user.id, 
         roomname: req.body[room] 
        };
        Message.create(params)
          .complete(function(err, results) {
            res.sendStatus(201);
          });
        })
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete(params, function(err, results) {
        res.json(results);
      });
    }, 
    post: function (req, res) {
      User.createreate({username: req.body[username]})
        .complete(function(err, user) {
          res.sendStatus(201);
      });
    } 
  }
};

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(err, results) {
//         res.json(results);
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       var params = [ req.body[message], req.body[username], req.body[roomname] ];
//       models.messages.post(params, function(err, results) {
//         res.json(results);
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get(function(err, results) {
//         res.json(results);
//       });
//     }, 
//     post: function (req, res) {
//       var params = [ req.body[username] ];
//       models.users.post(params, function(err, results) {
//         res.json(results);
//       });
//     } 
//   }
// };


