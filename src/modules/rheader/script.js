'use strict';

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var Paris = window.Paris || {};

Paris.rheader = (function(){

  var defaultOptions = {
    mobileMediaQuery: window.matchMedia("(max-width: 1130px)"),
    mobileNavId: "rheader-mobile-nav"
  };

  function rheader(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        isMobile,
        $buttonMenu,
        $overlay
      ;

    function init(){
      initOptions();

      $buttonMenu = $el.find('.rheader-button-menu');

      onResize();
      $(window).on('resize', throttle(onResize, 1000));

      $buttonMenu.on('click', onClickButtonMenu);
      $('body').on('click', '#'+options.mobileNavId+'-overlay', closeMenu);

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

    function onClickButtonMenu(e) {
      e.preventDefault();
      toggleMenu();
    }

    function toggleMenu() {
      $('body').toggleClass('rheader-mobile-nav-open');
    }

    function closeMenu() {
      $('body').removeClass('rheader-mobile-nav-open');
    }

    function openMenu() {
      $('body').addClass('rheader-mobile-nav-open');
    }

    function toggleMobile() {
      isMobile ? enableMobile() : disableMobile();
    }

    function enableMobile() {
      console.log('enableMobile');

      // Create nav
      var $nav = $('<div id="'+options.mobileNavId+'" class="rheader-mobile-nav"></div>');
      $el.find('.rheader-locales').clone().appendTo($nav);
      $el.find('.rheader-nav').clone().appendTo($nav);
      $el.find('.rheader-button-around').clone()
        .insertBefore($nav.find('.rheader-nav-item.account'))
        .wrap('<li class="rheader-nav-item around"></li>');
      $el.append($nav);

      $overlay = $('<div id="'+options.mobileNavId+'-overlay" class="rheader-mobile-nav-overlay"></div>').appendTo('body');
    }

    function disableMobile() {
      console.log('disableMobile');

      // Remove nav
      var $nav = $('#'+options.mobileNavId);
      $nav.remove();
      $el.removeClass('rheader-mobile-nav-open');

      $overlay.remove();
      $overlay = null;
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
