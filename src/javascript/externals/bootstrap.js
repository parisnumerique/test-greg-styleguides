// Chargement custom de Bootstrap 3
// ================================

// BS3 s'attend à un `jQuery` global sur `window` :-(…  On le publie juste le temps nécessaire.
window.jQuery = window.$ = require('jquery');

// On charge les modules de BS3 dont on a besoin…
require('./collapse');
require('./transition');
require('./affix');
