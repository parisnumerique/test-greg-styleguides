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
      $searchFieldInput,
      $buttons,
      $results,
      $more,
      $close,
      isSearching = false,
      algolia,
      index;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch('QGS0I5WCQR', '9e4241f56405e46afd6c0bd52fb02a5b');
      index = algolia.initIndex('QueFaire');

      $searchField = $el.find('.search-field');
      $searchFieldInput = $searchField.find('.search-field-input');
      $buttons = $el.find('.quick-access-buttons');
      $results = $el.find('.quick-access-results ul');
      $more = $el.find('.quick-access-results-more');
      $close = $el.find('.quick-access-close-search');

      $searchFieldInput.on('input', onInput);
      $searchFieldInput.on('focus', function(){
        if ($searchFieldInput.val() !== '') {
          onStartSearching();
        }
      });
      $more.on('click', onClickMore);
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
