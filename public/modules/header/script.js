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

      PubSub.subscribe('scroll:fixed', fixHeader);
      displaySearchIcons();
    }

    function displaySearchIcons() {
      if($('.search').length) { return ;}
      fixHeader();
    }

    function fixHeader(){
      $('body').addClass('fixed_nav');
    }

    function initOptions(){
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
