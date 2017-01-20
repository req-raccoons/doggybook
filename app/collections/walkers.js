var db = require('../config');
var Walker = require('../models/dog');

var Walkers = new db.Collection();

Walkers.model = Walker;

module.exports = Walkers;
