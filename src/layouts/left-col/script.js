'use strict';

var PubSub = require('pubsub-js');
var fs = require('fs');

var Paris = window.Paris || {};

Paris.leftCol = (function(){

  function leftCol(selector){
    var $el = $(selector);

    function init(){
      PubSub.subscribe('anchors:ready', setAffix);
    }

    function setAffix() {
      // no affix if there is not enough place to show all the anchors
      if($el.find('.anchors-list').height() > window.innerHeight - $('header').height() - 100){
        return;
      }
      var $nextContent = $el.parents('.layout-content').next('.layout-content');
      var offsets = {
        top: $('.layout-left-col').offset().top - $('header').height(),
        bottom: $('body').height() - $nextContent.offset().top + $('header').height()
      };
      $el.affix({
        offset: offsets
      });
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      leftCol(this);
    });
  };

})();

$(document).ready(function(){
  Paris.leftCol('.layout-aside .aside-wrapper');
});
