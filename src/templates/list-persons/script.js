'use strict';
require('velocity-animate');

var jade = require('jade');
var values = require('lodash.values');
var map = require('lodash.map');
var sortBy = require('lodash.sortby');
var forEach = require('lodash.foreach');
var map = require('lodash.map');
var algoliasearch = require('algoliasearch');
var algoliaSearchHelper = require('algoliasearch-helper');

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
    resultsPerPage: 100, // the number of results to display per page
    facets: ["groupe_politique", "secteur"], // the available facets that will be displayed in the left column (should have been created on Algolia)
                       // you can set the name displayed in the left column in locales.js (key: $LOCALE/search_results/facets/$YOUR_FACET)
    addFacetFilter: null, // the facetFilter you want to always add by default (useful for filtering results)
    algoliaHelperParams: {facets: ['mandat'], disjunctiveFacets: ['groupe_politique', 'secteur']}
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
      helper,
      currentPage = 0,
      isFiltered;

    function init(){
      initOptions();

      algolia = algoliasearch(Paris.config.algolia.id, Paris.config.algolia.api_key);
      index = algolia.initIndex(Paris.config.algolia.indexes[options.index]);
      helper = algoliaSearchHelper(algolia, Paris.config.algolia.indexes[options.index], options.algoliaHelperParams);

      // Add mandatory facet filters
      if (options.addFacetFilterJson) {
        $.each(options.addFacetFilterJson, function (index, facetFilter) {
          helper.addRefine(facetFilter.facetName, facetFilter.facetValue);
        });
      }

      helper.on('result', onSearchResults);

      $searchFieldInput = $el.find('#search-person');
      $results = $el.find('#results');
      $pagination = $el.find('#pagination');
      $facetsContainer = $el.find('#facets');

      $searchFieldInput.on('change', onInput);

      $facetsContainer.on('change', 'input[type=checkbox]', updateFacets);
      $pagination.on('click', 'a', onClickPagination);

      // If the search field is not empty or if there is more than one facet selected, trigger the search on page load
      if ($searchFieldInput.val() != "" || _moreThanOneFacet()) {
        updateFacets();
      }

      $el.data('api', api);
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onInput(e) {
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
      helper.setQuery(query);

      isFiltered = query ? true : false;

      helper.setCurrentPage(currentPage);

      //add selected facets to algolia search
      var helperState = JSON.parse(JSON.stringify(helper.getState()));
      $.each(options.facets, function(index, facet) {
        if (currentFacets[facet] && currentFacets[facet].length) {
          isFiltered = true;
        }
        helperState.disjunctiveFacetsRefinements[facet] = currentFacets[facet];
      });
      helper.setState(helperState);

      helper.setQueryParameter('hitsPerPage', isFiltered ? options.resultsPerPage : 8);

      //set query parameters
      if(isFiltered) {
        Paris.url.setQueryString(currentFacets);
      } else {
        Paris.url.setQueryString({page: currentPage});
      }

      helper.search();
    }

    function onSearchResults(data) {
      renderResults(data);
      renderFacets(data);
    }

    function renderResults(data) {
      $results.empty();

      if (!data) {
        // No search
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

          var person_block = Paris.templates["person-block"]["person-block"](person_block_data);

          $results.append(person_block);
        });
      }

      renderPagination(data);
    }

    function renderPagination(data){
      if ((data.nbPages > 1) || !isFiltered) {
        var pagination_data = {
          "text": {
            "prev": Paris.i18n.t("pagination/prev"),
            "next": Paris.i18n.t("pagination/next")
          },
          "base_url": window.location.pathname,
          "url": "?page=${page}",
          "current": data.page + 1,
          "total": data.nbPages
        };
        var pagination = Paris.templates["pagination"]["pagination"](pagination_data);
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
      var allFacets = {};
      $.each(['disjunctiveFacets', 'facets'], function (index, facetType) {
        $.each(data[facetType], function (index, facet) {
          allFacets[facet.name] = facet.data;
        });
      });

      $facetsContainer.empty();

      $.each(options.facets, function(index, facet) {

        var block_aside_checkboxes_data = {
          title: Paris.i18n.t("search_results/facets/"+facet),
          name: facet,
          modifiers: facet === "secteur" ? ["two-cols"] : [],
          items: []
        };

        if (facet === "secteur") {

          var facetArray = map(allFacets[facet], function(number, name){ return {
            value: name,
            text: name.replace(" arrondissement", ""),
            number: Paris.i18n.formatNumber(number),
            checked: $.inArray(name, currentFacets[facet]) !== -1
          }; });
          block_aside_checkboxes_data.items = sortBy(facetArray, function(o){
            return parseInt(o.value, 10);
          });

        } else {

          $.each(allFacets[facet], function (name, number) {
            block_aside_checkboxes_data.items.push({
              value: name,
              text: name,
              number: Paris.i18n.formatNumber(number),
              checked: $.inArray(name, currentFacets[facet]) !== -1
            });
          });

        }

        var facet_block = Paris.templates["block-aside-checkboxes"]["block-aside-checkboxes"](block_aside_checkboxes_data);
        $facetsContainer.append(facet_block);
      });
    }

    function updateFacets() {
      currentFacets = {};
      $.each(options.facets, function(index, facet) {
        var facetValues = [];
        var $select = $facetsContainer.find(".block-aside-select[name^='" + facet + "']");
        var $checkboxes = $facetsContainer.find("input[type=checkbox][name^='" + facet + "']:checked");

        if ($select.is(':visible')) {
          if ($select.val() === null) {return;}
          $.each($select.val(), function(i, value){
            facetValues.push(value);
          });
        } else {
          $checkboxes.each(function(){
            if ($(this).val() === null) {return;}
            facetValues.push($(this).val());
          });
        }

        if (facetValues.length > 0) {
          currentFacets[facet] = facetValues;
        }
      });
      onInput();
    }

    function _moreThanOneFacet() {
      var queryObj = Paris.url.parseQueryString();
      var nbOfFacets = 0;
      $.each(options.facets, function (index, facetName) {
        nbOfFacets += queryObj[facetName] ? queryObj[facetName].length : 0;
      });
      return nbOfFacets > 1;
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
  $(".hidden-without-js").show();
  Paris.listPersons('body.list-persons');
});
