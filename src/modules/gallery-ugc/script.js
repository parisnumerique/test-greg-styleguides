'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.galleryUgc = (function(){

  function galleryUgc(selector){
    var $el = $(selector),
      $hashtags,
      $visibleContent,
      $toBeVisibleContent,
      $data;

    function init(){
      $hashtags = $el.find('.gallery-hashtag');
      $visibleContent = $el.find('.gallery-content').filter(':visible');

      $hashtags.on('click', onClickHashtag);
    }

    function onClickHashtag(e) {
      e.preventDefault();
      var hashtagId = $(this).attr("href");

      $hashtags.removeClass("current");
      $(this).addClass("current");

      prepareNewContent(hashtagId);

      animateImages(0).then(function(){
        replaceContent();
        animateImages(1);
      });
    }

    function animateImages(opacity) {
      var complete = $.Deferred();

      $visibleContent.find('.gallery-image').each(function(index){
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

    function prepareNewContent(hashtagId) {
      $toBeVisibleContent = $el.find('#' + hashtagId);
      var images = $toBeVisibleContent.find('a.gallery-image');
      if(images.first().css('background-image') === 'none') {
        images.each(function (index, elt) {
          var $elt = $(elt);
          $elt.css({'background-image': $elt.data('background-image')});
        });
      }
    }

    function replaceContent() {
      $visibleContent.toggle();
      $toBeVisibleContent.find('.gallery-image').css({
        opacity: 0
      });
      $toBeVisibleContent.toggle();
      $visibleContent = $toBeVisibleContent;
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      galleryUgc(this);
    });
  };

})();

$(document).ready(function(){
  Paris.galleryUgc('.gallery-ugc');
});
