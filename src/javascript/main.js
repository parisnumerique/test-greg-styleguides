// BS3 et Velocity attendent un `jQuery` global sur `window`
window.jQuery = window.$ = require('jquery');

// load externals
require('./externals/bootstrap');

// load our librairies
require('./lib/i18n');
require('./lib/scroll');
require('./lib/string');

// load our components
require('../components/accordion/script');
require('../components/news-push/script');
require('../components/text/script');

// load our modules
require('../layouts/left-col/script');
require('../modules/anchors-list/script');
require('../modules/document-heading/script');
require('../modules/gallery-ugc/script');
require('../modules/header/script');
require('../modules/jecoute/script');
require('../modules/notice/script');
require('../modules/quick-access/script');
require('../modules/share/script');

// load our templates
require('../templates/search-results/script');
