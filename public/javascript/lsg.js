/* global $, hljs */

'use strict';

var lsg = window.lsg = {};


lsg.nav = function(){

  // DOM
  var $nav = $('.lsg-nav');
  var $navLinks = $nav.find('.lsg-nav-content a');
  var $iframe = $('#sg-viewport');
  var $toggle = $('.lsg-nav-toggle');

  var toggleNav = function () {
    $nav.toggleClass('lsg-nav-open');
  };

  var openeMenu = function () {
    $nav.addClass('lsg-nav-open');
  };

  var closeMenu = function () {
    $nav.removeClass('lsg-nav-open');
  };

  var openLink = function(url){
    $iframe.attr('src', url);
    closeMenu();
  };

  $navLinks.on('click', function(e){
    e.preventDefault();
    $navLinks.removeClass('is-current');
    $(this).addClass('is-current');
    openLink($(this).attr('href'));
  });
  $toggle.on("mouseenter", openeMenu);
  $nav.on("mouseleave", closeMenu);
};

lsg.highlight = function () {
  var modules = $(".lsg-module, .lsg-component");
  var tpl = $('<pre class="prism language-markup"><code></code></pre>');

  modules.each(function(i, module) {
    var $module = $(module);
    var node = tpl.clone();
    var code = $.trim($module.html());
    node.find('code').text(html_beautify(code));
    $module.next('.language-jade').after(node);
  });

  if(window.Prism) {
    Prism.highlightAll();
  }
};

lsg.location = function() {
  var $sgViewport = $('#sg-viewport');
  if(document.location.hash){
    $sgViewport.attr('src', document.location.hash.slice(1));
  }
  else {
    $sgViewport.attr('src', 'base/index.html');
  }

  $sgViewport.on('load', function () {
    var src = this.contentDocument.location.pathname;
    if(src === '/base/index.html') { return ;}
    document.location.hash = src;
  });
};


/**
 * Initialization
 */

lsg.init = function () {

  if ($('body').hasClass('lsg')) {
    lsg.nav();
    lsg.location();
  }
  lsg.highlight();
};

document.addEventListener("DOMContentLoaded", lsg.init);
