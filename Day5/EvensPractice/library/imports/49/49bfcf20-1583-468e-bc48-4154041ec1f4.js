"use strict";
cc._RF.push(module, '49bfc8gFYNGjrxIQVQEHsH0', 'listenner');
// scripts/listenner.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.on('say-hello', function (msg) {
            console.log(msg);
        });
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();