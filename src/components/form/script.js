'use strict';

var Paris = window.Paris || {};

Paris.form = (function(){
  
  var defaultOptions = {
    thanks: "Merci, votre soumission a bien été transmise."
  };

  function form(selector){
    var $el = $(selector),
      options = defaultOptions,
      $form,
      $captcha,
      $currentField;

    function init(){
      initOptions()
      $form = $el.find('form');
      $captcha = $el.find('.form-item-captcha');

      $el.on('focus', '.form-field', onFieldFocus);
      $el.on('blur', '.form-field', onFieldBlur);
      $form.on('submit', onSubmit);

      renderCaptcha();

      // Check fields validity
      //$el.find('.form-field').each(function(){
      //  checkValidity($(this));
      //});
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
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

    function onSubmit(e){
      e.preventDefault();
      console.log($form);
      console.log("form submitted", $el.get(0).validity, $form.validity);
      if ($form.validity) {
        saveData();
      } else {
        // invalid
      }

      // test : force save 
      saveData();
    }

    function saveData() {
      var data = $form.serializeArray();
      $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method') || 'POST',
        data: data,
        success: onDataSaved,
        error: onDataError
      });
    }

    function onDataSaved(data, status, xhr){
      //console.log('onDataSaved', data, status, xhr);
      $form.hide().after('<p>'+ options.thanks +'</p>');
    }

    function onDataError(xhr, status, error){
      console.log('onDataError', xhr, status, error);
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
