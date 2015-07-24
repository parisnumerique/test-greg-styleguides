'use strict';

var Paris = window.Paris || {};

Paris.form = (function(){

  function form(selector){
    var $el = $(selector),
      $captcha,
      $currentField;

    function init(){
      $captcha = $el.find('.form-item-captcha');

      $el.on('focus', '.form-field', onFieldFocus);
      $el.on('blur', '.form-field', onFieldBlur);
      $el.on('submit', onSubmit);

      renderCaptcha();

      // Check fields validity
      //$el.find('.form-field').each(function(){
      //  checkValidity($(this));
      //});
    }

    function onFieldFocus(){
      $currentField = $(this);

      switch ($currentField.attr('type') || $currentField.prop('tagName').toLowerCase()){
        case 'checkbox':
        case 'radio':
        case 'select':
          var event = 'change';
          break;

        default:
          var event = 'input';
      }

      $currentField.on(event, onCurrentFieldInput);
    }

    function checkValidity($field){
      if ($field) {
        var valid = isValid($field);
        var $formItem = $field.closest('.form-item, .matrix-item');
        $formItem.toggleClass('valid', valid).toggleClass('error', !valid);
      }
    }

    function isValid($field){
      if ($field) {
        var validity = false;

        if ($field.attr('type') === "checkbox") {
          var $formItem = $field.closest('.form-item');
          if (!$formItem.hasClass("required")) {return true;}
          var $matrixItem = $field.closest('.matrix-item');
          if ($matrixItem.length) {
            var $checkboxes = $matrixItem.find('input[type="checkbox"]');
          } else {
            var $checkboxes = $formItem.find('input[type="checkbox"]');
          }
          $checkboxes.each(function(){
            if ($(this).is(':checked')) {validity = true;}
          });
          return validity;
        } else {
          validity = $field.get(0).validity;
          return validity.valid;
        }

      }
    }

    function onCurrentFieldInput(){
      checkValidity($currentField);
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
