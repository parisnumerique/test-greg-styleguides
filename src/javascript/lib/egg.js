'use strict';

$(function () {
  var sequence = [51, 54, 49, 53]; // 3 6 1 5
  var recording = 0;

  $(document).on('keypress', function(e){
    if (e.which === sequence[recording]) {
      recording++;
      if (recording === sequence.length) {
        var $theme = $('link#theme');
        if ($theme) {
          var newTheme = $theme.attr('href').replace('paris.css', 'paris-minitel.css');
          $theme.attr('href', newTheme);
          $(document).off('keypress');
        }
      }
    } else if (recording > 0) {
      recording = 0;
    }
  })
});
