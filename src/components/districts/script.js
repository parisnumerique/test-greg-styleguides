'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function() {

  function districts(selector) {
    var $el = $(selector),
        $districtsItem = $('.districts-item'),
        $selectedItem = $districtsItem.first();

    function setItemTitle(item) {
      var title = item.data('district') + "e arrondissement de Paris";
      $('.districts-item-title').html(title);
    }

    function setItemContent(item) {
      var content = item.data('content');
      $('.districts-item-content').html(content);
    }

    function selectItem($item) {
      $item.addClass('active');
      setItemTitle($item);
      setItemContent($item);
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
