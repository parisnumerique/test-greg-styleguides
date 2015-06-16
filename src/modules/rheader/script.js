'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.rheader = (function(){

  var defaultOptions = {
    breakpoint: "rheader-medium",
    mobileNavId: "rheader-mobile-nav",
    scrollMinDelta: 50
  };

  function rheader(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $buttonMenu,
        $overlay,
        scrollMonitor,
        lastScrollY = 0
      ;

    function init(){
      initOptions();

      $buttonMenu = $el.find('.rheader-button-menu');

      PubSub.subscribe('responsive.' + options.breakpoint + '.enable', enableMobileNav);
      PubSub.subscribe('responsive.' + options.breakpoint + '.disable', disableMobileNav);

      // fix or unfix
      PubSub.subscribe('scroll.notice.down', fix);
      PubSub.subscribe('scroll.notice.up', unfix);
      PubSub.subscribe('header:search:close', fix);
      PubSub.subscribe('notice.closed', function(e, data){
        if (data && data.id === "notice_home_top") {
          fix();
        }
      });
      if(!$('.notice.top').length || $(document).scrollTop() >= $('.notice.top').height() ) {
        fix();
      }

      if (!$el.hasClass('standalone')) {
        // in standalone mode, we follow the links
        $buttonMenu.on('click', onClickButtonMenu);
        $('body').on('click', '#'+options.mobileNavId+'-overlay', closeMenu);
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onScroll(e, data) {
      if (lastScrollY !== 0) {
        if (data.originalEvent.pageY < 200) {
          unfold();
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

    function fix() {
      $el.addClass('fixed');
    }

    function unfix() {
      $el.removeClass('fixed');
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

    function enableMobileNav() {
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
      scrollMonitor = PubSub.subscribe('scroll.document', onScroll);

      $el.on('mouseenter', unfold);
    }

    function disableMobileNav() {
      // Remove nav
      var $nav = $('#'+options.mobileNavId);
      $nav.remove();
      $el.removeClass('rheader-mobile-nav-open');
      $('body').removeClass('rheader-mobile-nav-open');

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
