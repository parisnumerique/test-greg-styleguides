'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.districts = (function() {

  function districts(selector) {
    var $el = $(selector),
        $contentWrapper = $('.distincts-content-wrapper');

    function loadContent(sel, content) {
      $(sel).html(content);
    }

    function init() {

      $el.on('click', '.districts-item', function() {
        var $this = $(this),
            title = $this.data('district') + "e arrondissement de Paris",
            content = $this.data('content');

        loadContent('.distincts-item-title',title);
        loadContent('.distincts-item-content',content);

        $contentWrapper.slideDown('slow');
      });


      $(document).mouseup(function (e) {
        var $districtsItem = $('.districts-item');
        if (!$districtsItem.is(e.target) && $districtsItem.has(e.target).length === 0) {
            $contentWrapper.slideUp('slow');
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

