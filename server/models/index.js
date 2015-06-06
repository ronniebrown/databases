var db = require('../db');

db.connect(function(err) {
  if (err) throw err;
});


module.exports = {
  messages: {
    get: function (cb) {
      var queryStr = 'select messages.id, messages.message, messages.roomname, user.username from message \
                      left outer join users on (message.userid = user.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      // todo insert into messages table
      var queryStr = 'insert into messages(message, userid, roomname) \
                      values (message, (select id from user where user = ? limit 1). ?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }
  }
};




