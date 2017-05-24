'use strict';

var Paris = window.Paris || {};

Paris.blockContentNewsletter = (function(){

  var defaultOptions = {
    thanks: "Votre inscription a bien été prise en compte.",
    failed:"Votre inscription a échoué. Veuillez ré-essayer plus tard."
  };

  function blockContentNewsletter(selector, userOptions){
    var $el = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $form,
      $formElements;

    function init(){
      initOptions();

      $form = $el.find('.block-content-form');

      // Halt here if the module does not contain a form
      if ($form.length === 0) {return;}

      $formElements = $form.find('input, textarea, button');

      $form.on('submit', onSubmitForm);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onSubmitForm(e) {
      saveForm($(this));
      $formElements.attr('disabled', 'disabled');
      e.preventDefault();
    }

    function saveForm() {
/*
      $.post( "newsletter/subscribe", data)
        .done(function() {
          onFormSaved(options.thanks);
        })
        .fail(function() {
          onFormSaved(options.failed);
      });
*/
      var ajaxOptions = {
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: {email:$form.email.val()}
      };

      $.ajax(ajaxOptions)
        .done(function() {
          onFormSaved(options.thanks);
        })
        .fail(function() {
          onFormSaved(options.failed);
    });
    }

    function onFormSaved(text) {
      $form.hide().after('<p>'+ text +'</p>');
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

