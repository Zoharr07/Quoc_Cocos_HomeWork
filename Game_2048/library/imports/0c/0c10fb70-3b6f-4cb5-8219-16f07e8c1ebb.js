"use strict";
cc._RF.push(module, '0c10ftwO29MtYIZFvB+jB67', 'Unit');
// Script/Unit/Unit.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        sprite: cc.Sprite,
        valueLable: cc.Label,
        unitValue: 0,
        moveValue: 200,
        _canMove: true,
        goTo: null
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
        var _this = this;

        var time = 0.05;
        // if (vector2.x != this.node.x) time = time * (Math.abs((vector2.x - this.node.x) / this.moveValue));
        // if (vector2.y != this.node.y) time = time * (Math.abs((vector2.y - this.node.y) / this.moveValue));
        cc.tween(this.node).to(time, { position: vector2 }).call(function () {
            _this._canMove = true;
        }).start();
    },
    _getUnitValue: function _getUnitValue() {
        return this.unitValue;
    },
    _setUnitValue: function _setUnitValue(num) {
        this.valueLable.string = num;
        this.unitValue = num;
        this._changeColorSprite(num);
        cc.tween(this.node).to(0.05, { scale: 1.1 }, { easing: 'elasticOut' }).to(0.05, { scale: 1 }).start();
    },
    _changeColorSprite: function _changeColorSprite(num) {
        switch (num) {
            case 2:
                this.sprite.node.color = cc.color(255, 255, 255, 255);
                break;
            case 4:
                this.sprite.node.color = cc.color(150, 200, 160, 255);
                break;
            case 8:
                this.sprite.node.color = cc.color(210, 90, 160, 255);
                break;
            case 16:
                this.sprite.node.color = cc.color(160, 100, 65, 255);
                break;
            case 32:
                this.sprite.node.color = cc.color(230, 115, 120, 255);
                break;
            case 64:
                this.sprite.node.color = cc.color(190, 75, 210, 255);
                break;
            case 128:
                this.sprite.node.color = cc.color(220, 160, 150, 255);
                break;
            case 256:
                this.sprite.node.color = cc.color(105, 195, 230, 255);
                break;
            case 512:
                this.sprite.node.color = cc.color(180, 230, 100, 255);
                break;
            case 1024:
                this.sprite.node.color = cc.color(220, 108, 170, 255);
                break;
            case 2048:
                this.sprite.node.color = cc.color(170, 35, 40, 255);
                break;
            case 4096:
                this.sprite.node.color = cc.color(140, 75, 40, 255);
                break;
            case 8192:
                this.sprite.node.color = cc.color(140, 75, 40, 255);
                break;
        }
    }
});

cc._RF.pop();