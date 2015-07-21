'use strict';

var Paris = window.Paris || {};

Paris.form = (function(){

  function form(selector){
    var $el = $(selector),
      $captcha;

    function init(){
      $captcha = $el.find('.form-item-captcha');

      if ($captcha.length) {
        renderCaptcha();
      }
    }

    function renderCaptcha(){
      $captcha.find('.g-recaptcha').attr('data-sitekey', Paris.config.captcha.key);
      $('body').append('<script src="https://www.google.com/recaptcha/api.js" async defer></script>');
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      form(this);
    });
  };

})();

$(document).ready(function(){
  Paris.form('.component-form');
});
