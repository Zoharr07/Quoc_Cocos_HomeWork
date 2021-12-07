
cc.Class({
    extends: cc.Component,

    properties: {
        inputUserNameBox: cc.EditBox,
        nameErrorBox: cc.Label,
        userNameFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.validateUserName = this.validateUserName.bind(this);
        this._turnOffErrorBox();
    },

    start() {
    },
    // update (dt) {},

    checkUserName() {
        if (this.inputUserNameBox.string === "") {
            this.nameErrorBox.active = true;
            this.nameErrorBox.string = "Username can't be null, please check again!!!";
            this.userNameFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputUserNameBox.string)) {
            this.nameErrorBox.string = 'Username must be a -z and 0 -9, please check again!!!';
            this.nameErrorBox.active = true;
            this.userNameFlag = false;
        } else {
            if (this._checkAccount(this.inputUserNameBox.string)) {
                this.nameErrorBox.string = 'Username Founded, please input another username!!!';
                this.nameErrorBox.active = true;
                this.userNameFlag = false;
                return
            }
            this._turnOffErrorBox();
            this.userNameFlag = true;
        }
        cc.log('account ', this.userNameFlag)
    },

    _turnOffErrorBox() {
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
        this.node.getUserArg().forEach(element => {
            if (account == element[2]) {
                isAccountAdded = true;
            }
        });
        return isAccountAdded;
    },

    validateUserName() {
        return this.userNameFlag;
    },
});
