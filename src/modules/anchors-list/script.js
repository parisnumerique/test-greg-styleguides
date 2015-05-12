'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var map = require('lodash.map');
var each = require('lodash.foreach');
var defer = require('lodash.defer');
var slugify = require("underscore.string/slugify");
var throttle = require('lodash.throttle');

var Paris = window.Paris || {};

Paris.anchors = (function(){

  var defaultOptions = {
    anchorsSelector: '.anchor',
    anchorsProgressSelector: '.anchors-list-progress',
    headerSelector: '.rheader',
    contentEl: '.layout-left-col',
    anchorsFavoritable: false,
    anchorsShareable: false,
    anchorTopBorder: 7, // border-top of the .anchor elements, in pixels
    mobileMediaQuery: window.matchMedia("(max-width: 1160px)")
  };

  function anchors(selector, userOptions){
    var $el = $(selector),
        options = $.extend({}, defaultOptions, userOptions),
        isMobile,
        $layoutContainer,
        $anchors,
        items,
        headerHeight = 0;

    function init(){
      initOptions();

      $layoutContainer = $('.layout-left-col');
      $anchors = $layoutContainer.find(options.anchorsSelector);

      onResize();
      $(window).on('resize', throttle(onResize, 1000));

      renderAnchors();

      if (options.anchorsFavoritable) {renderFavorite();}
      if (options.anchorsShareable) {renderShare();}

      $el.on('click', '.anchors-list-link', onClickAnchorLink);

      PubSub.subscribe('scroll', fillBars);

      // Fix bad offset by recalculating items dimensions, 1 second after rendering
      // This could probably be improved by tracking down the origin of the discrepancy
      setTimeout(parseItems, 1000);

      PubSub.subscribe('accordion:change', throttle(onContentHeightChange, 500));
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onResize() {
      isMobile = options.mobileMediaQuery.matches;
      headerHeight = $(options.headerSelector).height();
    }

    function parseItems() {
      items = map($anchors, function(anchor, index) {
        var $anchor = $(anchor);

        // Generate a slug-based id if it doesn't exist
        if (!$anchor.attr('id')) {
          $anchor.attr('id', slugify($anchor.text()));
        }

        // Check if the anchor is in a postit
        $anchor.data('in-postit', ($anchor.closest('.component-postit').length !== 0));

        var $contentEl = $(options.contentEl);

        return {
          text: $anchor.text(),
          href: '#' + $anchor.attr('id'),
          top: $anchor.data('in-postit') && index === 0 ?
            $layoutContainer.position().top : // when in-postit and first item
            Math.round(+$anchor.position().top)+ ( $contentEl.parent().position().top  - $contentEl.position().top),
          modifiers: $anchor.data('in-postit') ? ["anchor-postit"] : []
        };
      });

      each(items, function (item, index, list) {
        item.bottom = (list[index+1]) ? list[index+1].top : $layoutContainer.position().top + $layoutContainer.height();

        // DEBUG TODO remove
        //if ($('#debug-'+index).length === 0) {
        //  var $item = $('<div id="debug-'+index+'" class="anchors-list-debug">');
        //  $item.text(index).css({
        //    top: item.top,
        //    height: item.bottom - item.top
        //  });
        //  $item.appendTo('body');
        //} else {
        //  $('#debug-'+index).css({
        //    top: item.top,
        //    height: item.bottom - item.top
        //  });
        //}
      });

    }

    function renderAnchors() {
      if (isMobile) {return;}
      parseItems();

      var data = {
        items: items
      };

      var $documentTitle = $('.document-heading .document-heading-title');
      if ($documentTitle.length !== 0) {data.title = $documentTitle.text();}

      var content = Paris.templates.templatizer['anchors-list']['anchors-list'](data);
      $el.html($(content).html());

      defer(function () {
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

        var content = Paris.templates.templatizer.share.share({
          items: items,
          modifiers: []
        });

        $anchor.append(content);
      });
    }

    function onClickAnchorLink(e) {
      e.preventDefault();
      var $link = $(e.currentTarget);
      var anchor = $link.attr("href");
      $(anchor)
        .velocity("stop")
        .velocity("scroll", {
          duration: 1500,
          offset: $(options.headerSelector).height() * -1 + options.anchorTopBorder,
          complete: function(){
            if (Modernizr.history) {
              history.replaceState({}, $link.text(), anchor);
            }
          }
      });
    }

    function fillBars(){
      if (isMobile) {return;}
      each(items, function(item) {
        var $progress = $el.find('[href="'+item.href+'"]' + ' + ' + options.anchorsProgressSelector);

        if ($(document).scrollTop() < item.top - headerHeight) {
          var progress = 0;
        }
        else if ($(document).scrollTop() > item.bottom - headerHeight) {
          var progress = 100;
        }
        else {
          var progress = ($(document).scrollTop() - item.top + headerHeight) / (item.bottom - item.top);
          progress = progress * 100;
          if (progress < 2)       {progress = 0;}
          else if (progress > 98) {progress = 100;}
        }

        $progress.css('width', ''+progress+'%');
      });
    }

    function onContentHeightChange(){
      parseItems();
      fillBars();
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
