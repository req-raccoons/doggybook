var db = require('../config');
var Promise = require('bluebird');

var Walker = db.Model.extend({
  tableName: 'walkers',
  hasTimestamps: true,
  initialize: function() {

  },
});

module.exports = Walker;
