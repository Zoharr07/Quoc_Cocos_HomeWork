"use strict";
cc._RF.push(module, '5f880U1sbhJ17JInOEyFQwh', 'emitBtnCtrl');
// scripts/emitBtnCtrl.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start: function start() {},
    onHello: function onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome: function onWelcome() {
        Emitter.instance.emit('WELCOME', "Welcomeeeee");
    }
});

cc._RF.pop();