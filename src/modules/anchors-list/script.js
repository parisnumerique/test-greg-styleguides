'use strict';

var jade = require('jade');
var PubSub = require('pubsub-js');
var _ = require('underscore');

var Paris = window.Paris || {};

Paris.anchors = (function(){

  var defaultOptions = {
    anchorsSelector: '.anchor'
  };

  function anchors(selector, userOptions){
    var $el     = $(selector),
        $anchors,
        items,
        template = require('./_client.jade'),
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      renderAnchors();
      followAnchors();
      PubSub.subscribe('scroll', fillBars);
    }

    function renderAnchors() {
      $anchors = $('.layout-left-col').find(options.anchorsSelector);
      items = _.map($anchors, function(anchor) {
        var $anchor = $(anchor);
        if(!$anchor.attr('id')) {
          $anchor.attr('id', Math.random().toString(36).substr(2, 6));
        }
        return {
          text: $anchor.text(),
          href: '#' + $anchor.attr('id'),
          top: Math.round(+$anchor.position().top)
        };
      });

      _.each(items, function (item, index, list) {
        item.bottom = (list[index+1]) ? list[index+1].top : $('.layout-left-col').position().top + $('.layout-left-col').height();
      });

      var content = template({opts: {items: items  }});

      $el.html(content);
      _.defer(function () {
        PubSub.publish('anchors:ready');
        fillBars();
      });
    }

    function followAnchors() {
      $el.on('click', '.anchor-link', function (e) {
        e.preventDefault();
        $(e.currentTarget.getAttribute('href'))
          .velocity("scroll", {
            duration: 1500,
            offset: $('.header').height() * -1
        });
      });
    }

    function fillBars(){
      _.each(items, function(item) {
        if($(document).scrollTop() < item.top ) {
          $el.find('[href="'+item.href+'"]' +' + .anchor-progress').css('width', '0%');
          return;
        }
        else if($(document).scrollTop() > item.bottom - $('header').height() ) {
          $el.find('[href="'+item.href+'"]' +' + .anchor-progress').css('width', '100%');
          return;
        }
        var progress = ($(document).scrollTop() - item.top - $('header').height()) / (item.bottom - item.top );

        progress = progress*100;
        $el.find('[href="'+item.href+'"]' +' + .anchor-progress').css('width', ''+progress+'%');
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
  Paris.anchors('.layout-aside .anchors-list');
});
