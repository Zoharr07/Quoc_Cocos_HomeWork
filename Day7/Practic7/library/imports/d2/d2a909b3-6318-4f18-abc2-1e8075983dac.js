"use strict";
cc._RF.push(module, 'd2a90mzYxhPGKvCHoB1mD2s', 'ground');
// Script/ground.js

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
// onCollisionEnter: function (other, self) {
//     console.log('on collision enter');
// }
);

cc._RF.pop();