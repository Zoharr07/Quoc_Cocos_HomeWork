"use strict";
cc._RF.push(module, '336b4TSc7FK450pR/o20jim', 'enemy');
// Script/Ex2/enemy.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        var _this = this;

        console.log('on bullet hit');
        if (other.tag == 4) {

            cc.log(other, self);
            cc.tween(this.node).delay(0.1).call(function () {
                _this.node.destroy();
            }).start();
        }
    }
});

cc._RF.pop();