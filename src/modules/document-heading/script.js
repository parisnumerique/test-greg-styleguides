'use strict';

var Paris = window.Paris || {};

Paris.documentHeading = (function(){

  var defaultOptions = {
  };

  function documentHeading(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $icons;

    function init(){
      initOptions();

      $icons = $el.find('.document-heading-icon')

      $icons.on('click', onClickIcon);

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClickIcon(e){
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);
      var $label = $this.find('.hidden-accessibly');

      $this.toggleClass('active');

      // Switch a11y label & title
      var reverse = $label.text();
      $label.text($label.data('reverse'));
      $this.attr('title', $label.data('reverse'));
      $label.data('reverse', reverse);

      // Switch icon
      if ($this.hasClass('active')) {
        $this.find('.icon').addClass($this.data('icon-active')).removeClass($this.data('icon-default'));
      } else {
        $this.find('.icon').addClass($this.data('icon-default')).removeClass($this.data('icon-active'));
      }
    }


    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      documentHeading(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.documentHeading('.document-heading');
});
