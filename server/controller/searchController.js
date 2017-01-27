console.log('loading... searchController.js');

var db = require('../../app/config');

var User = require('../../app/models/user');
var Dog = require('../../app/models/dog');
var Walker = require('../../app/models/walker');

var Users = require('../../app/collections/users');
var Dogs = require('../../app/collections/dogs');
var Walkers = require('../../app/collections/walkers');

module.exports = {
  getAllUsers: function(query) {
    console.log('getAllUsers!', query);
    if (query === 'Dogs') {
      console.log('specifically dogs!');
      Dogs.fetchAll()
      .then(function(allDogs) {
        return allDogs;
      });
    } else if (query === 'Dog Walkers') {
      console.log('specifically walkers!');
      Walkers.fetchAll()
      .then(function(allWalkers) {
        return allWalkers;
      });
    } else {
      console.log('searching for: ' + query + ' not yet implemented');
    }
  }

}
