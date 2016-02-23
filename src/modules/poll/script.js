'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.poll = (function(){

  var defaultOptions = {
    mobileMediaQuery: window.matchMedia("(max-width: 767px)"),
  };

  // node garden based on http://codepen.io/dleatherman/pen/kAzgw

  function poll(selector, userOptions){
    var $el     = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        $title, $options, $optionsButtons,
        $form, $input, $pause,
        $canvas, canvas, ctx, color, dots, mousePosition = {}, offset,
        animFrame,
        isInViewport = true,
        isPaused = false;

    function init(){
      initOptions();

      $title = $el.find('.poll-title');
      $options = $el.find('.poll-options');
      $optionsButtons = $options.find('.button');
      $form = $el.find('.poll-form');
      $input = $el.find('.poll-input');
      $pause = $el.find('.poll-pause');

      if (!options.mobileMediaQuery.matches) {
        // node garden not on mobile
        initCanvas();
      }

      $el.on('mouseenter mousemove mouseleave', onMouseEvents);
      $optionsButtons.on('click', onClickOption);
      $form.on('submit', onSubmitForm);
      $pause.on('click', onClickPause);

      PubSub.subscribe('scroll.document', onScroll);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function initCanvas() {
      $canvas = $('<canvas></canvas>').appendTo($el);
      canvas = $canvas[0];
      ctx = canvas.getContext('2d');
      color = '#F8E273';
      canvas.width = $el.outerWidth();
      canvas.height = $el.outerHeight();
      canvas.style.display = 'block';
      ctx.fillStyle = color;
      ctx.lineWidth = .15;
      ctx.strokeStyle = color;

      mousePosition = {
        x: 50 * canvas.width / 100,
        y: 30 * canvas.height / 100
      };

      dots = {
        nb: Math.floor(150 * canvas.height / 500),
        distance: 100,
        d_radius: 150,
        radius_interval: [0.5, 2],
        array: []
      };

      animFrame = window.requestAnimationFrame(createDots);
    }

    function Dot(){
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -.5 + Math.random();
      this.vy = -.5 + Math.random();

      this.radius = Math.random() * (dots.radius_interval[1] - dots.radius_interval[0]) + dots.radius_interval[0];
    }
    Dot.prototype = {
      create: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },

      animate: function(){
        for(var i = 0; i < dots.nb; i++){

          var dot = dots.array[i];

          if(dot.y < 0 || dot.y > canvas.height){
            dot.vx = dot.vx;
            dot.vy = - dot.vy;
          }
          else if(dot.x < 0 || dot.x > canvas.width){
            dot.vx = - dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function(){
        for(var i = 0; i < dots.nb; i++){
          for(var j = 0; j < dots.nb; j++){
            var i_dot = dots.array[i];
            var j_dot = dots.array[j];

            if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
              if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    };

    function createDots(){
      if (!isPaused) {
        if (isInViewport) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            var dot = dots.array[i];
            dot.create();
          }

          dot.line();
          dot.animate();
        }
      }

      window.requestAnimationFrame(createDots);
    }

    function onMouseEvents(e) {
      if (e.type === 'mouseenter'){
        offset = $el.offset();
      }
      if (e.type === 'mousemove'){
        mousePosition.x = e.pageX - offset.left;
        mousePosition.y = e.pageY - offset.top;
      }
    }

    function onClickOption(e){
      e.preventDefault();
      saveReply($(this).data('value'));
    }

    function onSubmitForm(e) {
      e.preventDefault();
      saveReply($input.val());
    }

    function onClickPause(e) {
      e.preventDefault();
      $(this).toggleClass('paused');
      isPaused = !isPaused;
    }

    function saveReply(reply) {
      // TODO: save answer
      //console.log('saveReply', reply);

      if ($options.length !== 0 && $optionsButtons.length !== 0) {
        // Keep the size of the options even when empty
        $options.css('height', $options.outerHeight());

        // Hide options with animation
        $optionsButtons.each(function(index){
          $(this).velocity({
            opacity: 0
          }, {
            delay: index * 80,
            duration: 350,
            ease: 'ease',
            complete: function(){
              if ($(this).is(':last-child')) {
                $title.text($title.data('thanks'));
                setTimeout($optionsButtons.remove, 500);
              }
            }
          });
        });
      }

      if ($form.length !== 0) {
        // Keep the size of the form even when empty
        $form.css('height', $form.outerHeight());

        // Hide content with animation
        $form.find('> *').velocity({
          opacity: 0
        }, {
          duration: 350,
          ease: 'ease',
          complete: function(){
            $title.text($title.data('thanks'));
            setTimeout($form.find('> *').remove, 500);
          }
        });
      }
    }

    function onScroll(e, data){
      var $window = $(window);

      var docViewBottom = data.scrollTop + $window.height();

      var elTop = $el.offset().top;
      var elBottom = elTop + $el.height();

      isInViewport = ((elBottom <= docViewBottom) || (elTop >= data.scrollTop));
    }

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
