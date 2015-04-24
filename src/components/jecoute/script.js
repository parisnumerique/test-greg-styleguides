'use strict';

var Paris = window.Paris || {};

Paris.jecoute = (function(){

  var defaultOptions = {
    thanks: ""
  };

  function jecoute(selector, userOptions){
    var $el = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $form,
      $formElements;

    function init(){
      initOptions();

      $form = $el.find('.jecoute-form');
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
      saveQuestion($(this).serializeArray());
    }

    function saveQuestion(data) {
      // TODO: save data and add onQuestionSaved as the callback
      // for now, we simulate the behaviour with setTimeout
      setTimeout(onQuestionSaved, 1000);
    }

    function onQuestionSaved() {
      $form.hide().after('<p>'+ options.thanks +'</p>');
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      jecoute(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.jecoute('.component-jecoute');
});

