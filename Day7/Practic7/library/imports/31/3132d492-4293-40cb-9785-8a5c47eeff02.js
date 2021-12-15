"use strict";
cc._RF.push(module, '3132dSSQpNAy5eFilxH7v8C', 'main');
// Script/Ex2/main.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();