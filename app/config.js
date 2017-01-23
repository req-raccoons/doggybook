console.log('loading db...');
var dbconfig = require('../db/db.js');
// console.log(dbconfig);

var path = require('path');
var knex = require('knex')(dbconfig);
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('email', 100).unique();
      user.string('password', 100);
      user.boolean('isDog');
      user.timestamps();
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('dogs')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('dogs', function(dog) {
      // structure of dog db object to be fleshed out further
      dog.increments('id').primary();
      dog.string('name');
      dog.foreign('userId', 100).references('users.id');
      dog.timestamps();
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('walkers')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('walkers', function(walker) {
      // structure of walker db object to be fleshed out further
      walker.increments('id').primary();
      walker.string('name');
      walker.foreign('userId', 100).references('users.id');
      walker.timestamps();
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

module.exports = db;
