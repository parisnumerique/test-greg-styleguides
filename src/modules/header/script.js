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
      $quickAccess.find('.quick-access').on('close', onCloseQuickAccess);
      positionQuickAccess();

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

      if(!$('#main-search').length) {
        fixNav();
      }

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function positionQuickAccess() {
      if ($el.hasClass('fixed')) {
        var top = $el.outerHeight();
      } else {
        var top = $el.offset().top + $el.outerHeight();
      }
      $quickAccess.css('top', top);
    }

    function fixNav() {
      $('body').addClass('fixed-nav');
      positionQuickAccess();
    }

    function unfixNav() {
      $('body').removeClass('fixed-nav');
      positionQuickAccess();
    }

    function fixHeader() {
      $el.addClass('fixed');
      positionQuickAccess();
    }

    function unfixHeader() {
      $el.removeClass('fixed');
      positionQuickAccess();
    }

    function onClickSearch(e){
      e.preventDefault();
      $quickAccess.toggleClass('visible');
      var visible = $quickAccess.hasClass('visible');
      if (visible) {
        $quickAccess.find('.quick-access').data('api').focusSearchField();
      }
      $buttonSearch.toggleClass('active', visible);
    }

    function onCloseQuickAccess() {
      $quickAccess.removeClass('visible');
      $buttonSearch.removeClass('active');
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
