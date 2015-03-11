// BS3 et Velocity attendent un `jQuery` global sur `window`
window.jQuery = window.$ = require('jquery');

// load Bootstrap
require('./externals/bootstrap');

// load our librairies
require('./lib/scroll');

// load our components
require('../components/accordion/script');
require('../components/news-push/script');
require('../components/text/script');

// load our modules
require('../layouts/left-col/script');
require('../modules/anchors-list/script');
require('../modules/document-heading/script');
require('../modules/header/script');
require('../modules/jecoute/script');
require('../modules/notice/script');
require('../modules/quick-access/script');
require('../modules/search-field/script');
require('../modules/share/script');
require('../modules/gallery-ugc/script');
