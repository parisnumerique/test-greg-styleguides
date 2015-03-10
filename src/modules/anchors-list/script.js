'use strict';

var $ = require('jquery');
var jade = require('jade');
var PubSub = require('pubsub-js');
var fs = require('fs');
var _ = require('underscore');

var Paris = window.Paris || {};

Paris.anchors = (function(){

  var defaultOptions = {
  };

  function anchors(selector, userOptions){
    var $el     = $(selector),
        anchorsSelector = (userOptions && userOptions.anchorsSelector) || 'h2',
        $anchors,
        template = require('./client.jade'),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      $anchors = $('.layout-left-col').find(anchorsSelector);
      var items = $anchors.map(function(i, anchor) {
        return {
          text: $(anchor).text(),
          href: '#'
        };
      });

      var content = template({opts: {items: items  }});
      $el.html(content);
      _.defer(function () {
        PubSub.publish('anchors:ready');
      });

    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      anchors(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.anchors('.anchors-list');
});
