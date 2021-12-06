var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        inputEmailBox: cc.EditBox,
        mailErrorBox: cc.Label,
        control: {
            type: cc.Node,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.turnOffErrorBox();
        this.control = this.getComponent(Controller);
    },
    // update (dt) {},


    checkEmail() {
        if (this.inputEmailBox.string === "") {
            this.mailErrorBox.active = true;
            this.mailErrorBox.string = "Your Email can't be null, please check again!!!";
            this.control.emailFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputEmailBox.string)) {
            this.mailErrorBox.string = 'Email you entered wrong, please check again!!!';
            this.mailErrorBox.active = true;
            this.control.emailFlag = false;
        } else {
            this.turnOffErrorBox();
            this.control.emailFlag = true;
        }

    },

    turnOffErrorBox() {
        this.mailErrorBox.string = '';
        this.mailErrorBox.active = false;
    },

    _checkSpecialChar(inputString) {
        var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!format.test(inputString)) {
            return true;
        } else {
            return false;
        }
    },
});
