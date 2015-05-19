'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');
var algoliasearch = require('algoliasearch');

var Paris = window.Paris || {};

Paris.quickAccess = (function(){

  var defaultOptions = {
    index: 'global', // the algolia index to use (should be defined in config.js)
    link: 'url', // the algolia field to use as a link
    title: 'titre', // the algolia field to use as a title
    sections: 'onglet', // the algolia field to use as a section
    hitsPerPage: 6 // the number of results to display
  };

  function quickAccess(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      api = {},
      $parent,
      $searchField,
      $searchFieldInput,
      $buttons,
      $results,
      $around,
      $more,
      $close,
      algolia,
      index;

    function init(){
      initOptions();

      algolia = algoliasearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.indexes[options.index]);

      $parent = $el.parent();

      $searchField = $el.find('.search-field');
      $searchFieldInput = $searchField.find('.search-field-input');
      $buttons = $el.find('.quick-access-buttons');
      $results = $el.find('.quick-access-results ul');
      $around = $el.find('.button.around');
      $more = $el.find('.quick-access-results-more');
      $close = $el.find('.quick-access-close-search');

      if (forceSearching()) {
        $buttons.hide();
      }

      $searchFieldInput.on('input', onInput);
      $searchFieldInput.on('focus', function(){
        PubSub.publish('search:focus');
        if ($searchFieldInput.val() !== '') {
          onStartSearching();
        }
      });

      $searchFieldInput.on('blur', function(){
        PubSub.publish('search:blur');
      });

      $more.on('click', onClickMore);
      $close.on('click', onClickClose);
      PubSub.subscribe('header:search:click', onClickFromHeader);

      if ($el.hasClass('searching')) {
        onStartSearching();
      }

      $el.data('api', api);
    }

    function isSearching() {
      return $el.hasClass('searching');
    }

    function forceSearching() {
      return $el.hasClass('force-searching');
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClickFromHeader(){
      var $quickAccess = $('.quick-access');
      var $mainSearch = $('#main-search');
      if ($mainSearch.length) {
        $quickAccess.velocity("scroll",
          {
            duration: 1000,
            easing: "ease-in-out",
            complete: function(){
              api.focusSearchField();
              PubSub.publish('header:search:close');
            }
          }
        );
      } else {
        if(isSearching()){
          onStopSearching();
        }
        else {
          onStartSearching();
          api.focusSearchField();
        }
      }
    }

    function onStartSearching(){
      if (isSearching()) {return false;}
      if (forceSearching()) {return false;}
      $el.addClass('searching');
      $buttons.add($around).velocity({
        opacity: 0
      }, {
        display: "none",
        duration: 350,
        ease: "ease",
        complete: onInput
      });

      // Close on Esc
      $(document).keyup(onKeyUp);
    }

    function onStopSearching(){
      if (!isSearching()) {return false;}
      if (forceSearching()) {return false;}
      $el.removeClass('searching');
      $buttons.velocity({
        opacity: 1
      }, {
        display: "block",
        duration: 350,
        ease: "ease"
      });
      $around.velocity({
        opacity: 1
      }, {
        display: "inline-block",
        duration: 350,
        ease: "ease"
      });
      $results.empty();
      PubSub.publish('header:search:close');
      $more.hide();
      $searchFieldInput.trigger('blur');
      $(document).unbind("keyup", onKeyUp);
    }

    function onInput() {
      if (!isSearching()) {
        onStartSearching();
      }
      var val = $searchFieldInput.val();
      if (val !== "") {
        index.search(val, {
          hitsPerPage: options.hitsPerPage
        }, onSearchResults);
      } else {
        $results.empty();
        $more.hide();
      }
    }

    function onSearchResults(err, results) {
      if (err) {return;}
      $results.empty();
      $.each(results.hits, function(index, hit){
        var result = '<li>' +
          '<a href="' + hit[options.link] + '">' +
            '<span class="title">' + hit._highlightResult[options.title].value + '</span>';
        if (hit[options.algoliaSectionsField]) {
          result += '<span class="section">' + hit[options.sections] + '</span>';
        }
        result += '</a></li>';
        $results.append(result);
      });
      $more.show();
    }

    function onKeyUp(e){
      if (e.keyCode == 27) {
        onClickClose(e);
      }
    }

    function onClickMore(e){
      e.preventDefault();
      $searchField.submit();
    }

    function onClickClose(e){
      e.preventDefault();
      onStopSearching();
    }


    // The API for external interaction

    api.focusSearchField = function(){
      $searchFieldInput.trigger('focus');
    };

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      quickAccess(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  if($('.quick-access').length) {
    Paris.quickAccess('.quick-access');
  }
  else {
    var $buttonSearch = $('.header-wrapper .icon-search');

    $('#main-search').focus(function () {
      $buttonSearch.addClass('active');
      $(this).velocity({
          backgroundColor: "#FCF2A6"
      }).velocity({
          backgroundColor: "#ffffff"
      });

    });

    $('#main-search').blur(function () {
      $buttonSearch.removeClass('active');
    });

    PubSub.subscribe('header:search:click', function () {
      $('#main-search').focus();

    });
  }
});
