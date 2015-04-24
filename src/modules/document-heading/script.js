'use strict';

var PubSub = require('pubsub-js');
var fs = require('fs');

var Paris = window.Paris || {};

Paris.documentHeading = (function(){

  function documentHeading(selector){
    var $el = $(selector);

    function init(){
      copyTitle();
    }

    function copyTitle() {
      var title = $el.find('.document-heading-title').text();
      var $leftWrapper = $('.aside-wrapper');
      var $span = $('<span>').text(title);
      var $asideTitle = $('<h3>').html($span).addClass('aside-title');
      $leftWrapper.prepend($asideTitle);
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      documentHeading(this);
    });
  };

})();

$(document).ready(function(){
  Paris.documentHeading('.document-heading');
});
