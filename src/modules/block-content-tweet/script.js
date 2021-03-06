'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.blockContentTweet = (function(){

  var defaultOptions = {
    timing: 8000
  };

  function blockContentTweet(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $items,
        $pause,
        isPaused = false,
        timeoutNext;

    function init(){
      initOptions();

      $items = $el.find('.block-content-item');
      $pause = $el.find('.icon-switch-pause');

      if ($items.length === 0) {return;}
      $pause.on('click', onClickPause);

      iterate();
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function getCurrent() {
      return $items.filter('.visible') || $items.first();
    }

    function iterate() {
      var $current = getCurrent();
      var $next = $current.next('.block-content-item');

      $items.removeClass('answered');
      $current.removeClass('visible');

      if ($next.length) {
        $next.addClass('visible');
      } else {
        $next = $items.filter(':first-child').addClass('visible');
      }

      timeoutNext = setTimeout(iterate, options.timing);
    }

    function next() {
      $items.parent().append(getCurrent());
      iterate();
    }

    function answer() {
      getCurrent().addClass('answered');
      timeoutNext = setTimeout(next, options.timing);
    }

    function onClickPause(e) {
      e.preventDefault();

      if (isPaused) {
        // resume
        timeoutNext = setTimeout(iterate, options.timing);
      } else {
        // pause
        clearTimeout(timeoutNext);
      }

      isPaused = !isPaused;
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      blockContentTweet(this, userOptions);
    });
  };

})();

$(document).ready(function() {
  Paris.blockContentTweet('.block-content-tweet');
});
