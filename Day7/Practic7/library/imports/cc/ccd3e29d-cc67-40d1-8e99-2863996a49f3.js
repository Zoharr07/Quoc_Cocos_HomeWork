"use strict";
cc._RF.push(module, 'ccd3eKdzGdA0Y6ZKGOZaknz', 'bullet');
// Script/Ex2/bullet.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on enemy hit');
        cc.log(other, self);
        if (other.tag == 3 || other.tag == 2) {
            this.node.destroy();
        }
    }
});

cc._RF.pop();