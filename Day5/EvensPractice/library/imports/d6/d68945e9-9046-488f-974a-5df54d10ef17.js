"use strict";
cc._RF.push(module, 'd6894XpkEZIj5dKXfVNEO8X', 'EventForm');
// scripts/EventForm.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("HELLO", this.onHello.bind(this));
        Emitter.instance.registerOnce("WELCOME", this.onWelcome.bind(this));
    },
    onHello: function onHello(data) {
        cc.log('hello', data);
    },
    onWelcome: function onWelcome(data) {
        cc.log('welcome', data);
    },
    start: function start() {}
});

cc._RF.pop();