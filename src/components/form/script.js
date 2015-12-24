'use strict';

var Paris = window.Paris || {};

Paris.form = (function(){

  var defaultOptions = {
    thanks: ""
  };

  function form(selector, userOptions){
    var $el = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $form,
      $captcha,
      $currentField;

    function init(){
      initOptions();

      $form = $el.find('form');
      $captcha = $el.find('.form-item-captcha');

      // N.B.: 'focus' event doesn't trigger on checkbox/radio in firefox for OS X
      $el.on('focus click', '.form-field', onFieldFocus);
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


    function disableButtons(){
      $el.find('.button[type="submit"]').attr('disabled', true);
    }
    function enableButtons(){
      $el.find('.button[type="submit"]').removeAttr('disabled');
    }

    function checkValidity($field) {
      if (!$field) { return; }

      var valid = isFieldValid($field);
      var $formItem = $field.closest('.form-item, .matrix-item');
      $formItem.toggleClass('valid', valid).toggleClass('error', !valid);

      return valid;
    }

    function isFieldValid($field) {
      if (!$field) { return false; }

      var validity = false;

      if ($field.attr('type') === "checkbox") {
        var $formItem = $field.closest('.form-item');
        if (!$formItem.hasClass("required")) { return true; }

        var $checkboxes;
        var $matrixItem = $field.closest('.matrix-item');
        if ($matrixItem.length) {
          $checkboxes = $matrixItem.find('input[type="checkbox"]');
        } else {
          $checkboxes = $formItem.find('input[type="checkbox"]');
        }
        $checkboxes.each(function(){
          if ($(this).is(':checked')) { validity = true; }
        });

        return validity;
      } else {
        validity = $field.get(0).validity;
        return validity.valid;
      }
    }

    function onCurrentFieldInput(e){
      checkValidity($currentField);
    }

    function onFieldFocus(e){
      $currentField = $(this);

      var event;
      switch ($currentField.attr('type') || $currentField.prop('tagName').toLowerCase()){
        case 'checkbox':
        case 'radio':
        case 'select':
          event = 'change';
          break;

        default:
          event = 'input';
      }

      // make sure to have only one event bound
      // as onFieldFocus can be triggered more than once in a row
      $currentField.off(event).on(event, onCurrentFieldInput);
    }

    function onFieldBlur(){
      onCurrentFieldInput();

      var fieldEvents = $._data($currentField.get(0), 'events');
      $.each(fieldEvents, function(key, value) {
        $currentField.off(key);
      });

      $currentField = null;
    }

    function onSubmit(e){
      e.preventDefault();

      if ($form.get(0).checkValidity()) {
        saveData();
      } else {
        // invalid
        console.log("form invalid");
      }
    }

    function saveData() {
      var data = $form.serializeArray();

      $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method') || 'POST',
        dataType: 'json',
        data: data,
        success: onDataSaved,
        error: onDataError
      });
    }

    function onDataSaved(data, status, xhr){
      if (data.status === 'error') {
        onDataError(xhr, 'error');
        return;
      }

      disableButtons();
      resetErrors();
      $el.append('<p class="form-message success">'+ options.thanks +'</p>');
    }

    function onDataError(xhr, status, error){
      enableButtons();
      resetErrors();

      var data = xhr.responseJSON;

      // unknown error
      if (typeof data === 'undefined') {
        $el.append('<p class="form-message error">'+ options.error +'</p>');
        return;
      }

      // add error messages
      $el.append('<p class="form-message error">'+data.message+'</p>');
      $.each(data.errors, function(field, message){
        var $formField = $el.find('.form-field[name="'+field+'"], .form-field[name^="'+field+'["]');
        var $formItem = $formField.closest('.form-item, .matrix-item');
        $formItem.removeClass('valid').addClass('error');

        if ($formItem.hasClass('matrix-item')) {
          $('<tr class="form-item-help error"><td colspan="0">'+message+'</td></tr>').insertAfter($formItem);
        }
        else {
          $('<p class="form-item-help error">'+message+'</p>').appendTo($formItem);
        }
      });
    }

    function resetErrors(){
      $el.find('.form-item, .matrix-item').removeClass('error');
      $el.find('.form-item-help.error, .form-message.error').remove();
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

  return function(selector, userOptions){
    return $(selector).each(function(){
      form(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.form('.component-form');
});
