var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        inputNameBox: cc.EditBox,
        nameErrorBox: cc.Label,
        control: {
            type: cc.Node,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {
        this.turnOffErrorBox();
        this.control = this.getComponent(Controller);
    },
    // update (dt) {},


    checkFullName() {
        if (this.inputNameBox.string === "") {
            this.nameErrorBox.active = true;
            this.nameErrorBox.string = "Yourname can't be null, please check again!!!";
            this.control.nameFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputNameBox.string)) {
            this.nameErrorBox.string = 'You input special char, please check again!!!';
            this.nameErrorBox.active = true;
            this.control.nameFlag = false;
        } else {
            this.turnOffErrorBox();
            this.control.nameFlag = true
        }
    },

    turnOffErrorBox() {
        this.nameErrorBox.string = '';
        this.nameErrorBox.active = false;
    },

    _checkSpecialChar(inputString) {
        var format = /^[a-zA-Z\s]*$/;
        if (!format.test(inputString)) {
            return true;
        } else {
            return false;
        }
    },
});
