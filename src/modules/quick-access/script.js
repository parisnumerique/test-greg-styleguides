'use strict';
require('velocity-animate');

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};

Paris.quickAccess = (function(){

  var defaultOptions = {
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
      $more,
      $close,
      forceSearching = false,
      isSearching = false,
      algolia,
      index;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.index);

      $parent = $el.parent();

      $searchField = $el.find('.search-field');
      $searchFieldInput = $searchField.find('.search-field-input');
      $buttons = $el.find('.quick-access-buttons');
      $results = $el.find('.quick-access-results ul');
      $more = $el.find('.quick-access-results-more');
      $close = $el.find('.quick-access-close-search');

      forceSearching = $el.hasClass('force-searching');
      if (forceSearching) {
        $buttons.hide();
      }

      $searchFieldInput.on('input', onInput);
      $searchFieldInput.on('focus', function(){
        if ($searchFieldInput.val() !== '') {
          onStartSearching();
        }
      });
      $more.on('click', onClickMore);
      $close.on('click', onClickClose);

      PubSub.subscribe('header:search:click', onClickFromHeader);

      if ($el.hasClass('searching')) {
        onStartSearching();
      }

      $el.data('api', api);
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
              $mainSearch.trigger('focus');
              isSearching = true;
              PubSub.publish('header:search:close');
              PubSub.publish('scroll:notice:up');
            }
          }
        );
      } else {
        isSearching = true;
        $el.toggleClass('searching');
        $el.find('.search-field-input').trigger('focus');
        PubSub.publish('header:search:close');
      }
    }

    function onStartSearching(){
      if (isSearching) {return false;}
      isSearching = true;
      if (forceSearching) {return false;}
      $el.addClass('searching');
      $buttons.velocity({
        opacity: 0
      }, {
        display: "none",
        duration: 350,
        ease: "ease",
        complete: onInput
      });
    }

    function onStopSearching(){
      if (!isSearching) {return false;}
      if (forceSearching) {return false;}
      isSearching = false;
      $el.removeClass('searching');
      $buttons.velocity({
        opacity: 1
      }, {
        display: "block",
        duration: 350,
        ease: "ease"
      });
      $results.empty();
      $more.hide();
    }

    function onInput() {
      if (!isSearching) {onStartSearching(); return false;}
      var val = $searchFieldInput.val();
      if (val !== "") {
        index.search(val, onSearchResults, {
          hitsPerPage: 6
        });
      } else {
        $results.empty();
        $more.hide();
      }
    }

    function onSearchResults(success, results) {
      console.log(results);
      $results.empty();
      $.each(results.hits, function(index, hit){
        $results.append('<li>' +
          '<a href="' + hit.url + '">' +
            '<span class="title">' + hit._highlightResult.nom.value + '</span>' +
            '<span class="section">' + hit.rubriques[0] + '</span>' +
          '</a>' +
        '</li>');
      });
      $more.show();
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
  Paris.quickAccess('.quick-access');
});
