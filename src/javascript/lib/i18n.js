'use strict';

var Globalize = require("globalize");
var Paris = window.Paris || {};

// Load Globalize dependencies
Globalize.load(
  require("cldr-data/supplemental/likelySubtags")
);

// Load translations
Globalize.loadMessages(Paris.locales);

// Get current locale
Paris.locale = $('html').attr('lang');

// Helper function for translation
Paris.t = function translate(key) {
  return Globalize(Paris.locale).formatMessage(key);
};

Paris.format_number = function format_number(number) {
  return number.toLocaleString(Paris.locale)
}
