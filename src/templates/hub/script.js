'use strict';
require('velocity-animate');

var jade = require('jade');
var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.hub = (function(){

  var defaultOptions = {
  };

  function hub(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $hubHeading,
      $sectionsPanel,
      currentSection,
      $breadcrumbsParent,
      breadcrumbsBase = [],
      $newsParent
      ;

    function init(){
      initOptions();

      $hubHeading = $el.find('.hub-heading');
      $sectionsPanel = $el.find('.sections-panel');
      $breadcrumbsParent = $el.find('.breadcrumbs').parent();
      $newsParent = $el.find('.news-list').parent();

      currentSection = $sectionsPanel.data('api').currentSection();

      var $rootLink = $breadcrumbsParent.find('a:eq(2)');
      PubSub.publish("hub:init", {
        href: $rootLink.attr("href"),
        title: $rootLink.text()
      });

      // a:eq(2) = only match the "hub" link
      $breadcrumbsParent.on('click', 'a:eq(2)', onClickBreadcrumbsRoot);
      // a:gt(2) = only match the links after the "hub" link
      $breadcrumbsParent.on('click', 'a:gt(2)', onClickBreadcrumbs);

      var $breadcrumbsBase = $breadcrumbsParent.find('.breadcrumbs-item a:lt(2)');
      $breadcrumbsBase.each(function(){
        var $this = $(this);
        breadcrumbsBase.push({
          "href": $this.attr("href"),
          "text": $this.text()
        });
      });

      PubSub.subscribe("sections-panel:change", onSectionsPanelChange);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onSectionsPanelChange(e, data) {
      if (data.image && data.title) {
        renderHubHeading({
          image: data.image,
          text: data.title
        });
      }

      if (data.title || data.parent) {
        var breadcrumbs = {
          "items": breadcrumbsBase.slice()
        };

        if (data.parent) {
          currentSection = data.parent.id;
          breadcrumbs.items.push(data.parent);
        }

        if (data.root !== true) {
          breadcrumbs.items.push({
            "text": data.title
          });
        }

        renderBreadcrumbs(breadcrumbs);
      }

      if (data.news) {
        renderNews(data.news);
      }
    }

    function onClickBreadcrumbsRoot(e){
      e.preventDefault();
      $sectionsPanel.data('api').closeSection();
    }

    function onClickBreadcrumbs(e){
      e.preventDefault();
      $sectionsPanel.data('api').openSection(currentSection);
    }

    function renderHubHeading(data){
      var hubHeading = Paris.templates.templatizer["hub-heading"]["hub-heading"](data);
      $hubHeading.replaceWith(hubHeading);
      $hubHeading = $el.find('.hub-heading');
    }

    function renderBreadcrumbs(data){
      var breadcrumbs = Paris.templates.templatizer["breadcrumbs"]["breadcrumbs"](data);
      $breadcrumbsParent.html(breadcrumbs);
    }

    function renderNews(data){
      $newsParent.find('.news-list').remove();
      if(data && data.items) {
        var news = Paris.templates.templatizer["news-list"]["news-list"](data);
        $newsParent.closest('.layout-content').show();
        $newsParent.append(news);
      } else {
        $newsParent.closest('.layout-content').hide();
      }
    }


    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      hub(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.hub('body.hub');
});
