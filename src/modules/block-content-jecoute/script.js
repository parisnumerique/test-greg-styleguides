'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.blockContentJecoute = (function(){

  var defaultOptions = {
    timing: 4000
  };

  function blockContentJecoute(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $items,
        $pause,
        isPaused = false,
        timeoutNext;

    function init(){
      initOptions();

      $items = $el.find('.block-content-item');
      $pause = $el.find('.block-content-jecoute-pause');

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

      $next.find('.progress').velocity({
        width: ["100%", 0]
      }, {
        duration: options.timing,
        easing: 'linear',
        complete: answer
      });
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
      $pause.toggleClass('paused');

      var $current = getCurrent();

      if (isPaused) {
        // resume
        if ($current.hasClass('answered')) {
          next();
        } else {
          $current.find('.progress').velocity({
            width: "100%"
          }, {
            duration: 200,
            complete: answer
          });
        }
      } else {
        // pause
        $current.find('.progress').velocity('stop');
        clearTimeout(timeoutNext);
      }

      isPaused = !isPaused;
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      blockContentJecoute(this, userOptions);
    });
  };

})();

$(document).ready(function() {
  Paris.blockContentJecoute('.block-content-jecoute');
});
