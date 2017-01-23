var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    var hashcheck = Promise.promisify(bcrypt.compare);

    hashcheck(attemptedPassword, this.get('password'))
    .then(function(isMatch) {
      callback(isMatch);
    });
    // bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    // });
  },
  hashPassword: function() {
    console.log(`'this' is: `, this);
    var cipher = Promise.promisify(bcrypt.hash);

    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  },
});

module.exports = User;



// var hash = bcrypt.hashSync("bacon");
//
// bcrypt.compareSync("bacon", hash); // true
// bcrypt.compareSync("veggies", hash); // false
// Asynchronous
//
// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });
//
// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });
