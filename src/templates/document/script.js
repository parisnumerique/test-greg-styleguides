'use strict';

var Cookies = require('js-cookie');

var Paris = window.Paris;

$(document).ready(function(){
  if(Cookies.get('pcuid')) {
    var pageId = $('body').data('pageid');
    $.ajax({
      url: '/postit/' + pageId,
      type: 'get',
      success: renderPostIt
    });
  }
});


function renderPostIt(data) {
  data.block = data.contenu;
  var postIt = Paris.templates.templatizer['postit']['postit'](data);
  $('.layout-content.components').prepend(postIt);
}
