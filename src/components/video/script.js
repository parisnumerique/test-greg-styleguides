'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var Cookies = require('js-cookie');

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

      renderVideo();
      PubSub.subscribe('cookies.updated', renderVideo);
    }

    function onClickAllowCookies(e){
      e.preventDefault();
      PubSub.publish('cookies.allow');
    }

    function renderVideo(){
      if ($embed === null || Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {return;}
      var embed = $embed.text();
      $wrapper.html(embed);
      $embed.remove();
      $embed = null;
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
