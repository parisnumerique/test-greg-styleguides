'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.header = (function(){

  var defaultOptions = {
  };

  function header(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $buttonSearch,
        $quickAccess;

    function init(){
      initOptions();

      $buttonSearch = $el.find('.icon-search');
      $quickAccess = $('.header-quick-access');

      $buttonSearch.on('click', onClickSearch);

      PubSub.subscribe('scroll:search:down', fixNav);
      PubSub.subscribe('scroll:search:up', unfixNav);

      PubSub.subscribe('scroll:notice:down', fixHeader);
      PubSub.subscribe('scroll:notice:up', unfixHeader);

      PubSub.subscribe('header:search:close', fixHeader);

      PubSub.subscribe('notice:close', function(e, data){
        if (data && data.id === "notice_home_top") {
          fixHeader();
        }
      });

      PubSub.subscribe('header:search:close', function(){
        $buttonSearch.removeClass('active');
      });

      if(!$('.notice.top').length || $(document).scrollTop() >= $('.notice.top').height() ) {
        fixHeader();
      }

      if(!$('.quick-access-search').length) {
        fixNav();
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
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

    function onClickSearch(e){
      e.preventDefault();
      PubSub.publish('header:search:click');
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
  Paris.header('.header-wrapper');
});
