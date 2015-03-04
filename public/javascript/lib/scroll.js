'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var throttledUpdate = throttle(updatePosition, 100);
var previousPosition = 0;

function updatePosition () {
  var $document = $document || $(document);
  var $searchEl = $('#quick-search');

  var $topNotice = $topNotice || $('.notice.top');

  if($searchEl.length) {
    if($document.scrollTop() > $searchEl.offset().top && previousPosition < $searchEl.offset().top){
      PubSub.publish('scoll:search:down');
    }

    if($document.scrollTop() < $searchEl.offset().top && previousPosition > $searchEl.offset().top){
      PubSub.publish('scoll:search:up');
    }
  }

  if($topNotice.length) {
    if($document.scrollTop() > $topNotice.height() && previousPosition < $topNotice.height()) {
      PubSub.publish('scoll:notice:down');
    }

    if($document.scrollTop() < $topNotice.height() && previousPosition > $topNotice.height()) {
      PubSub.publish('scoll:notice:up');
    }
  }

  previousPosition = $document.scrollTop();
}

$(function () {
  $(window).on('scroll', throttledUpdate);
});
