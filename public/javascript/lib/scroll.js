'use strict';

var $ = require('jquery');
var PubSub = require('pubsub-js');
var throttle = require('lodash.throttle');

var floatingLimit = window.innerHeight;

var throttledUpdate = throttle(updatePosition, 100);
var previousPosition = 0;

function updatePosition () {
  var $body = $body || $('body');
  if($body.scrollTop() > floatingLimit && previousPosition < floatingLimit){
    PubSub.publish('scoll:floatingLine:down');
  }

  if($body.scrollTop() < floatingLimit && previousPosition > floatingLimit){
    PubSub.publish('scoll:floatingLine:up');
  }
  previousPosition = $body.scrollTop();
}

$(window).on('scroll', throttledUpdate);
