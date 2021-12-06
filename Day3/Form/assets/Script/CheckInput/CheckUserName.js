
var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        inputUserNameBox: cc.EditBox,
        nameErrorBox: cc.Label,
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

    checkUserName() {
        if (this.inputUserNameBox.string === "") {
            this.nameErrorBox.active = true;
            this.nameErrorBox.string = "Username can't be null, please check again!!!";
            this.control.useNameFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputUserNameBox.string)) {
            this.nameErrorBox.string = 'Username must be a -z and 0 -9, please check again!!!';
            this.nameErrorBox.active = true;
            this.control.useNameFlag = false;
        } else {
            if (this._checkAccount(this.inputUserNameBox.string)) {
                this.nameErrorBox.string = 'Username Founded, please input another username!!!';
                this.nameErrorBox.active = true;
                this.control.useNameFlag = false;
                return
            }
            this.turnOffErrorBox();
            this.control.useNameFlag = true;
        }
    },

    turnOffErrorBox() {
        this.nameErrorBox.string = '';
        this.nameErrorBox.active = false;
    },

    _checkSpecialChar(inputString) {
        var format = /^[a-zA-Z0-9]*$/;
        if (!format.test(inputString)) {
            return true;
        } else {
            return false;
        }
    },

    _checkAccount(account) {
        let isAccountAdded = false;
        this.control.userArg.forEach(element => {
            if (account == element[2]) {
                isAccountAdded = true;
            }
        });
        return isAccountAdded;
    }
});
