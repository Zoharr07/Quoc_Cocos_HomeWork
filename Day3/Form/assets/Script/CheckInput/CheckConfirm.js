var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        passwordErrorBox: cc.Label,
        inputPassBox: cc.EditBox,
        confirmPassBox: cc.EditBox,
        control: {
            type: cc.Node,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.turnOffErrorBox();
        this.control = this.getComponent(Controller);
    },

    start() {

    },

    // update (dt) {},
    checkConfirmPass() {
        if (this.inputPassBox.string === this.confirmPassBox.string) {
            this.turnOffErrorBox();
            this.control.confirmFlag = true;
        } else {
            this.passwordErrorBox.string = 'Passwords confirm wrong, please check again!!!';
            this.passwordErrorBox.active = true;
            this.control.confirmFlag = false;
        }
    },

    turnOffErrorBox() {
        this.passwordErrorBox.string = "";
        this.passwordErrorBox.active = false;

    },
});
