'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var Cookies = require('cookies-js');

var Paris = window.Paris || {};

Paris.videoCover = (function(){

  function videoCover(selector){
    var $el     = $(selector),
      $placeholder,
      $embed;

    function init(){

      $placeholder = $el.find('.video-cover-placeholder');
      $embed = $el.find('.video-cover-embed');

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
      $el.html(embed);
      $embed.remove();
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      videoCover(this);
    });
  };

})();

$(document).ready(function(){
  Paris.videoCover('.video-cover');
});
