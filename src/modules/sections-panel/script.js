'use strict';
require('velocity-animate');
var has = require('lodash.has');
var values = require('lodash.values');
var map = require('lodash.map');
var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.sectionsPanel = (function(){

  var defaultOptions = {
    breakpoint: "small",
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
      $contentWrapper, $contentBack,
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
      $contentBack = $content.find('.sections-panel-content-back');

      PubSub.subscribe('responsive.resize', setHeight);
      PubSub.subscribe('responsive.' + options.breakpoint + '.enable', enableSmall);
      PubSub.subscribe('responsive.' + options.breakpoint + '.disable', disableSmall);

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
      var newHeight = Paris.responsive.sizes[options.breakpoint].is ? 'auto' : calculateHeight();
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

    function enableSmall() {
      $navItemsLinks.off('click', onClickNavLink);
      $subnavSectionsLinks.off('click', onClickSubnavLink);
    }

    function disableSmall() {
      $navItemsLinks.on('click', onClickNavLink);
      $subnavSectionsLinks.on('click', onClickSubnavLink);
    }

    function onClickNavLink(e) {
      e.preventDefault();
      var $this = $(this);
      var subnavSection = $this.data('subnav-section');
      $nav.addClass('has-current-item');
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
      $subnav.addClass('has-current-item');
      currentLevel = "subnav";

      var $currentNavItemsLink = $navItemsLinks.filter('.current');
      PubSub.publish("sections-panel:change", {
        image: $currentNavItemsLink.data('background'),
        title: $currentNavItemsLink.text()
      });

      $('title').text($currentNavItemsLink.data('pageTitle'));

      if (Modernizr.history) {
        history.replaceState({}, $currentNavItemsLink.text(), $currentNavItemsLink.attr("href"));
      }
    }

    function closeSubnavSection() {
      $navItemsLinks.removeClass("current");
      if (currentLevel === "content") {closeContent();}
      $subnavDefault.show();
      $subnavSections.hide();
      $subnav.removeClass('has-current-item');
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
      var url = $this.data('json');
      $subnavSectionsLinks.removeClass("current");
      $this.addClass("current");
      openContent(url);
    }

    function openContent(url){
      $.ajax({
        url: url,
        type: "get",
        success: renderContent
      });

      if (currentLevel !== "content") {
        $nav.addClass("closed");
        $subnav.velocity({
          translateX: -200
        });
        $content.velocity({
          opacity: [1, 0],
          translateX: [0, 200]
        }, $.extend({}, options.velocity, {
          complete: function(){
            $el.addClass('has-content');
          },
          delay: 200,
          display: 'block'
        }));
      }
      currentLevel = "content";

      var $currentNavItemsLink = $navItemsLinks.filter('.current');
      var $currentSubnavSectionsLink = $subnavSectionsLinks.filter('.current');
      $contentBack.attr('href', $currentNavItemsLink.attr('href'));
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


      $('title').text($currentSubnavSectionsLink.data('pageTitle'));

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
        opacity: [0, 1],
        translateX: [200, 0]
      }, $.extend({}, options.velocity, {
        complete: function(){
          $el.removeClass('has-content');
          setHeight();
        },
        display: 'none'
      }));
      currentLevel = "subnav";
    }

    function renderContent(data) {
      PubSub.publish("sections-panel:change", {
        news: data.news
      });

      data = data.content;

      var content =
        '<div class="sections-panel-intro">' + data.intro + '</div>' +
        '<ul class="sections-panel-content-items">';

      content += map(data.items, function(item){
        var render = '<li class="sections-panel-content-item">' +
          '<a href="'+item.href+'">' +
          '<div class="sections-panel-content-item-title">'+item.title+'</div>';
        if (item.text) {
          render += '<div class="sections-panel-content-item-text">'+item.text+'</div>';
        }
        render += '</a></li>';
        return render;
      }).join('');
      content += '</ul>';

      if (data.buttons && data.buttons.items && data.buttons.items.length) {
        content += Paris.templates.templatizer["buttons"]["buttons"](data.buttons);
      }
      if (data.more_links && data.more_links.items && data.more_links.items.length) {
        content += Paris.templates.templatizer["links"]["links"](data.more_links);
      }

      $contentWrapper.html(content).velocity({
        opacity: [1, 0]
      }, $.extend({}, options.velocity, {
        complete: setHeight,
        display: 'block'
      }));
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
