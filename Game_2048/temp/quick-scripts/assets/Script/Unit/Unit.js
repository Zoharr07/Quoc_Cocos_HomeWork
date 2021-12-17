(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Unit/Unit.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c10ftwO29MtYIZFvB+jB67', 'Unit', __filename);
// Script/Unit/Unit.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        valueLable: cc.Label,
        value: Number,
        moveValue: 200,
        _canMove: true,
        goTo: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.destroyNode = this._destroyNode.bind(this);
        this.node.moveUnit = this._moveUnit.bind(this);
    },
    start: function start() {},
    update: function update(dt) {},
    _destroyNode: function _destroyNode() {
        this.node.destroy();
        cc.log('remove node');
    },
    _moveUnit: function _moveUnit(vector2) {
        var _this = this;

        cc.tween(this.node).to(0.2, { position: vector2 }).call(function () {
            _this._canMove = true;
            cc.log(_this.node.x, _this.node.y);
        }).start();
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
        //# sourceMappingURL=Unit.js.map
        