var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        inputPassBox: cc.EditBox,
        passErrorBox: cc.Label,
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

    checkPass() {
        if (this.inputPassBox.string === "") {
            this.passErrorBox.active = true;
            this.passErrorBox.string = "Passwords can't be null, please check again!!!";
            this.control.passFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputPassBox.string)) {
            this.passErrorBox.string = "Passwords can't using special char, please check again!!!";
            this.passErrorBox.active = true;
            this.control.passFlag = false;
        } else {
            this.turnOffErrorBox();
            this.control.passFlag = true;
        }
    },

    turnOffErrorBox() {
        this.passErrorBox.string = '';
        this.passErrorBox.active = false;
    },

    _checkSpecialChar(inputString) {
        var format = /^[~!@#$%&^*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        if (format.test(inputString)) {
            return true;
        } else {
            return false;
        }
    },
});
