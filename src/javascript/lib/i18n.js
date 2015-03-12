'use strict';

var Globalize = require("globalize");
var Paris = window.Paris || {};
Paris.i18n = Paris.i18n || {};

// Get current locale
Paris.i18n.locale = $('html').attr('lang');

// Load Globalize dependencies
Globalize.load(
  require("cldr-data/main/en/numbers"),
  require("cldr-data/main/es/numbers"),
  require("cldr-data/main/fr/numbers"),
  require("cldr-data/supplemental/likelySubtags"),
  require("cldr-data/supplemental/plurals"),
  require("cldr-data/supplemental/numberingSystems")
);

// Load translations
Globalize.loadMessages(Paris.i18n.locales);

// Helper function for translation
Paris.i18n.t = function translate(key, data) {
  if (typeof data === 'undefined') {
    return Globalize(Paris.i18n.locale).formatMessage(key);
  } else {
    var formatter = Globalize(Paris.i18n.locale).messageFormatter(key);
    return formatter(data);
  }
};

Paris.i18n.formatNumber = function formatNumber(data) {
  var formatter = Globalize(Paris.i18n.locale).numberFormatter();
  return formatter(data);
};
