'use strict';
require('velocity-animate');

var $ = require('jquery');
var jade = require('jade');

var Paris = window.Paris || {};

Paris.searchResults = (function(){

  var defaultOptions = {
    resultsPerPage: 8,
    facets: ["rubriques", "univers"]
  };

  function searchResults(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      templates = {
        search_result: require('../../modules/search-results-list/client.jade'),
        block_aside_checkboxes: require('../../modules/block-aside-checkboxes/client.jade')
      },
      api = {},
      $searchFieldInput,
      $results,
      $facetsBlock,
      $facets,
      $more,
      currentFacets = [],
      algolia,
      index;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.index);

      $searchFieldInput = $el.find('#main-search');
      $results = $el.find('#results');
      $facetsBlock = $el.find('.layout-aside .block-aside-checkboxes');
      $facets = $facetsBlock.find('.block-aside-items');
      //$more = $el.find('.quick-access-results-more');

      $searchFieldInput.on('input', onInput);
      $facets.on('change', 'input[type=checkbox]', updateFacets);
      //$more.on('click', onClickMore);

      // Hide facets if there are none
      if ($facets.children().length === 0) {
        $facetsBlock.hide();
      }

      //$el.data('api', api);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onInput() {
      var val = $searchFieldInput.val();
      if (val !== "") {
        var params = {
          hitsPerPage: options.resultsPerPage,
          facets: options.facets.join(',')
        };
        if (currentFacets.length !== 0) {
          params.facetFilters = currentFacets;
        }
        index.search(val, onSearchResults, params);
      } else {
        renderResults(false);
      }
    }

    function onSearchResults(success, data) {
      console.log(data);
      renderResults(data);
      renderFacets(data);
    }

    function renderResults(data) {
      var search_result_data = {
        items: []
      };

      if (!data) { // No search

        search_result_data.result = "";
        $facets.empty();
        $facetsBlock.hide();

      } else if (data.nbHits === 0) { // Search with no results

        search_result_data.result = Paris.t("search_results/no_result");
        $facets.empty();
        $facetsBlock.hide();

      } else { // Search with results

        search_result_data.result = "<var>" + Paris.format_number(data.nbHits) + "</var> résultats";

        $.each(data.hits, function(index, hit){
          search_result_data.items.push({
            href: "#", //hit.url,
            title: hit.nom,
            text: hit.rubriques[0]
          });
        });

      }

      var results = templates.search_result({opts: search_result_data});
      $results.html(results);
    }

    function renderFacets(data) {
      if (currentFacets.length === 0
        && !$.isEmptyObject(options.facets)
        && !$.isEmptyObject(data.facets)
      ) {
        $facetsBlock.show();

        $.each(options.facets, function(index, facet) {

          var block_aside_checkboxes_data = {
            name: facet,
            items: []
          };

          $.each(data.facets[facet], function (name, number) {
            block_aside_checkboxes_data.items.push({
              value: name,
              text: name,
              number: number
            });
          });

          var facets = templates.block_aside_checkboxes({opts: block_aside_checkboxes_data});
          // TODO target facet
          $facets.html(facets);

        });
      }
    }

    function updateFacets() {
      currentFacets = [];
        $facets.find("input[type=checkbox]:checked").each(function(){
          currentFacets.push($(this).attr("name").replace("[]", "") + ":" + $(this).val());
        });
      console.log(currentFacets);
      onInput();
    }

    //function onClickMore(e){
    //  e.preventDefault();
    //  $searchField.submit();
    //}


    // The API for external interaction

    //api.focusSearchField = function(){
    //  $searchFieldInput.trigger('focus');
    //};

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      searchResults(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.searchResults('body.search-results');
});
