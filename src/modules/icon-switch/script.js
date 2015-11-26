'use strict';
require('velocity-animate');

var Cookies = require('js-cookie');

var Paris = window.Paris || {};

Paris.iconSwitch = (function(){

  var defaultOptions = {
    isUserSubscribedUrl: '/alerts/isUserSubscribed',
    subscribeUserUrl: '/alerts/subscribeUser',
    unsubscribeUserUrl: '/alerts/unsubscribeUser'
  };

  function iconSwitch(selector, userOptions){
    var $el     = $(selector),
      options = $.extend({}, defaultOptions, userOptions),
      $on, $off;

    function init(){
      initOptions();

      $on = $el.find('.icon-switch-on');
      $off = $el.find('.icon-switch-off');

      $el.on('click', onClick);

      if (Cookies.get(Paris.config.cookies.parisconnect.name)) {
        setupAlertAjaxOperations();
      }
    }

    function initOptions() {
      $.each($el.data(), function(key, value){
        options[key] = value;
      });
    }

    function onClick(e){
      e.preventDefault();
      e.stopPropagation();
      $el.toggleClass('active');

      if ($el.hasClass('active')) {
        $off.focus();
      } else {
        $on.focus();
      }
    }

    function setupAlertAjaxOperations() {
      // init for alert
      var $alertIcon = $('.document-heading-icons .icon-bell');
      var alertId = $alertIcon.attr('href') && $alertIcon.attr('href').split('/').pop();

      if (!alertId) {return;}

      // get alert current status
      var isSubscribed;
      $.ajax({
        type: 'get',
        url: options.isUserSubscribedUrl,
        data: {idalertes: alertId},
        success: function (subscribed) {
          switch (subscribed) {
            case false:
              isSubscribed = false;
              break;
            case true:
              isSubscribed = true;
              break;
            default:
              console.error('response to ' + options.isUserSubscribedUrl + '?idalertes=' + alertId + 'is not recognized: ' + subscribed);
              return;
          }
          $alertIcon.attr('href', 'javascript:void(0)');
          setupAlertHandlers();
        }
      });

      function setupAlertHandlers() {
        $alertIcon.attr('title', isSubscribed ? Paris.i18n.t("alerts/unsubscribe") : Paris.i18n.t("alerts/subscribe"));
        $alertIcon.toggleClass('active', isSubscribed);
        $alertIcon.on('click', function onClick() {
          $.ajax({
            type: 'get',
            url: isSubscribed ? options.unsubscribeUserUrl :  options.subscribeUserUrl,
            data: {idalertes: alertId},
            success: function () {
              isSubscribed = !isSubscribed;
              $alertIcon.unbind('click');
              setupAlertHandlers();
            }
          });
        });
      }

    }


    init();

    return $el;
  }

  return function(selector, userOptions){
    return $(selector).each(function(){
      iconSwitch(this, userOptions);
    });
  };

})();

$(document).ready(function(){
  Paris.iconSwitch('.icon-switch');
});
