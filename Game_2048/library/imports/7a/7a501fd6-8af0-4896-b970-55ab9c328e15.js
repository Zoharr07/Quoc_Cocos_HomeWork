"use strict";
cc._RF.push(module, '7a501/WivBIlrlwVaucMo4V', 'InputController');
// Script/Input/InputController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        Emiter.instance.addEvent('canInput', this._canInput.bind(this));
    },
    _canInput: function _canInput(status) {
        Emiter.instance.emit('inputKeyboard', status);
    }
});

cc._RF.pop();