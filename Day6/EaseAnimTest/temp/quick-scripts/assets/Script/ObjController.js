(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ObjController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3c54cZOp0FAZIrmd4VrECHU', 'ObjController', __filename);
// Script/ObjController.js

'use strict';

var EASE = require('Ease');

cc.Class({
    extends: cc.Component,

    properties: {
        object: cc.Node,
        timeTest: cc.EditBox
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        this.node.on(EASE.SINE_IN, function () {
            _this._easeMove(EASE.SINE_IN);
        });
        this.node.on(EASE.SINE_OUT, function () {
            _this._easeMove(EASE.SINE_OUT);
        });
        this.node.on(EASE.SINE_INOUT, function () {
            _this._easeMove(EASE.SINE_INOUT);
        });

        this.node.on(EASE.QUARD_IN, function () {
            _this._easeMove(EASE.QUARD_IN);
        });
        this.node.on(EASE.QUARD_OUT, function () {
            _this._easeMove(EASE.QUARD_OUT);
        });
        this.node.on(EASE.QUARD_INOUT, function () {
            _this._easeMove(EASE.QUARD_INOUT);
        });

        this.node.on(EASE.CUBIC_IN, function () {
            _this._easeMove(EASE.CUBIC_IN);
        });
        this.node.on(EASE.CUBIC_OUT, function () {
            _this._easeMove(EASE.CUBIC_OUT);
        });
        this.node.on(EASE.CUBIC_INOUT, function () {
            _this._easeMove(EASE.CUBIC_INOUT);
        });

        this.node.on(EASE.QUART_IN, function () {
            _this._easeMove(EASE.QUART_IN);
        });
        this.node.on(EASE.QUART_OUT, function () {
            _this._easeMove(EASE.QUART_OUT);
        });
        this.node.on(EASE.QUARD_INOUT, function () {
            _this._easeMove(EASE.QUARD_INOUT);
        });

        this.node.on(EASE.QUINT_IN, function () {
            _this._easeMove(EASE.QUINT_IN);
        });
        this.node.on(EASE.QUINT_OUT, function () {
            _this._easeMove(EASE.QUINT_OUT);
        });
        this.node.on(EASE.QUINT_INOUT, function () {
            _this._easeMove(EASE.QUINT_INOUT);
        });

        this.node.on(EASE.EXPO_IN, function () {
            _this._easeMove(EASE.EXPO_IN);
        });
        this.node.on(EASE.EXPO_OUT, function () {
            _this._easeMove(EASE.EXPO_OUT);
        });
        this.node.on(EASE.EXPO_INOUT, function () {
            _this._easeMove(EASE.EXPO_INOUT);
        });

        this.node.on(EASE.CIRCL_IN, function () {
            _this._easeMove(EASE.CIRCL_IN);
        });
        this.node.on(EASE.CIRCL_OUT, function () {
            _this._easeMove(EASE.CIRCL_OUT);
        });
        this.node.on(EASE.CIRCL_INOUT, function () {
            _this._easeMove(EASE.CIRCL_INOUT);
        });

        this.node.on(EASE.BACK_IN, function () {
            _this._easeMove(EASE.BACK_IN);
        });
        this.node.on(EASE.BACK_OUT, function () {
            _this._easeMove(EASE.BACK_OUT);
        });
        this.node.on(EASE.BACK_INOUT, function () {
            _this._easeMove(EASE.BACK_INOUT);
        });

        this.node.on(EASE.ELASTIC_IN, function () {
            _this._easeMove(EASE.ELASTIC_IN);
        });
        this.node.on(EASE.ELASTIC_OUT, function () {
            _this._easeMove(EASE.ELASTIC_OUT);
        });
        this.node.on(EASE.ELASTIC_INOUT, function () {
            _this._easeMove(EASE.ELASTIC_INOUT);
        });

        this.node.on(EASE.BOUNCE_IN, function () {
            _this._easeMove(EASE.BOUNCE_IN);
        });
        this.node.on(EASE.BOUNCE_OUT, function () {
            _this._easeMove(EASE.BOUNCE_OUT);
        });
        this.node.on(EASE.BOUNCE_INOUT, function () {
            _this._easeMove(EASE.BOUNCE_INOUT);
        });
    },
    start: function start() {
        this._checkTimeTest();
        this._resetPos();
    },


    // update (dt) {},
    _checkTimeTest: function _checkTimeTest() {
        if (!this.timeTest.string) this.timeTest.string = 2;
    },
    _easeMove: function _easeMove(easeType) {

        var action = cc.sequence(cc.callFunc(this._checkTimeTest(), this._resetPos()), cc.moveBy(this.timeTest.string, 800, 0));
        action.easing(eval('cc.' + easeType + '(this.timeTest.string);'));
        this.object.runAction(action);
    },
    _resetPos: function _resetPos() {
        this.object.position = cc.v2(-400, 0);
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
        //# sourceMappingURL=ObjController.js.map
        