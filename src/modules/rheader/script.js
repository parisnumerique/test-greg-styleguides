'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.rheader = (function(){

  var defaultOptions = {
    breakpoint: "rheader-medium",
    mobileNavId: "rheader-mobile-nav",
    scrollMinDelta: 50,
    extendOnTemplate: 'home',
    selectorButtonInPage: '.button[data-action="open-search"]'
  };

  function rheader(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $buttonMenu,
        $buttonSearch,
        $overlay,
        $mainSearch,
        scrollMonitor,
        lastScrollY = 0,
        mobileNavOpen = false
      ;

    function init(){
      initOptions();

      $buttonMenu = $el.find('.rheader-button-menu');
      $buttonSearch = $el.find('.rheader-button-search');
      $mainSearch = $('#main-search');

      PubSub.subscribe('responsive.' + options.breakpoint + '.enable', enableMobileNav);
      PubSub.subscribe('responsive.' + options.breakpoint + '.disable', disableMobileNav);

      // fix or unfix
      PubSub.subscribe('scroll.notice.down', fix);
      PubSub.subscribe('scroll.notice.up', unfix);
      PubSub.subscribe('header.search.close', fix);
      PubSub.subscribe('notice.closed', function(e, data){
        if (data && data.id === "notice_home_top") {
          fix();
        }
      });
      if(!$('.notice.top').length || $(window).scrollTop() >= $('.notice.top').height() ) {
        fix();
      }

      // extend or unextend
      PubSub.subscribe('scroll.search.down', unextend);
      PubSub.subscribe('scroll.search.up', extend);
      if ($mainSearch.length !== 0 && isAboveMainSearch()) {
        // extend initially if we are above the main search field
        extend();
      }

      // not standalone mode
      if (!$el.hasClass('standalone')) {
        // follow the links
        $buttonMenu.on('click', onClickButtonMenu);
        $('body').on('click', '#'+options.mobileNavId+'-overlay', closeMenu);
      }

      // Search
      $buttonSearch.on('click', onClickButtonSearch);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function isAboveMainSearch(){
      return $(window).scrollTop() < $mainSearch.offset().top;
    }

    function onScroll(e, data) {
      if (lastScrollY !== 0) {
        if (mobileNavOpen) {return;}
        if (data.scrollTop < 200) {
          unfold();
          return;
        }
        var down = (lastScrollY < data.scrollTop);
        if (down && Math.abs(lastScrollY - data.scrollTop) < options.scrollMinDelta) {
          return;
        }
        $el.toggleClass('folded', down);
      }
      lastScrollY = data.scrollTop;
    }

    function unfold(){$el.removeClass('folded');}

    // fix or unfix
    function fix() {$el.addClass('fixed');}
    function unfix() {$el.removeClass('fixed');}

    // extend or unextend
    function extend() {
      if ($mainSearch.length === 0 || !$('body').hasClass(options.extendOnTemplate)) {return;}
      $el.addClass('extended');
    }
    function unextend() {
      $el.removeClass('extended');
    }


    function onClickButtonMenu(e) {
      e.preventDefault();
      toggleMenu();
    }

    function onClickButtonSearch(e) {
      if (Paris.responsive.is(options.breakpoint)) {
        // below breakpoint
        return;
      }

      e.preventDefault();
      activeSearchButton(true);
      PubSub.publish('rheader.search.click');

      if ($mainSearch.length === 1) {
        // scroll to main search field and give it focus
        if (isAboveMainSearch()) {
          focusMainSearch();
          return;
        }
        var $parent = $mainSearch.closest('.layout-content');
        if ($mainSearch.length) {
          $parent.velocity("scroll",
            {
              duration: 1000,
              complete: focusMainSearch
            }
          );
        }
      }
    }

    function focusMainSearch(){
      $mainSearch.trigger('focus').velocity({
        backgroundColor: ["#ffffff", "#F8E273"]
      });
    }

    function activeSearchButton(toggle){
      $buttonSearch.toggleClass('active', toggle);
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
      mobileNavOpen = false;
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
      mobileNavOpen = true;
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

      // Search
      $mainSearch.off('focus').off('blur');
      PubSub.unsubscribe('rheader.search.close');
      $(options.selectorButtonInPage).off('click', onClickButtonSearch);
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

      // Search
      if (!$buttonSearch.hasClass('active')) {
        $mainSearch.on('focus', function(){activeSearchButton(true);})
          .on('blur', function(){activeSearchButton(false);});
      }
      PubSub.subscribe('rheader.search.close', function(){activeSearchButton(false);});

      // button in page content that can be used to open the search
      $(options.selectorButtonInPage).on('click', onClickButtonSearch);
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
