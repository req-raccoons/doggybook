var request = require('request');

var db = require('../app/config');
var jwt = require('jwt-simple');


var User = require('../app/models/user');
var Dog = require('../app/models/dog');
var Walker = require('../app/models/walker');

var Users = require('../app/collections/users');
var Dogs = require('../app/collections/dogs');
var Walkers = require('../app/collections/walkers');


exports.signin = function(req, res) {
  console.log('signing in!');
  console.log('req.body: ', req.body);

  var username = req.body.username;
  var email    = req.body.email;
  var password = req.body.password;

  // search the db for a particular username
  new User({username: username})
  .fetch()
  .then(function(user) {
    if (!user) {
      // if !found, redirect to sign in
      console.log('user not found, redirecting to landing page or sign in page');
      res.redirect('/api/signin');
    } else {
      // if found: hash the pw attempt against the stored pw
      user.comparePassword(password, function(match) {
        if (match) {
          // if matched, redirect to landing page/dashboard and authenticate
          console.log('authenticate user + start a session');
          res.redirect('/');

        } else {
          // if mismatched, send back to login page
          console.log('wrong password, redirecting to landing page or sign in page');
          res.redirect('/signin');
        }
      });
    }
  });
}

exports.signup = function(req, res) {
  // we'll be given some obj with data to be parsed and entered into the db.
  console.log('attempting a signup!');
  console.log('req.body: ', req.body);

  var username = req.body.username;
  var email    = req.body.email;
  var password = req.body.password;

  new User({username: username})
  .fetch()
  .then(function(user) {
    // check if the provided username exists in the db
    // if found: send back an error
    if (user) {
      console.log("username already exists");
      res.redirect('/signup');
    }
    // if !found: register the user into TWO tables,
    // the general user table and the dog/walker table
    // dog/walker table must be created asynchronously!
    // the user table will take a hashed version of the desired pw.
    else {
      console.log('signing up the new user!');
      var newUser = new User({
        username: username,
        password: this.hashPassword(password),
        email: req.body.email,
        isDog: req.body.isDog,
      });

      console.log('made a new user!');
      newUser.save()
      .then(function(newUser) {
        console.log(newUser);
        if (newUser.get(isDog)) {
          var newDog = new Dog();
        } else {
          var newWalker = new Walker();
        }
      });
    }
  });
}
