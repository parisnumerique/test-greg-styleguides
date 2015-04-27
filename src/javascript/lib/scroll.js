'use strict';

var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var throttledUpdate = throttle(updatePosition, 100);
var previousPosition = 0;

function updatePosition(e) {
  var $document = $document || $(document);
  var $searchEl = $('.quick-access-search');

  var $topNotice = $topNotice || $('.notice.top');
  PubSub.publish('scroll', e);

  if($searchEl.length) {
    if($document.scrollTop() > $searchEl.offset().top && previousPosition < $searchEl.offset().top){
      PubSub.publish('scroll:search:down');
    }

    if($document.scrollTop() < $searchEl.offset().top && previousPosition > $searchEl.offset().top){
      PubSub.publish('scroll:search:up');
    }
  }

  if($topNotice.length) {
    if($document.scrollTop() > $topNotice.height() && previousPosition < $topNotice.height()) {
      PubSub.publish('scroll:notice:down');
    }

    if($document.scrollTop() < $topNotice.height() && previousPosition > $topNotice.height()) {
      PubSub.publish('scroll:notice:up');
    }
  }

  previousPosition = $document.scrollTop();
}

$(function () {
  $(window).on('scroll', throttledUpdate);
});
