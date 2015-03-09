'use strict';
require('velocity-animate');

var $ = require('jquery');
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

      $close = $el.find('.close');

      $close.on('click', onClickClose);

      $el.data('api', api);
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

    // The API for external interaction

    api.close = function(){
      $el.velocity({
        height: 0,
        opacity: 0
      }, {
        duration: 350,
        easing: "ease",
        complete: function(){
          var data = {};
          if ($el.attr('id')) {data.id = $el.attr('id');}
          PubSub.publish('notice:close', data);
          $el.remove();
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
