'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.jecoute = (function(){

  var defaultOptions = {
  };

  function header(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      setInterval(changeVisibleItem, 10000);
      changeVisibleItem();
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function changeVisibleItem() {
      var current = $el.find('.visible') || $el.find('.jecoute-item:first-child');
      var $next = $el.find('.visible').next('.jecoute-item');

      $el.find('.jecoute-item').removeClass('answered');

      current.removeClass('visible');

      if($next.length) {
        $next.addClass('visible');
      }
      else {
        $next = $el.find('.jecoute-item:first-child').addClass('visible');
      }

      $next.find('.progress').velocity({
          width: "100%"
      }, {
          duration: 10000,
          easing: 'linear',
          complete: function() {
            $next.find('.jecoute-question').velocity({scale: 1, translateY: 0}, {duration: 0 });
            $next.find('.jecoute-answer').velocity({scale: 0.5, translateY: '130px'}, {duration: 0 });
            $next.find('.progress').velocity({width: 0}, {duration: 0 });
          }
      });

      setTimeout(function () {
        $next.addClass('answered');

        $next.find('.jecoute-question').velocity(
            {scale: 0.5, translateY: "-260px"},
            {
              duration: 300,
              complete: function () {
                $next.find('.jecoute-answer').velocity(
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
      header(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.jecoute('.jecoute');
});
