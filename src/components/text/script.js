'use strict';

var PubSub = require('pubsub-js');
var jade = require('jade');

var Paris = window.Paris || {};

Paris.text = (function(){

  var defaultOptions = {
    anchorsSelector: 'h2'
  };

  function text(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      template = require('../../modules/share/_client.jade');

    function init(){
      initOptions();
      renderFavorite();
      renderShare();
    }


    function renderFavorite() {
      $el.find(options.anchorsSelector).each(function (i, el) {
        var content = '<span class="icon icon-anchor icon-favorites">'
        $(el).addClass('anchor').append(content);
      });
    }

    function renderShare() {
      $el.find(options.anchorsSelector).each(function (i, el) {
        var id = $(el).attr('id');
        var url = encodeURIComponent(document.location.href.split('#')[0] + '#' + id);
        var tweetContent = [$('title').text(), $(el).text()].join(' - ').slice(0, 100);
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
        var content = template({opts: {
          items: items,
          modifiers: []
        }});

        $(el).addClass('anchor').append(content);
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
      text(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.text('.component-text');
});
