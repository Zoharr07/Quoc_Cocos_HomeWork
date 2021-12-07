
cc.Class({
    extends: cc.Component,

    properties: {
        inputEmailBox: cc.EditBox,
        mailErrorBox: cc.Label,
        emailFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.validateEmail = this.validateEmail.bind(this);
        this._turnOffErrorBox();
    },

    start() {
    },
    // update (dt) {},

    checkEmail() {
        if (this.inputEmailBox.string === "") {
            this.mailErrorBox.active = true;
            this.mailErrorBox.string = "Your Email can't be null, please check again!!!";
            this.emailFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputEmailBox.string)) {
            this.mailErrorBox.string = 'Email you entered wrong, please check again!!!';
            this.mailErrorBox.active = true;
            this.emailFlag = false;
        } else {
            this._turnOffErrorBox();
            this.emailFlag = true;
        }
        cc.log('email check', this.emailFlag)
    },

    _turnOffErrorBox() {
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

    validateEmail() {
        return this.emailFlag;
    },
});
