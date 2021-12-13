(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/ButtonController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0411cC1cmdEuad+g++XOw8b', 'ButtonController', __filename);
// Scripts/ButtonController.js

'use strict';

var Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        jumpBtn: cc.Button,
        resetBtn: cc.Button,
        ccCheckBox: cc.Toggle,
        tweenCheckBox: cc.Toggle
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('setbutton', this._setBtnInteracctable.bind(this));

        this.ccCheckBox.node.on('toggle', function () {
            Emiter.instance.emit("changeAction", 'CCAction');
        });
        this.tweenCheckBox.node.on('toggle', function () {
            Emiter.instance.emit("changeAction", 'TweenAction');
        });

        this.leftBtn.node.on('click', this._goLeftBtnFunc, this);
        this.rightBtn.node.on('click', this._goRightBtnFunc, this);
        this.jumpBtn.node.on('click', this._jumpBtnFunc, this);
        this.resetBtn.node.on('click', this._resetCharBtnFunc, this);
    },
    start: function start() {
        this.ccCheckBox.isChecked = true;
        Emiter.instance.emit("changeAction", 'CCAction');
    },
    _goLeftBtnFunc: function _goLeftBtnFunc() {
        Emiter.instance.emit('goleft');
    },
    _goRightBtnFunc: function _goRightBtnFunc() {
        Emiter.instance.emit('goright');
    },
    _jumpBtnFunc: function _jumpBtnFunc() {
        Emiter.instance.emit('jump');
    },
    _resetCharBtnFunc: function _resetCharBtnFunc() {
        Emiter.instance.emit('reset');
    },
    _setBtnInteracctable: function _setBtnInteracctable(isInteractable) {
        this.leftBtn.interactable = isInteractable;
        this.rightBtn.interactable = isInteractable;
        this.jumpBtn.interactable = isInteractable;
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
        //# sourceMappingURL=ButtonController.js.map
        