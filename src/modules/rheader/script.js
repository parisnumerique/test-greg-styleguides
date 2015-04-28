'use strict';

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var Paris = window.Paris || {};

Paris.rheader = (function(){

  var defaultOptions = {
    mobileMediaQuery: window.matchMedia("(max-width: 1130px)")
  };

  function rheader(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        isMobile
      ;

    function init(){
      initOptions();

      onResize();
      $(window).on('resize', throttle(onResize, 1000));

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onResize() {
      var wasMobile = isMobile;
      isMobile = options.mobileMediaQuery.matches;
      if (wasMobile === isMobile) {return;}
      toggleMobile();
    }

    function toggleMobile() {
      isMobile ? enableMobile() : disableMobile();
    }

    function enableMobile() {
      console.log('enableMobile');
    }

    function disableMobile() {
      console.log('disableMobile');
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      rheader(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.rheader('.rheader');
});
