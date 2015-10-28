'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.galleryUgc = (function(){

  function galleryUgc(selector){
    var $el = $(selector),
      $hashtags,
      $visibleContent,
      $toBeVisibleContent;

    function init(){
      $hashtags = $el.find('.gallery-ugc-hashtag');
      $visibleContent = $el.find('.gallery-ugc-content').filter(':visible');
      //$el.find("a.gallery-ugc-image").error(function () {
      //  console.error('couldn\'t load image');
      //  $(this).hide();
      //});

      updateHashtagTitles();

      $hashtags.on('click', onClickHashtag);
    }

    function onClickHashtag(e) {
      e.preventDefault();
      var hashtagId = $(this).data("hashtag");

      $hashtags.removeClass("current");
      $(this).addClass("current");

      updateHashtagTitles();

      $toBeVisibleContent = $el.find('#gallery-ugc-' + hashtagId);

      animateImages(0).then(function(){
        replaceContent();
        animateImages(1);
      });
    }

    function updateHashtagTitles() {
      $hashtags.each(function(){
        var $this = $(this);
        var current = $this.hasClass('current');
        $this.attr('title', $this.text() + ' – ' + (current ? Paris.i18n.t("active") : Paris.i18n.t("inactive")));
      });
    }

    function animateImages(opacity) {
      var complete = $.Deferred();

      $visibleContent.find('.gallery-ugc-item').each(function(index){
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

    function replaceContent() {
      $visibleContent.hide();
      $toBeVisibleContent.find('.gallery-ugc-item').css({
        opacity: 0
      });
      $toBeVisibleContent.show();
      $toBeVisibleContent.find('.gallery-ugc-item').first().focus();
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
