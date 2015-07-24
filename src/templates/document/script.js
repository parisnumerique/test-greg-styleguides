'use strict';

var Cookies = require('js-cookie');

var Paris = window.Paris;

Paris.document = (function(){

  var defaultOptions = {
    postitContentUrl: '/postit/${pageId}',
    isUserSubscribedUrl: '/alerts/isUserSubscribed',
    subscribeUserUrl: '/alerts/subscribeUser',
    unsubscribeUserUrl: '/alerts/unsubscribeUser',
  };

  function document(selector, userOptions){
    var $el = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      pageId;

    init();

    return $el;

    function init(){
      initOptions();

      pageId = $('body').data('pageid');

      if (Cookies.get(Paris.config.cookies.parisconnect.name)) {
        loadPostit();
        setupAlerteAjaxOperations();
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function loadPostit(){
      $.ajax({
        url: options.postitContentUrl.replace('${pageId}', pageId),
        type: 'get',
        success: renderPostit
      });
    }

    function renderPostit(data){
      data.block = data.contenu;
      var postit = Paris.templates.templatizer['postit']['postit'](data);
      $('.components').prepend(postit);
    }

    function setupAlerteAjaxOperations() {
      //init for alerte
      var alerteElt = $('.document-heading-icons .icon-bell');
      var alerteId = alerteElt.attr('href') && alerteElt.attr('href').split('/').pop();

      if (!alerteId) {
        return;
      }

      //get alerte current status
      var isSubscribed;
      $.ajax({
        type: 'get',
        url: options.isUserSubscribedUrl.replace('${alerteId}', alerteId),
        data: {idalertes: alerteId},
        success: function (subscribed) {
          switch (subscribed) {
            case false:
              isSubscribed = false;
              break;
            case true:
              isSubscribed = true;
              break;
            default:
              console.error('response to ' + options.isUserSubscribedUrl + '?idalertes=' + alerteId + 'is not recognized: ' + subscribed);
              return;
          }
          alerteElt.attr('href', 'javascript:void(0)');
          setupAlerteHandlers();
        }
      });

      function setupAlerteHandlers() {
        alerteElt.attr('title', isSubscribed ? 'Je me désabonne de l’alerte sur ce sujet' : 'Je m’abonne à l’alerte pour recevoir toutes les informations sur ce sujet');
        alerteElt.toggleClass('active', isSubscribed);
        alerteElt.on('click', function onClick() {
          $.ajax({
            type: 'get',
            url: isSubscribed ? options.unsubscribeUserUrl :  options.subscribeUserUrl,
            data: {idalertes: alerteId},
            success: function (res) {
              isSubscribed = !isSubscribed;
              alerteElt.unbind('click');
              setupAlerteHandlers();
            }
          });
        });
      }

    }

  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      document(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.document('body.document');
});
