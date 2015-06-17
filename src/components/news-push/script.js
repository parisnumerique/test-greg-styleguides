'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.newsPush = (function(){

  function newsPush(selector){
    var $el = $(selector);

    function init(){
      $el.addClass('hidden');
      PubSub.subscribe('scroll.document', testVisibility);
      testVisibility();
    }

    function testVisibility() {
      if (nearViewport()) {
        $el.removeClass('hidden');
      }
    }

    function nearViewport() {
      var el = $el[0];
      var margin = 200;
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight + margin || document.documentElement.clientHeight + margin)
      );
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      newsPush(this);
    });
  };

})();

$(document).ready(function(){
  Paris.newsPush('.component-news-push');
});
