'use strict';

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var previousPosition = 0;

function throttledUpdatePosition(e) {
  PubSub.publish('scroll.document', {
    scrollTop: $(window).scrollTop()
  });
}

function updatePosition(e) {
  var scrollTop = $(window).scrollTop();

  var $searchEl = $searchEl || $('.quick-access-search');
  if ($searchEl.length) {
    var searchElTop = $searchEl.offset().top;

    if(scrollTop >= searchElTop && previousPosition <= searchElTop){
      PubSub.publish('scroll.search.down');
    }

    if(scrollTop <= searchElTop && previousPosition >= searchElTop){
      PubSub.publish('scroll.search.up');
    }
  }

  var $topNotice = $topNotice || $('.notice.top');
  if ($topNotice.length) {
    var topNoticeHeight = $topNotice.height();

    if(scrollTop >= topNoticeHeight && previousPosition <= topNoticeHeight) {
      PubSub.publish('scroll.notice.down');
    }

    if(scrollTop <= topNoticeHeight && previousPosition >= topNoticeHeight) {
      PubSub.publish('scroll.notice.up');
    }
  }

  previousPosition = scrollTop;
}

$(function () {
  $(window).on('scroll', updatePosition);
  $(window).on('scroll', throttle(throttledUpdatePosition, 100));
});
