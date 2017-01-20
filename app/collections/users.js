var db = require('../config');
var User = require('../models/dog');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
