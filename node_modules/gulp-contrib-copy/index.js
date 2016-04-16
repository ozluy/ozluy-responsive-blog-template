'use strict';

var through     = require('through2'),
    fs          = require('fs'),
    PluginError = require('gulp-util/lib/PluginError');

var pluginName = 'gulp-contrib-copy';

module.exports = function( opts ) {

  function copy(file, encoding, callback) {
    var options = opts || {};

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new PluginError(pluginName, 'Streaming not supported'));
    }

    var readStream = fs.createReadStream(file.path);
    readStream.on('error', function(error) {
      var message = 'File could not be copied <' +  file.path + '>: ' + error.message;
      callback(new PluginError(pluginName, message));
    });

    if(options) {
      // TODO: Implement options
      console.log('Options to be implemented')
    }

    callback( null, file );
  }

  return through.obj(copy);
};