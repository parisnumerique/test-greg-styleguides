'use strict';
require('velocity-animate');
var has = require('lodash.has');
var values = require('lodash.values');

var Paris = window.Paris || {};

Paris.sectionsPanel = (function(){

  var defaultOptions = {
    velocity: {
      duration: 350,
      ease: 'ease-in-out',
      queue: false
    }
  };

  function sectionsPanel(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $nav, $subnav, $content,
      $navItems, $navItemsLinks, $navMore,
      $subnavSections, $subnavSectionsLinks, $subnavDefault,
      $contentWrapper,
      currentLevel = "nav",
      heights = {};

    function init(){
      initOptions();

      $nav = $el.find('.sections-panel-nav');
      $navItems = $nav.find('.sections-panel-nav-items');
      $navItemsLinks = $navItems.find('a');
      $navMore = $nav.find('.sections-panel-nav-more');

      $subnav = $el.find('.sections-panel-subnav');
      $subnavDefault = $subnav.find('.sections-panel-subnav-default');
      $subnavSections = $subnav.find('.sections-panel-subnav-section');
      $subnavSectionsLinks = $subnavSections.find('a');

      $content = $el.find('.sections-panel-content');
      $contentWrapper = $content.find('.sections-panel-content-wrapper');

      setHeight();

      $navItemsLinks.on('click', onClickNavLink);
      $subnavSectionsLinks.on('click', onClickSubnavLink);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function setHeight() {
      var newHeight = calculateHeight();
      $el.css("height", newHeight);
      //$el.velocity({
      //  height: newHeight
      //}, options.velocity);
      //console.log("== setHeight", newHeight);
    }

    function calculateHeight(){
      if (!has(heights, 'nav')) {
        var navHeight = $navItems.outerHeight(true) + $navMore.outerHeight();
        var navPadding = $nav.outerHeight() - $nav.height();
        //console.log("navHeight", navHeight);
        //console.log("navPadding", navPadding);
        heights.nav = navHeight + navPadding;
      }
      if (!has(heights, 'subNav')) {
        var subNavHeight = 0;
        var subNavPadding = $subnav.outerHeight() - $subnav.height();
        $subnavSections.add($subnavDefault).each(function () {
          console.log($(this).attr('id'), $(this).innerHeight(), $(this).height(), $(this).outerHeight());
          subNavHeight = Math.max(subNavHeight, $(this).outerHeight());
        });
        //console.log("subNavHeight", subNavHeight);
        //console.log("subNavPadding", subNavPadding);
        heights.subNav = subNavHeight + subNavPadding;
      }
      var contentHeight = $contentWrapper.outerHeight();
      var contentPadding = $content.outerHeight() - $content.height();
      console.log("contentHeight", contentHeight);
      console.log("contentPadding", contentPadding);
      heights.content = contentHeight + contentPadding;
      console.log("heights", heights);
      return Math.max.apply(null, values(heights));
    }

    function onClickNavLink(e) {
      e.preventDefault();
      var $this = $(this);
      var subnavSection = $this.data('subnav-section');
      $navItemsLinks.removeClass("current");
      $this.addClass("current");
      if (currentLevel === "content") {closeContent();}
      openSubnavSection(subnavSection);
    }

    function openSubnavSection(section) {
      var $section = $subnavSections.filter('#subnav-' + section);
      $subnavDefault.hide();
      $subnavSections.hide();
      $section.velocity({
        opacity: 1
      }, $.extend({}, options.velocity, {display: 'block'}));
      currentLevel = "subnav";
    }

    function onClickSubnavLink(e) {
      e.preventDefault();
      var $this = $(this);
      var url = $this.attr('href');
      $subnavSectionsLinks.removeClass("current");
      $this.addClass("current");
      openContent(url);
    }

    function openContent(url){
      $contentWrapper.load(url, function(){
        setHeight();
        $(this).velocity({
          opacity: 1
        }, $.extend({}, options.velocity, {display: 'block'}));
      });
      if (currentLevel !== "content") {
        $nav.addClass("closed");
        $subnav.velocity({
          translateX: -200
        });
        $content.velocity({
          opacity: 1,
          translateX: [0, 200]
        }, $.extend({}, options.velocity, {
          delay: 200,
          display: 'block'
        }));
      }
      currentLevel = "content";
    }

    function closeContent(){
      $nav.removeClass("closed");
      $subnavSectionsLinks.removeClass("current");
      $contentWrapper.empty();
      $subnav.velocity({
        translateX: 0
      }, $.extend({}, options.velocity, {
        delay: 200
      }));
      $content.velocity({
        opacity: 0,
        translateX: [200, 0]
      }, $.extend({}, options.velocity, {
        complete: setHeight,
        display: 'none'
      }));
      currentLevel = "subnav";
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      sectionsPanel(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.sectionsPanel('.sections-panel');
});
