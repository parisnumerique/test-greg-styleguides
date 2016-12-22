  'use strict';

var PubSub = require('pubsub-js');
var Cookies = require('js-cookie');

PubSub.subscribe('cookies.allow', function(){
  Cookies.set(Paris.config.cookies.cnil.name, Paris.config.cookies.cnil.value, {
    expires: Paris.config.cookies.cnil.expires
  });
  PubSub.publish('notice.close', {id: "notice_cnil"});
  PubSub.publish('cookies.updated');
});

PubSub.subscribe('notice.closed', function(e, data){
  // Set the cookie when the notice is closed
  if (data.id === 'notice_cnil') {

    console.log(Paris.config.cookies.cnil.name);

    if (Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {
      Cookies.set(Paris.config.cookies.cnil.name, Paris.config.cookies.cnil.value, {
        expires: Paris.config.cookies.cnil.expires
      });
      PubSub.publish('cookies.updated');
    }
  }
});

$(function () {
  // Open the notice if the cookie is not set
  if (Cookies.get(Paris.config.cookies.cnil.name) !== Paris.config.cookies.cnil.value) {
    PubSub.publish('notice.open', {id: 'notice_cnil'});
  }
});
