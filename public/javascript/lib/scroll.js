'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var floatingLimit = window.innerHeight;

var throttledUpdate = throttle(updatePosition, 100);
var previousPosition = 0;

function updatePosition () {
  var $body = $body || $('body');
  var $topNotice = $topNotice || $('.notice.top');

  if($body.scrollTop() > floatingLimit && previousPosition < floatingLimit){
    PubSub.publish('scoll:floatingLine:down');
  }

  if($body.scrollTop() < floatingLimit && previousPosition > floatingLimit){
    PubSub.publish('scoll:floatingLine:up');
  }

  if($topNotice.length) {
    if($body.scrollTop() > $topNotice.height() && previousPosition < $topNotice.height()) {
      PubSub.publish('scoll:notice:down');
    }

    if($body.scrollTop() < $topNotice.height() && previousPosition > $topNotice.height()) {
      PubSub.publish('scoll:notice:up');
    }
  }

  previousPosition = $body.scrollTop();
}

$(function () {
  $(window).on('scroll', throttledUpdate);
});
