// load externals
require('./externals/bootstrap');

// load our librairies
require('./lib/events');
require('./lib/i18n');
require('./lib/requestanimationframe');
require('./lib/responsive');
require('./lib/scroll');

// load our components
require('../components/accordion/script');
require('../components/jecoute/script');
require('../components/news-push/script');

// load our layouts
require('../layouts/left-col/script');

// load our modules
require('../modules/anchors-list/script');
require('../modules/block-content-jecoute/script');
require('../modules/block-content-newsletter/script');
require('../modules/button-top/script');
require('../modules/gallery-ugc/script');
require('../modules/header/script');
require('../modules/notice/script');
require('../modules/poll/script');
require('../modules/quick-access/script');
require('../modules/rheader/script');
require('../modules/sections-panel/script');
require('../modules/share/script');

// load our templates
require('../templates/hub/script');
require('../templates/list-persons/script');
require('../templates/search/script');

var Paris = window.Paris || {};
Paris.version = "0.12.2";
Paris.templates = {};
