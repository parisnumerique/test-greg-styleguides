'use strict';

var Paris = window.Paris || {};

Paris.accordion = (function(){

  function accordion(selector){
    var $el = $(selector),
        api = {};

    function init(){
      $el.find('.accordion-item-content')
        .addClass('collapse')
        .data('toggle', false);
      $el.find('.accordion-item-title')
        .addClass('collapsed')
        .attr('data-toggle', 'collapse')
        .collapse();

      $el.data('api', api);
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

  return function(selector){
    return $(selector).each(function(){
      accordion(this);
    });
  };

})();

$(document).ready(function(){
  Paris.accordion('.component-accordion');
});

