var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',  // for local dev
  // client: 'mysql',
  connection: {
    // may not be correct, check on during deploy
    filename: path.join(__dirname, '../db/doggysql.sqlite');
  },
  useNullAsDefault: true
});

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
      dog.integer('userId', 100);
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
      walker.integer('userId', 100);
      walker.timestamps();
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

module.exports = db;
