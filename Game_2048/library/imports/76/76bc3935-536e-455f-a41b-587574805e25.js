"use strict";
cc._RF.push(module, '76bc3k1U25FX6QbWHV0gF4l', 'BackgroundControl');
// Script/BackgroundControl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        row: 4,
        col: 4,
        distance: 200,
        unitBG: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.instanceBackgroundUnit();
    },


    // update (dt) {},
    instanceBackgroundUnit: function instanceBackgroundUnit() {
        for (var i = 1; i <= this.row; i++) {
            for (var j = 1; j <= this.col; j++) {
                var unit = cc.instantiate(this.unitBG);
                unit.position = cc.v2((j - (this.col + 1) / 2) * this.distance, (i - (this.row + 1) / 2) * this.distance);
                this.node.addChild(unit);
                cc.log(unit);
            }
        }
    }
});

cc._RF.pop();