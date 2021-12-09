const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        jumpBtn: cc.Button,
    },

    onLoad() {
        Emiter.instance.addEvent('setbutton', this._setBtnInteracctable.bind(this))
    },

    goLeftBtnFunc() {
        Emiter.instance.emit('goleft');
    },

    goRightBtnFunc() {
        Emiter.instance.emit('goright');
    },

    jumpBtnFunc() {
        Emiter.instance.emit('jump');
    },

    resetCharBtnFunc() {
        Emiter.instance.emit('reset');
    },

    _setBtnInteracctable(isInteractable) {
        this.leftBtn.interactable = isInteractable;
        this.rightBtn.interactable = isInteractable;
        this.jumpBtn.interactable = isInteractable;
    }
});
