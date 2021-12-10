"use strict";
cc._RF.push(module, 'a9b47JziytG65lURDMgrLCC', 'EventController');
// Script/Events/EventController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Emiter.instance = new Emiter();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();