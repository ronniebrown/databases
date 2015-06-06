var db = require('../db');

db.connect(function(err) {
  if (err) throw err;
});


module.exports = {
  messages: {
    get: function (cb) {
      db.query('describe messages', function(err, results) {
        console.log(results);
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }, // a function which produces all the messages
    post: function (cb) {
      db.query('', function(err, results) {
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
      db.query('select messages', function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }, // a function which produces all the messages
    post: function (cb) {
      db.query('', function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }
  }
};

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });


