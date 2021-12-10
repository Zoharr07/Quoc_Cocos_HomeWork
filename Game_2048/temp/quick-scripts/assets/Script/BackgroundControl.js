(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BackgroundControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '76bc3k1U25FX6QbWHV0gF4l', 'BackgroundControl', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BackgroundControl.js.map
        