# Changelog

## 0.9 (2015-04-24)

_Changelog for 0.9 is coming..._


## 0.8 (2015-04-07)

### Improved search

* module `search-results-list`:
    * added support for "promoted" results
    * pagination support
* template `search/results` added
    * automatically launch search on page load if search field is not empty
* `config.js`: changed global Algolia index

### Miscellaneous

* module `poll`
    * multiple changes in `data`
    * added second state (after answer)
    * better performance for `canvas` animation, disable it when not in viewport
    * use `background-image` when particles do not work
    * fix `z-index` bug
    * various CSS fixes (title `max-width`, answers `inline-block`)
* module `block-aside-contact`: added rollovers on links and better spacing
* module `anchors-list`: fixed bug shifted progress on click on an anchor
* module `last-update`: new module
* component `jecoute`: changed data format (removed `modifiers`, renamed `text_button` to `button`)
* component `links`: better positioning for icons
* template `document`: added `last-update` module and `jecoute` component at the end
* added `lang` param to `html` tag in `wrapper_prod` layout

## 0.7.1 (2015-04-02)

* fixed compilation errors in some templates

## 0.7 (2015-03-26)

### Improved search modules and template

* module `quick-access`: added options for easier Algolia configuration
* module `search-field`: added documentation in `script.js`
* module `search-results-list`:
    * data: `result` is renamed `title`
* template `search`:
    * renamed (formerly `search-results`)
    * added options for easier Algolia configuration, translate facet names
* `locales.js`: added facet names translations
* `config.js`: better documentation, you can now define multiple Algolia indexes

### Modularized the `home` template with `blocks`

The data model of the `home` template is now based on an array of `blocks` that are Jade mixins defined in `src/templates/home/blocks/`

The template has been modified in order to loop on this array and call the mixins.

### Miscellaneous

* module `quick-access`: now supports video background
    * added an example in documentation
    * data: `background` is now a object with an `image` and/or `video` parameters
    * in examples, "around me" button now opens meslieux.paris.fr in a new window
* module `button`: now accepts a `target` option to specify link target
* module `news-card`: added examples with long values and `large` modifier, fixed hover bugs, improved social-counters animation
* module `document-heading`: background image is now centered vertically
* module `jumbotron`: works with a light background, added a test example to the documentation
* module `anchors-list`: added rollovers
* component `accordion`: now supports basic HTML content, better rendering, improved documentation with better examples
* component `buttons`: can be used for adding a single button (without a title)
* component `text`: removed inline .button from templates and documentation, use a buttons component instead
* component `html`: this new component can be used to insert unfiltered HTML content
* lib `i18n.js`: catch errors when a key does not exist
