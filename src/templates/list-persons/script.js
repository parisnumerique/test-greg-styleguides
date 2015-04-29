'use strict';
require('velocity-animate');

var $ = require('jquery');
var jade = require('jade');
var _ = require('underscore');
var map = require('lodash.map');
var sortBy = require('lodash.sortby');

var Paris = window.Paris || {};

Paris.listPersons = (function(){

  var defaultOptions = {
    index: 'persons', // the Algolia index to use (should be defined in config.js)
    fields: { // matching the names of Algolia fields
      link: 'url',              // the field to use as a link
      title: 'prenom',          // the field to use as the person-block title
      text: 'titre',            // the field to use as the person-block text
      image: 'portrait',        // the field to use as image
      group: 'groupe_politique' // the field to use in the person-block text
    },
    resultsPerPage: 8, // the number of results to display per page
    facets: ["groupe_politique", "secteur"] // the available facets that will be displayed in the left column (should have been created on Algolia)
                       // you can set the name displayed in the left column in locales.js (key: $LOCALE/search_results/facets/$YOUR_FACET)
  };

  function listPersons(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
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

      $searchFieldInput = $el.find('#search-person');
      $results = $el.find('#results');
      $facetsContainer = $el.find('#facets');

      $searchFieldInput.on('input', onInput);
      $facetsContainer.on('change', 'input[type=checkbox]', updateFacets);

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
      $results.empty();

      if (!data) {
        // No search
        // TODO show default
      } else if (data.nbHits === 0) {
        // Search with no results
        //search_results_list_data.title = Paris.i18n.t("search_results/no_result");
      } else {
        // Search with results
        if (data.page === 0) {
          // On the first page, add a title
          //search_results_list_data.title = Paris.i18n.t("search_results/title", {
          //  count: data.nbHits,
          //  formattedCount: Paris.i18n.formatNumber(data.nbHits)
          //});
        } else {
          // On other pages, add the page separator
          //search_results_list_data.page = Paris.i18n.t("search_results/page", [data.page + 1]);
        }

        $.each(data.hits, function(index, hit){
          var modifiers = [];
          var anchors = [];

          var person_block_data = {
            "href": hit[options.fields.link],
            "image": hit[options.fields.image] || "../../modules/person-block/default.png",
            "title": hit[options.fields.title],
            "text": [],
            "button": {
              "text": Paris.i18n.t("person_block/button_view")
            }
          };

          if (hit[options.fields.text]) {
            person_block_data.text.push(hit[options.fields.text]);
          }
          person_block_data.text.push(hit[options.fields.group]);
          person_block_data.text = person_block_data.text.join(", ");

          var person_block = Paris.templates.templatizer["person-block"]["person-block"](person_block_data);

          $results.append(person_block);
        });
      }

      //if (data.page > 0) {
      //  $results.find('.search-results-list-more').remove();
      //  $results.append(results);
      //} else {
      //  $results.html(results);
      //}
    }

    function sortFacets(a, b){
      var intA = parseInt(a.name);
      var intB = parseInt(b.name);
      return ((intA < intB) ? -1 : ((intA > intB) ? 1 : 0));
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
              modifiers: facet === "secteur" ? ["two_cols"] : [],
              items: []
            };

            if (facet === "secteur") {

              var facetArray = map(data.facets[facet], function(number, name){ return {
                value: name,
                text: name.replace(" arrondissement", "")
              }; });
              block_aside_checkboxes_data.items = sortBy(facetArray, function(o){
                return parseInt(o.value, 10);
              });

            } else {

              $.each(data.facets[facet], function (name, number) {
                block_aside_checkboxes_data.items.push({
                  value: name,
                  text: name.replace(" arrondissement", ""),
                  number: Paris.i18n.formatNumber(number)
                });
              });

            }

            var facet_block = Paris.templates.templatizer["block-aside-checkboxes"]["block-aside-checkboxes"](block_aside_checkboxes_data);
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
      listPersons(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.listPersons('body.list-persons');
});
