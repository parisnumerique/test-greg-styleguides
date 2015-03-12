'use strict';

var PubSub = require('pubsub-js');
var fs = require('fs');

var Paris = window.Paris || {};

Paris.documentHeading = (function(){

  var defaultOptions = {
  };

  function documentHeading(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      copyTitle();
    }

    function copyTitle() {
      var title = $el.find('.document-heading-title').text();
      var $leftWrapper = $('.aside-wrapper');
      var $span = $('<span>').text(title);
      var $asideTitle = $('<h3>').html($span).addClass('aside-title');
      $leftWrapper.prepend($asideTitle);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      documentHeading(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.documentHeading('.document-heading');
});
