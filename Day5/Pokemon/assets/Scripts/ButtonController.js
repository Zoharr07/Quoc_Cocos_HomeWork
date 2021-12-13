const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        jumpBtn: cc.Button,
        resetBtn: cc.Button,
        ccCheckBox: cc.Toggle,
        tweenCheckBox: cc.Toggle,
    },

    onLoad() {
        Emiter.instance.addEvent('setbutton', this._setBtnInteracctable.bind(this));

        this.ccCheckBox.node.on('toggle', () => { Emiter.instance.emit("changeAction", 'CCAction'); });
        this.tweenCheckBox.node.on('toggle', () => { Emiter.instance.emit("changeAction", 'TweenAction'); });

        this.leftBtn.node.on('click', this._goLeftBtnFunc, this);
        this.rightBtn.node.on('click', this._goRightBtnFunc, this);
        this.jumpBtn.node.on('click', this._jumpBtnFunc, this);
        this.resetBtn.node.on('click', this._resetCharBtnFunc, this);
    },
    start() {
        this.ccCheckBox.isChecked = true;
        Emiter.instance.emit("changeAction", 'CCAction');
    },

    _goLeftBtnFunc() {
        Emiter.instance.emit('goleft');
    },

    _goRightBtnFunc() {
        Emiter.instance.emit('goright');
    },

    _jumpBtnFunc() {
        Emiter.instance.emit('jump');
    },

    _resetCharBtnFunc() {
        Emiter.instance.emit('reset');
    },

    _setBtnInteracctable(isInteractable) {
        this.leftBtn.interactable = isInteractable;
        this.rightBtn.interactable = isInteractable;
        this.jumpBtn.interactable = isInteractable;
    }
});
