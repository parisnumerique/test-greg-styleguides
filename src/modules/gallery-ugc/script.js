'use strict';
require('velocity-animate');

var $ = require('jquery');

var Paris = window.Paris || {};

Paris.galleryUgc = (function(){

  var defaultOptions = {
  };

  function galleryUgc(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $hashtags,
      $content,
      $data;

    function init(){
      initOptions();

      $hashtags = $el.find('.gallery-hashtag');
      $content = $el.find('.gallery-content');

      $hashtags.on('click', onClickHashtag);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClickHashtag(e) {
      e.preventDefault();
      var url = $(this).attr("href");
      var ready = {
        animation: $.Deferred(),
        load: $.Deferred()
      };

      $hashtags.removeClass("current");
      $(this).addClass("current");

      // Animate disappearance of the items
      ready.animation = animateImages(0);

      // Load the HTML
      // The server should detect that the request is AJAX
      // and return only the needed fragment
      ready.load = loadHTML(url);

      // When the animation is finished and the content is loaded
      $.when(ready.animation, ready.load).done(function(){
        replaceContent();
        animateImages(1);
      });
    }

    function animateImages(opacity) {
      var complete = $.Deferred();

      $content.find('.gallery-image').each(function(index){
        $(this).velocity({
          opacity: opacity
        }, {
          delay: index * 80,
          duration: 350,
          ease: 'ease',
          complete: function(){
            if ($(this).is(':last-child')) {
              complete.resolve();
            }
          }
        });
      });

      return complete;
    }

    function loadHTML(url) {
      var complete = $.Deferred();

      $.get(url, function(data) {
        $data = $(data).find('.gallery-content');
        complete.resolve();
      });

      return complete;
    }

    function replaceContent() {
      $content.html($data).find('.gallery-image').css({
        opacity: 0
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
