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
        this.goTo = this._goTo.bind(this);
        Emiter.instance.addEvent('moveunit', this.goTo);
        this.node.destroyNode = this._destroyNode.bind(this);

        this.node.moveUp = this._moveUp.bind(this);
    },
    start: function start() {},
    update: function update(dt) {},
    _goTo: function _goTo(direct) {
        // while () { 

        // }
        if (this.node.x <= -300 && direct == 'left' || this.node.x >= 300 && direct == 'right' || this.node.y <= -300 && direct == 'down' || this.node.y >= 300 && direct == 'up') {
            cc.log("can't move!!!", this.node.x, this.node.y, direct);
            return;
        }
        if (this._canMove == false) return;
        this._canMove = false;
        cc.log('unit move ', direct);
        if (direct == 'left') {
            this._movePosition(-this.moveValue, 0);
        }
        if (direct == 'right') {
            this._movePosition(this.moveValue, 0);
        }
        // if (direct == 'up') {
        //     this._movePosition(0, this.moveValue);
        // } 
        if (direct == 'down') {
            this._movePosition(0, -this.moveValue);
        }
    },
    _movePosition: function _movePosition(x, y) {
        var _this = this;

        cc.tween(this.node).by(0.15, { position: cc.v2(x, y) }).call(function () {
            _this._canMove = true;
            cc.log(_this.node.x, _this.node.y);
        }).start();
    },
    _destroyNode: function _destroyNode() {
        Emiter.instance.removeEvent('moveunit', this.goTo);
        this.node.destroy();
        cc.log('remove node');
    },
    _moveUp: function _moveUp() {
        this._movePosition(0, this.moveValue);
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
        