'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.blockContentJecoute = (function(){

  var defaultOptions = {
  };

  function blockContentJecoute(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $items;

    function init(){
      initOptions();

      $items = $el.find('.block-content-item');

      if ($items.length === 0) {return;}

      setInterval(changeVisibleItem, 10000);
      changeVisibleItem();
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function changeVisibleItem() {
      var $current = $items.filter('.visible') || $items.first();
      var $next = $current.next('.block-content-item');

      $items.removeClass('answered');
      $current.removeClass('visible');

      if ($next.length) {
        $next.addClass('visible');
      } else {
        $next = $items.filter(':first-child').addClass('visible');
      }

      $next.find('.progress').velocity({
          width: "100%"
      }, {
          duration: 10000,
          easing: 'linear',
          complete: function() {
            $next.find('.block-content-question').velocity({scale: 1, translateY: 0}, {duration: 0 });
            $next.find('.block-content-answer').velocity({scale: 0.5, translateY: '130px'}, {duration: 0 });
            $next.find('.progress').velocity({width: 0}, {duration: 0 });
          }
      });

      setTimeout(function () {
        $next.addClass('answered');

        $next.find('.block-content-question').velocity(
            {scale: 0.5, translateY: "-260px"},
            {
              duration: 300,
              complete: function () {
                $next.find('.block-content-answer').velocity(
                  {translateY: "-130px", scale: 1},
                  {duration: 300}
                );
              }
            }
          );

      }, 5000);

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

$(document).ready(function(){
  Paris.blockContentJecoute('.block-content-jecoute');
});
