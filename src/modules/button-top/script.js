'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var Paris = window.Paris || {};

Paris.buttonTop = (function(){

  function buttonTop(selector){
    var $el = $(selector);

    function init(){
      if (!$el.is(':visible')) {return;}
      $el.hide().on('click', onClick);
      PubSub.subscribe('scroll.document', onScroll);

      $(window).on('resize', throttle(setAffix, 1000));

      PubSub.subscribe('responsive.small.enable', unsetAffix);
      PubSub.subscribe('responsive.small.disable', setAffix);
    }

    function onClick(e) {
      e.preventDefault();
      $("html").velocity("scroll", {
        duration: 1500,
        offset: 0,
        mobileHA: false
      });
    }

    function onScroll(e, data) {
      $el.toggle(data.scrollTop > 300);
    }

    function setAffix() {
      unsetAffix();
      $el.affix({
        offset: {
          bottom: $("body").height() - $(".footer").offset().top + 20
        }
      });
    }

    function unsetAffix() {
      $(window).off('.affix');
      $el.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      buttonTop(this);
    });
  };

})();

$(document).ready(function(){
  Paris.buttonTop('.button-top');
});
