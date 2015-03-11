'use strict';
require('velocity-animate');

var Paris = window.Paris || {};

Paris.quickAccess = (function(){

  var defaultOptions = {
  };

  function quickAccess(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $searchField,
      $buttons,
      $results,
      $close,
      isSearching = false,
      algolia,
      index;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch('QGS0I5WCQR', '9e4241f56405e46afd6c0bd52fb02a5b');
      index = algolia.initIndex('QueFaire');

      $searchField = $el.find('.search-field-input');
      $buttons = $el.find('.quick-access-buttons');
      $results = $el.find('.quick-access-results ul');
      $close = $el.find('.quick-access-close-search');

      $searchField.on('input', onInput);
      $searchField.on('focus', function(){
        if ($searchField.val() !== '') {
          onStartSearching();
        }
      });
      $close.on('click', onStopSearching);

      if ($el.hasClass('searching')) {
        onStartSearching();
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onStartSearching(){
      if (isSearching) {return false;}
      isSearching = true;
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
    }

    function onInput() {
      if (!isSearching) {onStartSearching(); return false;}
      var val = $searchField.val();
      if (val !== "") {
        index.search(val, onSearchResults, {
          hitsPerPage: 6
        });
      } else {
        $results.empty();
      }
    }

    function onSearchResults(success, results) {
      $results.empty();
      $.each(results.hits, function(index, hit){
        $results.append('<li>' +
          '<a href="' + hit.url + '">' +
            '<span class="title">' + hit._highlightResult.nom.value + '</span>' +
            '<span class="section">' + hit.rubriques[0] + '</span>' +
          '</a>' +
        '</li>');
      });
    }

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
