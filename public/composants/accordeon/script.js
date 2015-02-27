'use strict';

var Paris = window.Paris || {};

Paris.accordion = (function(){

  var defaultOptions = {
  };

  function accordion(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      $el.find('[data-parent]').attr('data-toggle', 'collapse').collapse({
          toggle: false,
          parent: '.composant-accordeon'
        });
    }

    function initOptions(){
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      accordion(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.accordion('.composant-accordeon');
});

