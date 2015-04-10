'use strict';
require('velocity-animate');

var $ = require('jquery');
var jade = require('jade');
var _ = require('underscore');

var Paris = window.Paris || {};

Paris.search = (function(){

  var defaultOptions = {
    index: 'global', // the Algolia index to use (should be defined in config.js)
    fields: { // matching the names of Algolia fields
      link: 'url',           // the field to use as a link
      title: 'titre',        // the field to use as a title
      sections: 'onglet',    // the field to use as a section
      primary: 'isPromoted', // the field for primary results (boolean)
      anchors: 'ancres'      // the field for anchors (array of objects)
    },
    resultsPerPage: 8, // the number of results to display per page
    facets: ["onglet"] // the available facets that will be displayed in the left column (should have been created on Algolia)
                       // you can set the name displayed in the left column in locales.js (key: $LOCALE/search_results/facets/$YOUR_FACET)
  };

  function search(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      templates = {
        search_results_list: require('../../modules/search-results-list/_client.jade'),
        block_aside_checkboxes: require('../../modules/block-aside-checkboxes/_client.jade')
      },
      api = {},
      $searchFieldInput,
      $results,
      $facetsContainer,
      currentFacets = [],
      algolia,
      index,
      currentPage = 0;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.indexes[options.index]);

      $searchFieldInput = $el.find('#main-search');
      $results = $el.find('#results');
      $facetsContainer = $el.find('.layout-aside');

      $searchFieldInput.on('input', onInput);
      $facetsContainer.on('change', 'input[type=checkbox]', updateFacets);
      $el.on('click', '.search-results-list-more .button', onClickMore);

      // If the search field is not empty, trigger the search on page load
      if ($searchFieldInput.val() != "") {
        $searchFieldInput.trigger('input');
      }

      $el.data('api', api);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onInput() {
      currentPage = 0;
      var query = $searchFieldInput.val();
      if (query !== "") {
        launchSearch(query);
      } else {
        renderResults(false);
        renderFacets(false);
      }
    }

    function launchSearch(query){
      if (typeof query === 'undefined') {
        query = $searchFieldInput.val();
      }

      var params = {
        // Pagination params
        page: currentPage,
        hitsPerPage: options.resultsPerPage,

        // Explicitly request necessary facets (as defined in options)
        facets: options.facets.join(','),

        // Explicitly request necessary attributes (as defined in options)
        attributesToRetrieve: _.values(options.fields).join(',')
      };

      // If some facets filters are active, add them to the request
      if (currentFacets.length !== 0) {
        params.facetFilters = currentFacets;
      }

      // Launch the search
      index.search(query, onSearchResults, params);
    }

    function onSearchResults(success, data) {
      renderResults(data);
      renderFacets(data);
    }

    function renderResults(data) {
      var search_results_list_data = {
        items: []
      };

      if (!data) {
        // No search
        search_results_list_data.title = "";
        // TODO show default
      } else if (data.nbHits === 0) {
        // Search with no results
        search_results_list_data.title = Paris.i18n.t("search_results/no_result");
      } else {
        // Search with results
        if (data.page === 0) {
          // On the first page, add a title
          search_results_list_data.title = Paris.i18n.t("search_results/title", {
            count: data.nbHits,
            formattedCount: Paris.i18n.formatNumber(data.nbHits)
          });
        } else {
          // On other pages, add the page separator
          search_results_list_data.page = Paris.i18n.t("search_results/page", [data.page + 1]);
        }

        $.each(data.hits, function(index, hit){
          var modifiers = [];
          var anchors = [];

          // Add the `primary` modifier when needed
          if (hit[options.fields.primary] === 1) {modifiers.push("primary");}

          // Parse the anchors if they exist
          if (hit[options.fields.anchors].length != 0) {
            anchors = JSON.parse(hit[options.fields.anchors]);

            // Concatenate hit href and anchor href
            $.each(anchors, function(index, anchor){
              anchor.href = hit[options.fields.link] + "#" + anchor.href;
            });
          }

          search_results_list_data.items.push({
            href: hit[options.fields.link],
            modifiers: modifiers,
            title: hit[options.fields.title],
            text: hit[options.fields.sections],
            anchors: anchors
          });
        });

        // Add "more" button if needed
        if (data.page + 1 < data.nbPages) {
          search_results_list_data.more = {
            text: Paris.i18n.t("search_results/more"),
            page: data.page + 1
          };
        }
      }

      var results = templates.search_results_list({data: search_results_list_data});

      if (data.page > 0) {
        $results.find('.search-results-list-more').remove();
        $results.append(results);
      } else {
        $results.html(results);
      }
    }

    function renderFacets(data) {

      if (!data || data.nbHits === 0) {
        // No search or search with no results
        $facetsContainer.empty();
      } else { // Search with results
        if (currentFacets.length === 0
          && !$.isEmptyObject(options.facets)
          && !$.isEmptyObject(data.facets)
        ) {
          $facetsContainer.empty();

          $.each(options.facets, function(index, facet) {

            var block_aside_checkboxes_data = {
              title: Paris.i18n.t("search_results/facets/"+facet),
              name: facet,
              items: []
            };

            $.each(data.facets[facet], function (name, number) {
              block_aside_checkboxes_data.items.push({
                value: name,
                text: name,
                number: Paris.i18n.formatNumber(number)
              });
            });

            var facet_block = templates.block_aside_checkboxes({data: block_aside_checkboxes_data});
            $facetsContainer.append(facet_block);

          });
        }
      }
    }

    function updateFacets() {
      currentFacets = [];
      $.each(options.facets, function(index, facet) {
        var facetValues = [];
        $facetsContainer.find("input[type=checkbox][name^='" + facet + "']:checked").each(function(){
          facetValues.push($(this).attr("name").replace("[]", "") + ":" + $(this).val());
        });
        if (facetValues.length > 0) {
          currentFacets.push(facetValues);
        }
      });
      onInput();
    }

    function onClickMore(e){
      e.preventDefault();
      currentPage = $(this).data('page');
      launchSearch();
    }


    // The API for external interaction

    api.search = function(query){
      $searchFieldInput.val(query).trigger('input');
    };

    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      search(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.search('body.search');
});
