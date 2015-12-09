'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function() {

  function districts(selector) {
    var $el = $(selector),
        $contentWrapper = $('.districts-content-wrapper'),
        $districtsItem = $('.districts-item');

    function setItemTitle(item) {
      var title = item.data('district') + "e arrondissement de Paris";
      $('.districts-item-title').html(title);
    }

    function setItemContent(item) {
      var content = item.data('content');
      $('.districts-item-content').html(content);
    }

    function selectDefault() {
      var $defaultItem = $districtsItem.first();

      $defaultItem.addClass('active');
      setItemTitle($defaultItem);
      setItemContent($defaultItem);
    }

    function init() {
      selectDefault();

      $el.on('click', '.districts-item', function() {
        var $this = $(this);

        $districtsItem.removeClass('active');

        setItemTitle($this);
        setItemContent($this);
        // $contentWrapper.slideDown('slow');
      });

      $(document).mouseup(function (e) {
        if (!$districtsItem.is(e.target) && $districtsItem.has(e.target).length === 0) {
            // $contentWrapper.slideUp('slow');
            selectDefault();
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
