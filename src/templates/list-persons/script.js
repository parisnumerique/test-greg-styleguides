'use strict';
require('velocity-animate');

var jade = require('jade');
var values = require('lodash.values');
var map = require('lodash.map');
var sortBy = require('lodash.sortby');
var algoliasearch = require('algoliasearch');

var Paris = window.Paris || {};

Paris.listPersons = (function(){

  var defaultOptions = {
    index: 'persons', // the Algolia index to use (should be defined in config.js)
    fields: { // matching the names of Algolia fields
      link: 'url',              // the field to use as a link
      title: 'prenom_nom',          // the field to use as the person-block title
      text: 'mandat',            // the field to use as the person-block text
      image: 'portrait',        // the field to use as image
      group: 'groupe_politique' // the field to use in the person-block text
    },
    resultsPerPage: 8, // the number of results to display per page
    facets: ["groupe_politique", "secteur"], // the available facets that will be displayed in the left column (should have been created on Algolia)
                       // you can set the name displayed in the left column in locales.js (key: $LOCALE/search_results/facets/$YOUR_FACET)
    addFacetFilter: null // the facetFilter you want to always add by default (useful for filtering results)
  };

  function listPersons(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      api = {},
      $searchFieldInput,
      $results,
      $pagination,
      $facetsContainer,
      currentFacets = [],
      algolia,
      index,
      currentPage = 0;

    function init(){
      initOptions();

      algolia = algoliasearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.indexes[options.index]);

      $searchFieldInput = $el.find('#search-person');
      $results = $el.find('#results');
      $pagination = $el.find('#pagination');
      $facetsContainer = $el.find('#facets');

      $searchFieldInput.on('input', onInput);
      $facetsContainer.on('change', 'input[type=checkbox]', updateFacets);
      $pagination.on('click', 'a', onClickPagination);

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
      launchSearch(query);
    }

    function scrollToResultsTop() {
      $results.velocity("scroll", {
        duration: 700,
        offset: -100,
        mobileHA: false
      });
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
        facetFilters: [],

        // Explicitly request necessary attributes (as defined in options)
        attributesToRetrieve: values(options.fields).join(',')
      };

      // If some facets filters are active, add them to the request
      if (currentFacets.length !== 0) {
        params.facetFilters = currentFacets;
      }

      // Add mandatory facet filters
      if (options.addFacetFilter !== null) {
        params.facetFilters.push(options.addFacetFilter);
      }

      // Launch the search using Algolia
      index.search(query, params, onSearchResults);
    }

    function onSearchResults(err, data) {
      if (err) {return;}
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
        $results.html("<h2>" + Paris.i18n.t("search_results/no_result") + "</h2>");
      } else {
        // Search with results
        $.each(data.hits, function(index, hit){
          var modifiers = [];

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

      renderPagination(data);
    }

    function renderPagination(data){
      if (data.nbPages > 1) {
        var pagination_data = {
          "text": {
            "prev": "Page précédente",
            "next": "Page suivante"
          },
          "url": "/page/${page}",
          "current": data.page + 1,
          "total": data.nbPages
        };
        var pagination = Paris.templates.templatizer["pagination"]["pagination"](pagination_data);
        $pagination.html(pagination);
      } else {
        $pagination.empty();
      }
    }

    function onClickPagination(e){
      e.preventDefault();
      var page = $(this).data('page');
      if (page === "prev") {
        currentPage -= 1;
      } else if (page === "next") {
        currentPage += 1;
      } else {
        currentPage = parseInt(page, 10) - 1;
      }
      launchSearch();
      scrollToResultsTop();
    }

    function renderFacets(data) {

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

    function updateFacets() {
      currentFacets = [];
      $.each(options.facets, function(index, facet) {
        var facetValues = [];
        var $select = $facetsContainer.find(".block-aside-select[name^='" + facet + "']");
        var $checkboxes = $facetsContainer.find("input[type=checkbox][name^='" + facet + "']:checked");

        if ($select.is(':visible')) {
          if ($select.val() === null) {return;}
          $.each($select.val(), function(i, value){
            facetValues.push($select.attr("name").replace("[]", "") + ":" + value);
          });
        } else {
          $checkboxes.each(function(){
            if ($(this).val() === null) {return;}
            facetValues.push($(this).attr("name").replace("[]", "") + ":" + $(this).val());
          });
        }

        if (facetValues.length > 0) {
          currentFacets.push(facetValues);
        }
      });
      onInput();
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
