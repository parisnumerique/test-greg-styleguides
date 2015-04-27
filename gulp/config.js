'use strict';

var join = require('path').join;
var harpOutput = join(process.cwd(), 'www');
var buildOutput = join(process.cwd(), 'build');
var harpSrc = join(process.cwd(), 'src');
var fontsPath = join(process.cwd(), 'src', 'fonts');

module.exports = {
  port: 9000,

  js: {
    output: 'paris.js'
  },

  css: {
    output: 'paris.css'
  },

  tmp: {
    output: join(process.cwd(), 'tmp')
  },

  harp: {
    input: harpSrc,
    output: harpOutput
  },

  templatizer: {
    client_modules: [
      'anchors-list',
      'block-aside-checkboxes',
      'search-results-list',
      'share'
    ]
  },

  build: {
    output: buildOutput,
    assets: {
      css: join(buildOutput, 'assets', 'css'),
      javascript: join(buildOutput, 'assets', 'javascript'),
      fonts: join(buildOutput, 'assets', 'fonts'),
      images: join(buildOutput, 'assets', 'images'),
    }
  },

  fontsPath: fontsPath
};
