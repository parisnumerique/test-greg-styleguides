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
      $more,
      currentFacets = [],
      algolia,
      index;

    function init(){
      initOptions();

      algolia = new AlgoliaSearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.indexes[options.index]);

      $searchFieldInput = $el.find('#main-search');
      $results = $el.find('#results');
      $facetsContainer = $el.find('.layout-aside');
      //$more = $el.find('.quick-access-results-more');

      $searchFieldInput.on('input', onInput);
      $facetsContainer.on('change', 'input[type=checkbox]', updateFacets);
      //$more.on('click', onClickMore);

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
          facets: options.facets.join(','),
          attributesToRetrieve: _.values(options.fields).join(',')
        };
        console.log(params);
        if (currentFacets.length !== 0) {
          params.facetFilters = currentFacets;
        }
        index.search(val, onSearchResults, params);
      } else {
        renderResults(false);
        renderFacets(false);
      }
    }

    function onSearchResults(success, data) {
      renderResults(data);
      renderFacets(data);
    }

    function renderResults(data) {
      var search_results_list_data = {
        items: []
      };

      if (!data) { // No search
        search_results_list_data.title = "";
        // TODO show default
      } else if (data.nbHits === 0) { // Search with no results
        search_results_list_data.title = Paris.i18n.t("search_results/no_result");
      } else { // Search with results
        search_results_list_data.title = Paris.i18n.t("search_results/title", {
          count: data.nbHits,
          formattedCount: Paris.i18n.formatNumber(data.nbHits)
        });

        $.each(data.hits, function(index, hit){
          var modifiers = [];
          var anchors = [];

          // Add the `primary` modifier when needed
          if (hit[options.fields.primary] === 1) {modifiers.push("primary");}

          // Parse the anchors if they exist
          if (hit[options.fields.anchors].length != 0) {anchors = JSON.parse(hit[options.fields.anchors])}

          search_results_list_data.items.push({
            href: hit[options.fields.link],
            modifiers: modifiers,
            title: hit[options.fields.title],
            text: hit[options.fields.sections],
            anchors: anchors
          });
        });
      }

      var results = templates.search_results_list({opts: search_results_list_data});
      $results.html(results);
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

            var facet_block = templates.block_aside_checkboxes({opts: block_aside_checkboxes_data});
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
      search(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.search('body.search');
});
