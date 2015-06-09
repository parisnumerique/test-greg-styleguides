'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var Cookies = require('cookies-js');

var Paris = window.Paris || {};

Paris.video = (function(){

  function video(selector){
    var $el     = $(selector),
      $placeholder,
      $embed,
      $wrapper;

    function init(){

      $placeholder = $el.find('.video-placeholder');
      $embed = $el.find('.video-embed');
      $wrapper = $el.find('.video-wrapper');

      if ($embed.length === 0) {return;}

      $placeholder.on('click', 'a[data-action="allow_cookies"]', onClickAllowCookies);

      if (Cookies.get(Paris.config.cnil.cookie.name) === Paris.config.cnil.cookie.value) {
        renderVideo();
      }
    }

    function onClickAllowCookies(e){
      e.preventDefault();
      Cookies.set(Paris.config.cnil.cookie.name, Paris.config.cnil.cookie.value, {
        expires: Paris.config.cnil.cookie.expires
      });
      renderVideo();
    }

    function renderVideo(){
      var embed = $embed.text();
      $wrapper.html(embed);
      $embed.remove();
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      video(this);
    });
  };

})();

$(document).ready(function(){
  Paris.video('.component-video');
});
