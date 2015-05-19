'use strict';

var Paris = window.Paris || {};

Paris.blockContentNewsletter = (function(){

  var defaultOptions = {
    thanks: ""
  };

  function blockContentNewsletter(selector, userOptions){
    var $el = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $form,
      $formElements;

    function init(){
      initOptions();

      $form = $el.find('.block-content-form');
      $formElements = $form.find('input, textarea, button');

      $form.on('submit', onSubmitForm);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onSubmitForm(e) {
      e.preventDefault();
      $formElements.attr('disabled', 'disabled');
      saveForm($(this).serializeArray());
    }

    function saveForm(data) {
      // TODO: save data and add onFormSaved as the callback
      // for now, we simulate the behaviour with setTimeout
      setTimeout(onFormSaved, 1000);
    }

    function onFormSaved() {
      $form.hide().after('<p>'+ options.thanks +'</p>');
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      blockContentNewsletter(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.blockContentNewsletter('.block-content-newsletter');
});

