'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var fs = require('fs');

var Paris = window.Paris || {};

Paris.leftCol = (function(){

  var defaultOptions = {
  };

  function leftCol(selector, userOptions){
    var $el = $(selector),
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
      leftCol(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.leftCol('.layout-aside .aside-wrapper');
});
