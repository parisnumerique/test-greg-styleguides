'use strict';

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
      PubSub.subscribe('scroll:search:down', fixNav);
      PubSub.subscribe('scroll:search:up', unfixNav);

      PubSub.subscribe('scroll:notice:down', fixHeader);
      PubSub.subscribe('scroll:notice:up', unfixHeader);

      PubSub.subscribe('notice:close', function(e, data){
        if (data && data.id === "notice_home_top") {
          fixHeader();
        }
      });

      if(!$('.notice.top').length) {
        fixHeader();
      }

      if(!$('#quick-search').length) {
        fixNav();
      }

    }

    function fixNav() {
      $('body').addClass('fixed-nav');
    }

    function unfixNav() {
      $('body').removeClass('fixed-nav');
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
