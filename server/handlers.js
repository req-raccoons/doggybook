// var request = require('request');

var db = require('../app/config');
// var jwt = require('jwt-simple');

var User = require('../app/models/user');
var Dog = require('../app/models/dog');
var Walker = require('../app/models/walker');

var Users = require('../app/collections/users');
var Dogs = require('../app/collections/dogs');
var Walkers = require('../app/collections/walkers');

module.exports = {
  signin: function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    // search the db for a particular username
    new User({username: username})
    .fetch()
    .then(function(user) {
      if (!user) {
        // if !found, redirect to sign in
        console.log('user not found, redirecting to landing page or sign in page');
        res.redirect('/signin');
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
            res.redirect('/');
          }
        });
      }
    });
  },
  signup: function(req, res, next) {
    // we'll be given some obj with data to be parsed and entered into the db.
    console.log('attempting a signup!');
    console.log('req.body: ', req.body);

    var username = req.body.username;

    new User({username: username})
    .fetch()
    .then(function(user) {
      // check if the provided username exists in the db
      // if found: send back an error
      if (user) {
        console.log("username already exists");
        res.redirect('/');
      }
      // if !found: register the user into TWO tables,
      // the general user table and the dog/walker table
      // dog/walker table must be created asynchronously!
      // the user table will take a hashed version of the desired pw.
      else {
        console.log('signing up the new user!');
        // var newUser = new User(req.body);
        // console.log('req.body: ', req.body);
        var newUser = new User({
          username: req.body.username,
          password: req.body.password,
          email:    req.body.email,
          type:     req.body.type
        });


        console.log('made a new user!', newUser.toJSON());
        newUser.save()
        .then(function(newUser) {
          console.log('new user added to db');
          var newDogOrWalker = {
            name:     req.body.name,
            address:  req.body.address,
            zip:      req.body.zip,
            imgurl:   req.body.imgurl,
            price:    req.body.price,
            userId:   newUser.get('id')
          };

          if (newUser.get('type') === 'Dog') {
            console.log('new user is a dog');
            // var newDog = new Dog({
            //   // create a new dog user following model/dog.js
            //
            // });
            var newDog = new Dog(newDogOrWalker);
            newDog.save();
          } else {
            console.log('new user is a walker');
            // var newWalker = new Walker({
            //   // create a new walker user following model/walker.js
            //
            // });
            var newWalker = new Walker(newDogOrWalker);
            newWalker.save();
          }
          res.send(newUser);
        });
      }
    });
  },

  checkAuth: function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });

    }
  }
};
