'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.share = (function(){

  var defaultOptions = {
  };

  function share(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $links;

    function init(){
      initOptions();

      $links = $el.find('.share-item a');

      $links.on('click', onClickLink);

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClickLink(e){
      e.preventDefault();
      e.stopPropagation();
      openInNewWindow($(this).attr('href'));
    }

    function openInNewWindow(url){
      var newWindow = window.open(url, 'share', 'height=400,width=600');
      if (window.focus) {newWindow.focus();}
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      share(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.share('.share');
});
