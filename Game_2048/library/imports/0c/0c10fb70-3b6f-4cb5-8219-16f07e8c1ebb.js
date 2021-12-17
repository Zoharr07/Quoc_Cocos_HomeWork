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

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.destroyNode = this._destroyNode.bind(this);
        this.node.moveUnit = this._moveUnit.bind(this);
        this.node.getUnitValue = this._getUnitValue.bind(this);
        this.node.setUnitValue = this._setUnitValue.bind(this);
    },
    start: function start() {},
    update: function update(dt) {},
    _destroyNode: function _destroyNode() {
        this.node.destroy();
        cc.log('remove node');
    },
    _moveUnit: function _moveUnit(vector2) {
        var _this = this;

        cc.tween(this.node).to(0.15, { position: vector2 }).call(function () {
            _this._canMove = true;
            cc.log(_this.node.x, _this.node.y);
        }).start();
    },
    _getUnitValue: function _getUnitValue() {
        return this.unitValue;
    },
    _setUnitValue: function _setUnitValue(num) {
        this.valueLable.string = num;
        this.unitValue = num;
    }
});

cc._RF.pop();