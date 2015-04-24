# Changelog

## 0.9.3 (2015-04-24)

* Use last harpjs version (with up-to-date sass and jade)
* Updated changelog
* Move built `*.tpl.js` to `build/assets/javascript`

## 0.9.2 (2015-04-24)

* Fix `.header` CSS rule conflict with BO
* Fix build task

## 0.9.1 (2015-04-24)

* Fixed build task
* Removed old build files
* Use modified version of templatizer

## 0.9 (2015-04-24)

### New components, modules and templates

* component `postit`
* module `button-top`
* module `intro-text`
* template `document-postit`
* template `get-involved`
* template `hub/content-open`
* template `hub/subnav-open`
* template `municipality`
* template `subhome-news/page2`
* template `subhome-news/tag`

### Changes after feedback from SEO

* module `links-group`: added links to header, added `intro-text`
* module `sections-panel`: added intro texts
* template `subhome-get-involved`: added `intro-text`, data changed
* template `subhome-municipality`: data changed
* template `subhome-news`: data changed

### Changes after feedback from acceptance testing

* component `accordion`: added hover
* component `buttons`: improved margin-top, standardized class names
* component `jecoute`: focus style for forms, added JS behaviour
* component `links`: added external border
* component `news-push`: added link on image, namespaced CSS
* component `text`: fix bug when anchor is after a floating component
* module `anchors-list`: added modifier `anchor-postit`
* module `block-aside-links`: fix padding
* module `block-content-social`: added Dailymotion
* module `breadcrumbs`: improved hover style, added anchor `#breadcrumbs` (used for `sections-list` links)
* module `document-heading`: support for long titles
* module `get-involved`: added image title+credit and modifier, fixed header links and data
* module `get-involved-list`: include modules `intro-text` and `heading`, optimized SVG files
* module `header`: data changed (for all templates)
* module `hub-heading`: new modifier `small` (for `search` template)
* module `links-group`: fix vertical alignment of icon
* module `news-card`: fix margin-bottom
* module `news-card`: fix regression bug
* module `notice`: fix close button padding
* module `pagination`: refactoring
* module `person-block`: fix jade syntax
* module `person-block`: refactoring
* module `quick-access`: added example to documentation, fix border-bottom
* module `search-results-list`: added transition on links
* module `sections-list`: fix more button
* module `sections-panel`: multiple improvements (data changed)
* module `share`: fix condition
* template `document`: data changed
* template `home`: fixed spacings by adding modifiers to blocks
* template `municipality`: fix links color
* template `single-person-small-picture`: moved to `single-person/small-portrait`
* template `subhome-get-involved`: added current state in `header` (data changed)
* template `subhome-news/tag`: use `hub-heading` instead of `jumbotron`
* template `subhome-news`: changed wording
* template ``:
* all templates:
  * module `cross-content`: removed instagram icon
  * added `.components` class to parent element whenever we render components

### Miscellaneous

* Added real links between templates to allow navigation in styleguide
* Added a way to include additional scripts to `wrapper_prod`
* Removed normalize-opentype (unused)
* Added modernizr
* Misc IE11 fixes
* Conditional flexbox with modernizr + fixed flexbox in IE11

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
