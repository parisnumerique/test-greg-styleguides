'use strict';

var $ = require('jquery');
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
    }

    function testVisibility() {
      if(inViewport()) {
        $el.addClass('visible');
      }
    }

    function inViewport() {
      var el = $el[0];

      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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
  Paris.newsPush('.news-push');
});
