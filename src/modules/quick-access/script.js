'use strict';
require('velocity-animate');

var $ = require('jquery');

var Paris = window.Paris || {};

Paris.quickAccess = (function(){

  var defaultOptions = {
  };

  function quickAccess(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $searchField,
      $buttons,
      $close,
      isSearching = false;

    function init(){
      initOptions();

      $searchField = $el.find('.quick-access-search-field');
      $buttons = $el.find('.quick-access-buttons');
      $close = $el.find('.quick-access-close-search');

      $searchField.on('input', onStartSearching);
      $searchField.on('focus', function(){
        if ($searchField.val() !== '') {
          onStartSearching();
        }
      });
      $close.on('click', onStopSearching);

      if ($el.hasClass('searching')) {
        onStartSearching();
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onStartSearching(){
      if (isSearching) {return false;}
      isSearching = true;
      $el.addClass('searching');
      $buttons.velocity({
        opacity: 0
      }, {
        display: "none",
        duration: 350,
        ease: "ease"
      });
    }

    function onStopSearching(){
      if (!isSearching) {return false;}
      isSearching = false;
      $el.removeClass('searching');
      $buttons.velocity({
        opacity: 1
      }, {
        display: "block",
        duration: 350,
        ease: "ease"
      });
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      quickAccess(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.quickAccess('.quick-access');
});
