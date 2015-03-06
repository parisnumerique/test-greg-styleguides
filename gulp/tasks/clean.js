'use strict';

var rm = require('rimraf');
var harpOutput = require('../config').harp.output;

require('gulp').task('clean', function(cb) {
  console.log(harpOutput);
  rm.sync(harpOutput);
  cb();
});
