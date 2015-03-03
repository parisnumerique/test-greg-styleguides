'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var floatingLimit = window.innerHeight;

var throttledUpdate = throttle(updatePosition, 100);
var previousPosition = 0;

function updatePosition () {
  var $document = $document || $(document);
  var $topNotice = $topNotice || $('.notice.top');

  if($document.scrollTop() > floatingLimit && previousPosition < floatingLimit){
    PubSub.publish('scoll:floatingLine:down');
  }

  if($document.scrollTop() < floatingLimit && previousPosition > floatingLimit){
    PubSub.publish('scoll:floatingLine:up');
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
