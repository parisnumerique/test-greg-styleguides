'use strict';

var Paris = window.Paris || {};

Paris.form = (function(){

  function form(selector){
    var $el = $(selector),
      $captcha,
      $currentField;

    function init(){
      $captcha = $el.find('.form-item-captcha');

      $el.on('focus', 'input, textarea, select', onFieldFocus);
      $el.on('blur', 'input, textarea, select', onFieldBlur);
      $el.on('submit', onSubmit);

      renderCaptcha();
    }

    function onFieldFocus(){
      $currentField = $(this);
      $currentField.on('input', onCurrentFieldInput)
                   .on('change', onCurrentFieldInput);
    }

    function onCurrentFieldInput(){
      if ($currentField) {
        var validity = $currentField.get(0).validity;
        var $formItem = $currentField.closest('.form-item, .matrix-item');
        $formItem.toggleClass('valid', validity.valid).toggleClass('error', !validity.valid);
      }
    }

    function onFieldBlur(){
      onCurrentFieldInput();
      $currentField.off('keypress', onCurrentFieldInput);
      $currentField = null;
    }

    function onSubmit(){
      console.log("form submitted", $el.get(0).validity);
    }


    function renderCaptcha(){
      if ($captcha.length) {
        $captcha.find('.g-recaptcha').attr('data-sitekey', Paris.config.captcha.key);
        $('body').append('<script src="https://www.google.com/recaptcha/api.js" async defer></script>');
      }
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
