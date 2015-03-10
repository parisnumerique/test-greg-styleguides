'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var fs = require('fs');

var Paris = window.Paris || {};

Paris.anchors = (function(){

  var defaultOptions = {
  };

  function anchors(selector, userOptions){
    var $el = $(selector),
        anchorsSelector = (userOptions && userOptions.anchorsSelector) || 'h2',
        $anchors,
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      PubSub.subscribe('anchors:ready', setAffix);
    }

    function setAffix() {
      // no affix if there is not enough place to show all the anchors
      if($el.find('.anchors-list').height() > window.innerHeight - $('header').height() - 100){
        return;
      }
      var $nextContent = $el.parents('.layout-content').next('.layout-content');
      var offsets = {
        top: $('.layout-left-col').position().top - $('header').height(),
        bottom: $('body').height() - $nextContent.offset().top + $('header').height()
      };

      $el.affix({
        offset: offsets
      });
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      anchors(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.anchors('.layout-aside .aside-wrapper');
});
