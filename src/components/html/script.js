'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var Cookies = require('js-cookie');

var Paris = window.Paris || {};

Paris.html = (function(){

  function html(selector){
    var $el     = $(selector),
      $placeholder,
      $embed,
      $wrapper;

    function init(){

      $placeholder = $el.find('.html-placeholder');
      $embed = $el.find('.html-embed');
      $wrapper = $el.find('.html-wrapper');

      if ($embed.length === 0) {return;}
      var embed = $embed.text();
      if ($(embed).data('always-render') === true) {renderHtml(); return;}

      $placeholder.on('click', 'a[data-action="allow_cookies"]', onClickAllowCookies);

      renderHtmlIfCookie();
      PubSub.subscribe('cookies.updated', renderHtmlIfCookie);
    }

    function onClickAllowCookies(e){
      e.preventDefault();
      PubSub.publish('cookies.allow');
    }

    function renderHtmlIfCookie(){
      if ($embed === null || Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {return;}
      renderHtml();
    }

    function renderHtml(){
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
      html(this);
    });
  };

})();

$(document).ready(function(){
  Paris.html('.component-html');
});
