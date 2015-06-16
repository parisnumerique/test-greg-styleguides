'use strict';

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var previousPosition = 0;

function throttledUpdatePosition(e) {
  PubSub.publish('scroll.document', e);
}

function updatePosition(e) {
  var $document = $document || $(document);
  var documentScrollTop = $document.scrollTop();

  var $searchEl = $searchEl || $('.quick-access-search');
  if ($searchEl.length) {
    var searchElTop = $searchEl.offset().top;

    if(documentScrollTop > searchElTop && previousPosition < searchElTop){
      PubSub.publish('scroll.search.down');
    }

    if(documentScrollTop < searchElTop && previousPosition > searchElTop){
      PubSub.publish('scroll.search.up');
    }
  }

  var $topNotice = $topNotice || $('.notice.top');
  if ($topNotice.length) {
    var topNoticeHeight = $topNotice.height();

    if(documentScrollTop > topNoticeHeight && previousPosition < topNoticeHeight) {
      PubSub.publish('scroll.notice.down');
    }

    if(documentScrollTop < topNoticeHeight && previousPosition > topNoticeHeight) {
      PubSub.publish('scroll.notice.up');
    }
  }

  previousPosition = documentScrollTop;
}

$(function () {
  $(window).on('scroll', updatePosition);
  $(window).on('scroll', throttle(throttledUpdatePosition, 100));
});
