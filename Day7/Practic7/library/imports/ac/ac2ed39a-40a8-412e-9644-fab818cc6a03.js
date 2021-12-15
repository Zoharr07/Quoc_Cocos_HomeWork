"use strict";
cc._RF.push(module, 'ac2edOaQKhBLpZE+rgYzGoD', 'char');
// Script/char.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        isFaling: true,
        countTime: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        cc.log(this.node.y);
    },
    update: function update(dt) {
        this._falingFunc(dt);
        this._flyUpFunc(dt);
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on collision enter');
        this.isFaling = false;
        cc.log(other, self);
    },
    _falingFunc: function _falingFunc(dt) {
        if (this.isFaling) {
            this.node.y += -dt * 100;
            cc.log(this.node.y);
        }
    },
    _flyUpFunc: function _flyUpFunc(dt) {
        if (this.isFaling) return;
        if (this.countTime <= 2) {
            this.countTime += dt;
            cc.log(this.countTime);
        } else {
            this.node.scaleY = 0.75 * 0.1;
            this.node.y += dt * 100;
        }
    }
});

cc._RF.pop();