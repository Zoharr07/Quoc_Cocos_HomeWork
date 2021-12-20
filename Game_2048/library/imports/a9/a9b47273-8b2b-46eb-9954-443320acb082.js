"use strict";
cc._RF.push(module, 'a9b47JziytG65lURDMgrLCC', 'EventController');
// Script/Events/EventController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        Emiter.instance = new Emiter();
    }
});

cc._RF.pop();