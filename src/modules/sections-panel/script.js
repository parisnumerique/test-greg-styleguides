'use strict';
require('velocity-animate');

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
      $navItems, $navItemsLinks, $navOverlay,
      $subnavSections, $subnavSectionsLinks, $subnavDefault,
      $contentWrapper,
      currentLevel = "nav";

    function init(){
      initOptions();

      $nav = $el.find('.sections-panel-nav');
      $navItems = $nav.find('.sections-panel-nav-items');
      $navItemsLinks = $navItems.find('a');

      $subnav = $el.find('.sections-panel-subnav');
      $subnavDefault = $subnav.find('.sections-panel-subnav-default');
      $subnavSections = $subnav.find('.sections-panel-subnav-section');
      $subnavSectionsLinks = $subnavSections.find('a');

      $content = $el.find('.sections-panel-content');
      $contentWrapper = $content.find('.sections-panel-content-wrapper');

      $navOverlay = $('<div class="sections-panel-nav-overlay" />').appendTo($nav);

      //$el.on('mouseenter', onMouseEnter);
      //$el.on('mouseleave', onMouseLeave);
      $navItemsLinks.on('click', onClickNavLink);
      $nav.on('mouseenter', onMouseEnterNav);
      $nav.on('mouseleave', onMouseLeaveNav);
      $subnavSectionsLinks.on('click', onClickSubnavLink);

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }
    //
    //function onMouseEnter(e){
    //  console.log('onMouseEnter', e);
    //  if (currentLevel !== "content") {return;}
    //  $subnav.velocity({
    //    translateX: -190
    //  }, options.velocity);
    //}

    //function onMouseLeave(e){
    //  console.log('onMouseLeave', e);
    //  if (currentLevel !== "content") {return;}
    //  if (currentLevel !== "content") {return;}
    //  $subnav.velocity({
    //    translateX: -200
    //  }, options.velocity);
    //}
    //
    function onMouseEnterNav(){
      console.log('onMouseEnterNav', currentLevel);
      if (currentLevel !== "content") {return;}
      $navOverlay.velocity({
        opacity: 0
      }, $.extend({}, options.velocity, {display: 'none'}));
    }

    function onMouseLeaveNav(){
      console.log('onMouseLeaveNav', currentLevel);
      if (currentLevel !== "content") {return;}
      $navOverlay.velocity({
        opacity: 1
      }, $.extend({}, options.velocity, {display: 'block'}));
    }

    function onClickNavLink(e) {
      e.preventDefault();
      var $this = $(this);
      var subnavSection = $this.data('subnav-section');
      $navItemsLinks.removeClass("active");
      $this.addClass("active");
      openSubnavSection(subnavSection);
      closeContent();
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
      $subnavSectionsLinks.removeClass("active");
      $this.addClass("active");
      openContent(url);
    }

    function openContent(url){
      $contentWrapper.load(url).velocity({
        opacity: 1
      }, $.extend({}, options.velocity, {display: 'block'}));
      if (currentLevel !== "content") {
        $subnav.velocity({
          translateX: -200
        }, options.velocity);
        $navOverlay.velocity({
          opacity: 1
        }, $.extend({}, options.velocity, {display: 'block'}));
        $content.velocity({
          opacity: 1,
          translateX: [-200, 100]
        }, $.extend({}, options.velocity, {display: 'block'}));
      }
      currentLevel = "content";
    }

    function closeContent(){
      $subnavSectionsLinks.removeClass("active");
      $contentWrapper.empty();
      $subnav.velocity({
        translateX: 0
      }, options.velocity);
      $navOverlay.velocity({
        opacity: 0
      }, $.extend({}, options.velocity, {display: 'none'}));
      $content.velocity({
        opacity: 0,
        translateX: [100, -200]
      }, $.extend({}, options.velocity, {display: 'none'}));
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
