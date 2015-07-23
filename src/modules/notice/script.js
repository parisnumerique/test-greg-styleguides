'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.notice = (function(){

  var defaultOptions = {
  };

  function notice(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        api = {},
        $close;

    function init(){
      initOptions();

      $close = $el.find('.close, .button[data-action="close"]');

      $close.on('click', onClickClose);

      $el.data('api', api);

      PubSub.subscribe('notice.close', onCloseEvent);
      if ($el.attr('id') !== 'notice_cnil' && sessionStorage.getItem($el.attr('id')) === 'closed') {
        api.close();
      }

      if ($el.hasClass('closed')) {
        PubSub.subscribe('notice.open', onOpenEvent);

        if ($el.attr('id') !== 'notice_cnil' && sessionStorage.getItem($el.attr('id')) !== 'closed') {
          api.open();
        }
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClickClose(e){
      e.preventDefault();
      api.close();
    }

    function onCloseEvent(e, data){
      if (data.id === $el.attr('id')) {
        api.close();
      }
    }

    function onOpenEvent(e, data){
      if (data.id === $el.attr('id')) {
        api.open();
      }
    }

    function saveCloseForSession(){
      sessionStorage.setItem($el.attr('id'), 'closed');
    }

    // The API for external interaction

    api.close = function(){
      $el.css('min-height', 'auto');
      $el.velocity({
        height: 0,
        opacity: [0, 1]
      }, {
        duration: 350,
        easing: "ease",
        complete: function(){
          saveCloseForSession();
          var data = {};
          if ($el.attr('id')) {data.id = $el.attr('id');}
          PubSub.publish('notice.closed', data);
          $el.remove();
        }
      });
    };

    api.open = function(){
      $el.velocity({
        opacity: [1, 0]
      }, {
        display: 'block',
        duration: 350,
        easing: "ease",
        complete: function(){
          var data = {};
          if ($el.attr('id')) {data.id = $el.attr('id');}
          PubSub.publish('notice.opened', data);
        }
      });
    };

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      notice(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.notice('.notice');
});
