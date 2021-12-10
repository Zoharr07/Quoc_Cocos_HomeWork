(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BackgroundControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '76bc3k1U25FX6QbWHV0gF4l', 'BackgroundControl', __filename);
// Script/BackgroundControl.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _row: 4,
        _col: 4,
        _distance: 200,
        unitBG: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.instanceBackgroundUnit();
    },


    // update (dt) {},
    instanceBackgroundUnit: function instanceBackgroundUnit() {
        for (var i = 1; i <= this._row; i++) {
            var rowBoard = [];
            for (var j = 1; j <= this._col; j++) {
                var unit = cc.instantiate(this.unitBG);
                var unitPos = cc.v2((j - (this._col + 1) / 2) * this._distance, (i - (this._row + 1) / 2) * this._distance);
                unit.position = unitPos;
                rowBoard.push(unitPos);
                this.node.addChild(unit);
                Emiter.instance.emit('addPos', unitPos);
                //cc.log(unit)
            }
            var minX = (1 - (this._col + 1) / 2) * this._distance;
            var maxX = (this._col - (this._col + 1) / 2) * this._distance;
            var minY = (1 - (this._row + 1) / 2) * this._distance;
            var maxY = (this._row - (this._row + 1) / 2) * this._distance;
            Emiter.instance.emit('setMinMaxPosition', minX, maxX, minY, maxY);
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
        