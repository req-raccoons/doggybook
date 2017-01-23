var db = require('../config');
var Dog = require('../models/dog');

var Dogs = new db.Collection();

Dogs.model = Dog;

module.exports = Dogs;
