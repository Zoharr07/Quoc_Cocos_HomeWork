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
        jumpBtn: cc.Button
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('setbutton', this._setBtnInteracctable.bind(this));
    },
    goLeftBtnFunc: function goLeftBtnFunc() {
        Emiter.instance.emit('goleft');
    },
    goRightBtnFunc: function goRightBtnFunc() {
        Emiter.instance.emit('goright');
    },
    jumpBtnFunc: function jumpBtnFunc() {
        Emiter.instance.emit('jump');
    },
    resetCharBtnFunc: function resetCharBtnFunc() {
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
        