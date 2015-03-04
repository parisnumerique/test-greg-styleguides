'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.header = (function(){

  var defaultOptions = {
  };

  function header(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      PubSub.subscribe('scoll:floatingLine:down', fixNav);
      PubSub.subscribe('scoll:floatingLine:up', unfixNav);

      PubSub.subscribe('scoll:notice:down', fixHeader);
      PubSub.subscribe('scoll:notice:up', unfixHeader);

      if(!$('.notice.top').length) {
        fixHeader();
      }

      if(!$('#quick-search').length) {
        fixNav();
      }

    }

    function fixNav() {
      $('body').addClass('fixed_nav');
    }

    function unfixNav() {
      $('body').removeClass('fixed_nav');
    }

    function fixHeader() {
      $el.addClass('fixed');
    }

    function unfixHeader() {
      $el.removeClass('fixed');
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
  Paris.header('header');
});
