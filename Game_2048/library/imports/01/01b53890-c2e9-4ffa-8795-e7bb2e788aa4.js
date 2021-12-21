"use strict";
cc._RF.push(module, '01b53iQwulP+oeV57sueIqk', 'KeyboardController');
// Script/Input/KeyboardController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },


    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Emiter.instance.emit('moveUp');
                break;
            case cc.macro.KEY.down:
                Emiter.instance.emit('moveDown');
                break;
            case cc.macro.KEY.left:
                Emiter.instance.emit('moveLeft');
                break;
            case cc.macro.KEY.right:
                Emiter.instance.emit('moveRight');
                break;
        }
    }
});

cc._RF.pop();