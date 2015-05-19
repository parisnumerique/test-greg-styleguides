'use strict';
require('velocity-animate');
var has = require('lodash.has');
var values = require('lodash.values');
var throttle = require('lodash.throttle');
var PubSub = require('pubsub-js');

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
      api = {},
      $nav, $subnav, $content,
      $navItems, $navItemsLinks, $navMore,
      $subnavSections, $subnavSectionsLinks, $subnavDefault,
      $contentWrapper,
      root,
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
      $(window).on('resize', throttle(setHeight, 1000));

      $navItemsLinks.on('click', onClickNavLink);
      $subnavSectionsLinks.on('click', onClickSubnavLink);

      if ($subnav.hasClass('has-current-item')) {currentLevel = "subnav";}
      if ($el.hasClass('has-content')) {currentLevel = "content";}

      PubSub.subscribe("hub:init", function(e, data){
        root = data;
      });

      $el.data('api', api);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function setHeight() {
      var newHeight = calculateHeight();
      $el.css("height", newHeight);
    }

    function calculateHeight(){
      if (!has(heights, 'nav')) {
        var navHeight = $navItems.outerHeight(true) + $navMore.outerHeight();
        var navPadding = $nav.outerHeight() - $nav.height();
        heights.nav = navHeight + navPadding;
      }
      if (!has(heights, 'subNav')) {
        var subNavHeight = 0;
        var subNavPadding = $subnav.outerHeight() - $subnav.height();
        $subnavSections.add($subnavDefault).each(function () {
          subNavHeight = Math.max(subNavHeight, $(this).outerHeight());
        });
        heights.subNav = subNavHeight + subNavPadding;
      }
      var contentHeight = $contentWrapper.outerHeight();
      var contentPadding = $content.outerHeight() - $content.height();
      heights.content = contentHeight + contentPadding;
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

      var $currentNavItemsLink = $navItemsLinks.filter('.current');
      PubSub.publish("sections-panel:change", {
        image: $currentNavItemsLink.data('background'),
        title: $currentNavItemsLink.text()
      });

      if (Modernizr.history) {
        history.replaceState({}, $currentNavItemsLink.text(), $currentNavItemsLink.attr("href"));
      }
    }

    function closeSubnavSection() {
      $navItemsLinks.removeClass("current");
      if (currentLevel === "content") {closeContent();}
      $subnavDefault.show();
      $subnavSections.hide();
      currentLevel = "nav";

      PubSub.publish("sections-panel:change", {
        root: true,
        image: $subnavDefault.data('background'),
        title: root.title
      });

      if (Modernizr.history) {
        history.replaceState({}, root.title, root.href);
      }
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
      $.ajax({
        url: url,
        type: "get",
        success: function(response){
          // If the full page is loaded, only insert what's in the content-wrapper
          // If we can't find a content-wrapper, insert the whole response
          var content = $(response).find('.sections-panel-content-wrapper').html() || response;
          $contentWrapper.html(content).velocity({
            opacity: [1, 0]
          }, $.extend({}, options.velocity, {
            complete: setHeight,
            display: 'block'
          }));
        }
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

      var $currentNavItemsLink = $navItemsLinks.filter('.current');
      var $currentSubnavSectionsLink = $subnavSectionsLinks.filter('.current');
      var currentTitle = $currentSubnavSectionsLink.find('.sections-panel-subnav-item-title').text();
      PubSub.publish("sections-panel:change", {
        image: $currentSubnavSectionsLink.data('background'),
        title: currentTitle,
        parent: {
          id: $currentNavItemsLink.data("subnav-section"),
          href: $currentNavItemsLink.attr("href"),
          text: $currentNavItemsLink.text()
        }
      });

      if (Modernizr.history) {
        history.replaceState({}, currentTitle, $currentSubnavSectionsLink.attr("href"));
      }
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


    // The API for external interaction

    api.openSection = function(id){
      var link = $navItemsLinks.filter("[data-subnav-section='" + id + "']");
      $(link).trigger('click');
    };

    api.closeSection = function(){
      closeSubnavSection();
    };

    api.currentSection = function(){
      var $currentNavItemsLink = $navItemsLinks.filter('.current');
      return $currentNavItemsLink.data("subnav-section")
    };


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
