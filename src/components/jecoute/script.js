'use strict';

var Cookies = require('cookies-js');

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

      if (Cookies.get(Paris.config.cookies.email.name)) {
        $formElements.filter('input[name="email"]').attr('value', Cookies.get(Paris.config.cookies.email.name));
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onSubmitForm(e) {
      e.preventDefault();

      // Serialize array before disabling form elements
      var data = $(this).serializeArray();
      $formElements.attr('disabled', 'disabled');

      // Insert current url
      data.push({
        name:   'url',
        value:  window.location.href
      });

      saveQuestion(data);
    }

    function saveQuestion(data) {
      $.ajax({
        url:      $form.attr('action'),
        type:     $form.attr('method'),
        data:     data,
        complete: onQuestionSaved
      });
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

