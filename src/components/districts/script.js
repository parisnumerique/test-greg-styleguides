'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function(){

  function districts(selector){
    var $el = $(selector),
        api = {};

    function init(){
      $el.find('.districts-item-content')
        .addClass('collapse')
        .data('toggle', false);
      $el.find('.districts-item-title')
        .addClass('collapsed')
        .attr('data-toggle', 'collapse')
        .collapse();
      $el.on('shown.bs.collapse hidden.bs.collapse', function(){
        PubSub.publish('districts:change');
      });

      $el.data('api', api);
    }


    // The API for external interaction

    api.openItem = function openItem(sel) {
      $el.find(sel).collapse('show');
    };

    api.closeAll = function closeAll() {
      var els = $el.find('.districts-item-content');
      els.collapse('hide');
    };

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      districts(this);
    });
  };

})();

$(document).ready(function(){
  Paris.districts('.component-districts');
});

