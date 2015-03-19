'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.poll = (function(){

  var defaultOptions = {
  };

  function poll(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      particlesJS('particles-js', {
    particles: {
      color: '#F8E273',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 100,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#F8E273',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 2.5
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: 0.5
      },
      events: {
        onclick: {
          push_particles: {
            enable: true,
            nb: 4
          }
        }
      }
    },
    retina_detect: true
});

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    // The API for external interaction


    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      poll(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.poll('.poll');
});
