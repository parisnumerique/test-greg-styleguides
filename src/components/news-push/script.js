'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.newsPush = (function(){

  var defaultOptions = {
  };

  function header(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      PubSub.subscribe('scroll', testVisibility);
      testVisibility();
    }

    function testVisibility() {
      if(nearViewport()) {
        $el.addClass('visible');
      }
    }

    function nearViewport() {
      var el = $el[0];
      var margin = 200;
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight + margin || document.documentElement.clientHeight + margin)
      );
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
      header(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.newsPush('.component-news-push');
});
