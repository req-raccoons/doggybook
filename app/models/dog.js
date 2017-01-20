var db = require('../config');
var Promise = require('bluebird');

var Dog = db.Model.extend({
  tableName: 'dogs',
  hasTimestamps: true,
  initialize: function() {

  },
});

module.exports = Dog;
