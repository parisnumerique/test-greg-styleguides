'use strict';

var PubSub = require('pubsub-js');
var Cookies = require('cookies-js');

PubSub.subscribe('notice:close', function(e, data){
  // Set the cookie when the notice is closed
  if (data.id === 'notice_cnil') {
    if (Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {
      Cookies.set(Paris.config.cookies.cnil.name, Paris.config.cookies.cnil.value, {
        expires: Paris.config.cookies.cnil.expires
      });
      PubSub.publish('cookies:updated');
    }
  }
});

$(function () {
  // Open the notice if the cookie is not set
  if (Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {
    PubSub.publish('notice:open', {id: 'notice_cnil'});
  }
});
