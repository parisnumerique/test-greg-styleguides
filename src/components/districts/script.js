'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function() {

  function districts(selector) {
    var $el = $(selector),
        $districtsItem = $('.districts-item'),
        $selectedItem = $districtsItem.first();

    function selectItem($item) {
      $item.addClass('active');
      $('.districts-item-title').html($item.data('title'));
      $('.districts-item-content').html($item.data('content'));
    }

    function init() {

      selectItem($selectedItem);

      $el.on('click', '.districts-item', function() {
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
