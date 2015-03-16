'use strict';

var Paris = window.Paris || {};

Paris.accordion = (function(){

  var defaultOptions = {
  };

  function accordion(selector, userOptions){
    var $el     = $(selector),
        api     = {},
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();
      $el.find('.accordion-item-content').data('toggle', false);
      $el.find('.accordion-item-title')
        .attr('data-toggle', 'collapse')
        .collapse();

      $el.data('api', api);
    }

    function initOptions(){
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }


    // The API for external interaction

    api.openItem = function openItem(sel) {
      $el.find(sel).collapse('show');
    };

    api.closeAll = function closeAll() {
      var els = $el.find('.accordion-item-content');
      els.collapse('hide');
    };

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
  Paris.accordion('.component-accordion');
});

