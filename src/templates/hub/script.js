'use strict';
require('velocity-animate');

var $ = require('jquery');
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
      $breadcrumbsParent,
      breadcrumbsFirstItem
      ;

    function init(){
      initOptions();

      $hubHeading = $el.find('.hub-heading');
      $breadcrumbsParent = $el.find('.breadcrumbs').parent();

      var $breadcrumbsFirstItem = $breadcrumbsParent.find('.breadcrumbs-item a').first();
      breadcrumbsFirstItem = {
        "href": $breadcrumbsFirstItem.attr("href"),
        "text": $breadcrumbsFirstItem.text()
      };

      PubSub.subscribe("sections-panel:change", onSectionsPanelChange);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onSectionsPanelChange(e, data) {
      setTitle(data.title);

      var breadcrumbs = {
        "items": [
          breadcrumbsFirstItem
        ]
      };

      if (data.parent) {
        breadcrumbs.items.push(data.parent);
      }

      breadcrumbs.items.push({
        "text": data.title
      });

      renderBreadcrumbs(breadcrumbs);
    }

    function setTitle(title){
      $hubHeading.find("h1").text(title);
    }

    function renderBreadcrumbs(data){
      var breadcrumbs = Paris.templates.templatizer["breadcrumbs"]["breadcrumbs"](data);
      $breadcrumbsParent.html(breadcrumbs);
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
