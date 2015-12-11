'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function() {

  function districts(selector) {
    var $el = $(selector),
        $districtsItem = $el.find('.districts-item'),
        $selectedItem = $districtsItem.first();

    function selectItem($item) {
      $item.addClass('active');

      $el.find('.districts-item-title')
        .html($item.data('title'));
      $el.find('.districts-item-content')
        .html($item.data('content'));
    }

    function init() {

      $el.on('click', '.districts-item', function(e) {
        e.preventDefault();
        $selectedItem = $(this);
        $districtsItem.removeClass('active');
        selectItem($selectedItem);
      });

      $(document).mouseup(function (e) {
        if (!$districtsItem.is(e.target) && $districtsItem.has(e.target).length === 0) {
          $selectedItem.addClass('active');
        }
      });

    }

    init();
    return $el;
  }

  return function(selector) {
    return $(selector).each(function() {
      districts(this);
    });
  };

})();

$(document).ready(function() {
  Paris.districts('.component-districts');
});
