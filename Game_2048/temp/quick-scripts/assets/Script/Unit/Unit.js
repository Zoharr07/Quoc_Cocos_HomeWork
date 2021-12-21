(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Unit/Unit.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c10ftwO29MtYIZFvB+jB67', 'Unit', __filename);
// Script/Unit/Unit.js

'use strict';

var Emiter = require('Emitter');
var UnitColor = require('./UnitColor');
cc.Class({
    extends: cc.Component,
    properties: {
        sprite: cc.Sprite,
        valueLable: cc.Label,
        unitValue: 0,
        moveValue: 200
    },

    onLoad: function onLoad() {
        this.node.destroyNode = this._destroyNode.bind(this);
        this.node.moveUnit = this._moveUnit.bind(this);
        this.node.getUnitValue = this._getUnitValue.bind(this);
        this.node.setUnitValue = this._setUnitValue.bind(this);
    },
    _destroyNode: function _destroyNode() {
        this.node.destroyNode = null;
        this.node.moveUnit = null;
        this.node.getUnitValue = null;
        this.node.setUnitValue = null;
        this.node.destroy();
    },
    _moveUnit: function _moveUnit(vector2) {
        var time = 0.04;
        cc.tween(this.node).to(time, { position: vector2 }).start();
    },
    _getUnitValue: function _getUnitValue() {
        return this.unitValue;
    },
    _setUnitValue: function _setUnitValue(num) {
        this.valueLable.string = num;
        this.unitValue = num;
        this._changeColorSprite(num);
        cc.tween(this.node).to(0.04, { scale: 1.1 }, { easing: 'elasticOut' }).to(0.04, { scale: 1 }).start();
    },
    _changeColorSprite: function _changeColorSprite(num) {
        switch (num) {
            case 2:
                this.sprite.node.color = UnitColor.VALUE_2;
                break;
            case 4:
                this.sprite.node.color = UnitColor.VALUE_4;
                break;
            case 8:
                this.sprite.node.color = UnitColor.VALUE_8;
                break;
            case 16:
                this.sprite.node.color = UnitColor.VALUE_16;
                break;
            case 32:
                this.sprite.node.color = UnitColor.VALUE_32;
                break;
            case 64:
                this.sprite.node.color = UnitColor.VALUE_64;
                break;
            case 128:
                this.sprite.node.color = UnitColor.VALUE_128;
                break;
            case 256:
                this.sprite.node.color = UnitColor.VALUE_256;
                break;
            case 512:
                this.sprite.node.color = UnitColor.VALUE_512;
                break;
            case 1024:
                this.sprite.node.color = UnitColor.VALUE_1024;
                break;
            case 2048:
                this.sprite.node.color = UnitColor.VALUE_2048;
                break;
            case 4096:
                this.sprite.node.color = UnitColor.VALUE_4096;
                break;
            case 8192:
                this.sprite.node.color = UnitColor.VALUE_8192;
                break;
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
        //# sourceMappingURL=Unit.js.map
        