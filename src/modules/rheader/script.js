'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');
var attachFastClick = require('fastclick');

var Paris = window.Paris || {};

Paris.rheader = (function(){

  var defaultOptions = {
    mobileMediaQuery: window.matchMedia("(max-width: 600px)"),
    mobileNavId: "rheader-mobile-nav",
    scrollMinDelta: 50
  };

  function rheader(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        isMobile,
        $buttonMenu,
        $overlay,
        scrollMonitor,
        lastScrollY = 0
      ;

    function init(){
      initOptions();

      attachFastClick(document.body);

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

    function onScroll(e, data) {
      if (lastScrollY !== 0) {
        if (data.originalEvent.pageY < 200) {
          $el.removeClass('folded');
          return;
        }
        var down = (lastScrollY < data.originalEvent.pageY);
        if (down && Math.abs(lastScrollY - data.originalEvent.pageY) < options.scrollMinDelta) {
          return;
        }
        $el.toggleClass('folded', down);
      }
      lastScrollY = data.originalEvent.pageY;
    }

    function unfold(){
      $el.removeClass('folded');
    }

    function onClickButtonMenu(e) {
      e.preventDefault();
      toggleMenu();
    }

    function toggleMenu() {
      $('body').hasClass('rheader-mobile-nav-open') ? closeMenu() : openMenu();
    }

    function closeMenu() {
      $overlay.velocity({
        opacity: [0, 1]
      }, {
        duration: 350,
        ease: 'ease-in-out',
        display: 'none'
      });
      $('body').removeClass('rheader-mobile-nav-open');
    }

    function openMenu() {
      $overlay.velocity({
        opacity: [1, 0]
      }, {
        duration: 350,
        ease: 'ease-in-out',
        display: 'block'
      });
      $('body').addClass('rheader-mobile-nav-open');
    }

    function toggleMobile() {
      isMobile ? enableMobile() : disableMobile();
    }

    function enableMobile() {
      // Create nav
      var $nav = $('<div id="'+options.mobileNavId+'" class="rheader-mobile-nav"></div>');
      $el.find('.rheader-locales').clone().appendTo($nav);
      $el.find('.rheader-nav').clone().appendTo($nav);
      $el.find('.rheader-button-around').clone()
        .insertBefore($nav.find('.rheader-nav-item.account'))
        .wrap('<li class="rheader-nav-item around"></li>');
      $el.append($nav);

      $overlay = $('<div id="'+options.mobileNavId+'-overlay" class="rheader-mobile-nav-overlay"></div>').appendTo($el);

      // Monitor scroll
      scrollMonitor = PubSub.subscribe('scroll', onScroll);

      $el.on('mouseenter', unfold);
    }

    function disableMobile() {
      // Remove nav
      var $nav = $('#'+options.mobileNavId);
      $nav.remove();
      $el.removeClass('rheader-mobile-nav-open');

      if ($overlay) {
        $overlay.remove();
        $overlay = null;
      }

      // Stop monitoring scroll
      if (scrollMonitor) {
        PubSub.unsubscribe(scrollMonitor);
      }
      unfold();
      $el.off('mouseenter', unfold);
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
