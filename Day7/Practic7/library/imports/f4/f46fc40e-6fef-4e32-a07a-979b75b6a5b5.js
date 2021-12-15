"use strict";
cc._RF.push(module, 'f46fcQOb+9OMqB6l5t1tqW1', 'groundJs');
// Script/Ex2/groundJs.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {},

    onCollisionStay: function onCollisionStay(other, self) {
        if (other.tag == 0) {
            if (other.node.y < -168) {
                other.node.y = -168;
            }
        }
    }
});

cc._RF.pop();