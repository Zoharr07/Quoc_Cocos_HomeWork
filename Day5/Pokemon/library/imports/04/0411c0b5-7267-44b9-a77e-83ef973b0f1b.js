"use strict";
cc._RF.push(module, '0411cC1cmdEuad+g++XOw8b', 'ButtonController');
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