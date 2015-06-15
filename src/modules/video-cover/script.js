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

      renderVideo();
      PubSub.subscribe('cookies:updated', renderVideo);
    }

    function onClickAllowCookies(e){
      e.preventDefault();
      Cookies.set(Paris.config.cookies.cnil.name, Paris.config.cookies.cnil.value, {
        expires: Paris.config.cookies.cnil.expires
      });
      renderVideo();
    }

    function renderVideo(){
      if ($embed === null || Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {return;}
      var embed = $embed.text();
      $el.html(embed);
      $embed.remove();
      $embed = null;
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
