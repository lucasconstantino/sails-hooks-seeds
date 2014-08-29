/**
 * Database Seeds Hook
 *
 * Some environments will require for the database to be seeded
 * upon bootstraping. This hook will look into the 'seeds' directory
 * to find environment-based seeds and populate the database with them.
 *
 * Note that the hook will only populate non-existing registry.
 * 
 */

var glob  = require('glob')
  , path  = require('path')
  , async = require('async');

module.exports = function seedsHook(sails) {
  return {
    initialize: function (callback) {
      sails.after('hook:orm:loaded', function () {

        // Find all seed files by environment.
        glob('seeds/' + sails.config.environment + '/**/*.json',  function (err, files) {

          /**
           * Populate the model with a given seed.
           */
          function populate(seed, next) {
            var attributes = Object.keys(seed.data[0] || {});
            global[seed.model].findOrCreateEach(attributes, seed.data, next);
          }

          // Extract seeds data.
          var seeding = files.map(function (filePath) {
            return {
              model: path.basename(filePath, '.json'),
              data: require('../../' + filePath)
            }
          });

          async.eachSeries(seeding, populate, callback);
        });
      });
    }
  };
};
