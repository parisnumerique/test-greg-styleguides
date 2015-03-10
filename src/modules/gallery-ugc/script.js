'use strict';
require('velocity-animate');

var $ = require('jquery');

var Paris = window.Paris || {};

Paris.galleryUgc = (function(){

  var defaultOptions = {
  };

  function galleryUgc(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      // TODO
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }




    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      galleryUgc(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.galleryUgc('.gallery-ugc');
});
