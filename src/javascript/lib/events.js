'use strict';

var PubSub = require('pubsub-js');

var Paris = window.Paris || {};
Paris.events = Paris.PubSub = Paris.PubSub || PubSub;
