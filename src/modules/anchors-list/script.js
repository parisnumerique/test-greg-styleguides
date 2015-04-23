'use strict';
require('velocity-animate');

var jade = require('jade');
var PubSub = require('pubsub-js');
var _ = require('underscore');
var slugify = require("underscore.string/slugify");

var Paris = window.Paris || {};

Paris.anchors = (function(){

  var defaultOptions = {
    anchorsSelector: '.anchor',
    anchorsFavoritable: false,
    anchorsShareable: false,
    anchorTopBorder: 7 // border-top of the .anchor elements, in pixels
  };

  function anchors(selector, userOptions){
    var $el = $(selector),
        $layoutContainer,
        $anchors,
        items,
        options = $.extend({}, defaultOptions, userOptions);

    function init(){
      initOptions();

      $layoutContainer = $('.layout-left-col');
      $anchors = $layoutContainer.find(options.anchorsSelector);

      renderAnchors();

      if (options.anchorsFavoritable) {renderFavorite();}
      if (options.anchorsShareable) {renderShare();}

      followAnchors();

      PubSub.subscribe('scroll', fillBars);

      // Fix bad offset by recalculating items dimensions, 1 second after rendering
      // This could probably be improved by tracking down the origin of the discrepancy
      setTimeout(parseItems, 1000);
    }

    function parseItems() {
      items = _.map($anchors, function(anchor, index) {
        var $anchor = $(anchor);

        // Generate a slug-based id if it doesn't exist
        if (!$anchor.attr('id')) {
          $anchor.attr('id', slugify($anchor.text()));
        }

        // Check if the anchor is in a postit
        $anchor.data('in-postit', ($anchor.closest('.component-postit').length !== 0));

        return {
          text: $anchor.text(),
          href: '#' + $anchor.attr('id'),
          top: $anchor.data('in-postit') && index === 0 ?
            $layoutContainer.position().top : // when in-postit and first item
            Math.round(+$anchor.position().top - options.anchorTopBorder),
          modifiers: $anchor.data('in-postit') ? ["anchor-postit"] : []
        };
      });

      _.each(items, function (item, index, list) {
        item.bottom = (list[index+1]) ? list[index+1].top : $layoutContainer.position().top + $layoutContainer.height();
      });
    }

    function renderAnchors() {
      parseItems();

      var content = templatizer['anchors-list']['anchors-list']({items: items});
      $el.html($(content).html());

      _.defer(function () {
        PubSub.publish('anchors:ready');
        fillBars();
      });
    }

    function renderFavorite() {
      $anchors.each(function (i, anchor) {
        var $anchor = $(anchor);

        // Do not display favorite when in postit
        if ($anchor.data('in-postit')) {return;}

        var content = '<span class="icon icon-anchor icon-favorites">';
        $anchor.append(content);
      });
    }

    function renderShare() {
      $anchors.each(function (i, anchor) {
        var $anchor = $(anchor);

        // Do not display share when in postit
        if ($anchor.data('in-postit')) {return;}

        var id = $anchor.attr('id');
        var url = encodeURIComponent(document.location.href.split('#')[0] + '#' + id);
        var tweetContent = [$('title').text(), $anchor.text()].join(' - ').slice(0, 100);
        var tweetText = [tweetContent, url, 'via @paris'].join(' ');
        var items = [
          {
            "href": "https://www.facebook.com/sharer/sharer.php?u="+url,
            "icon": "facebook",
            "title": Paris.i18n.t("share/facebook")
          },
          {
            "href": "https://twitter.com/intent/tweet?text="+tweetText,
            "icon": "twitter",
            "title": Paris.i18n.t("share/twitter")
          },
          {
            "href": "mailto:?subject="+url+"&body="+url,
            "icon": "mail",
            "title": Paris.i18n.t("share/email")
          }
        ];

        var content = templatizer.share.share({
          items: items,
          modifiers: []
        });

        $anchor.append(content);
      });
    }

    function followAnchors() {
      $el.on('click', '.anchor-link', function (e) {
        e.preventDefault();
        $(e.currentTarget.getAttribute('href'))
          .velocity("scroll", {
            duration: 1500,
            offset: $('.header').height() * -1 + options.anchorTopBorder
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
        var progress = ($(document).scrollTop() - item.top - $('header').height()) / (item.bottom - item.top);

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
