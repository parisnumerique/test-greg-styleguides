'use strict';

// var jade = require('jade');
// var Cookies = require('js-cookie');

var Paris = window.Paris;

$(document).ready(function(){
  var pageId = window.location.href.split('-').pop();
  $.ajax({
    url: '/postit/' + pageId,
    type: 'get',
    success: renderPostIt
  });
});


function renderPostIt(data) {
  data.block = data.contenu;
  var postIt = Paris.templates.templatizer['postit']['postit'](data);
  $('.layout-content.components').prepend(postIt);
}
