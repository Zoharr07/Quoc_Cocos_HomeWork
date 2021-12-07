
cc.Class({
    extends: cc.Component,

    properties: {
        passwordErrorBox: cc.Label,
        inputPassBox: cc.EditBox,
        confirmPassBox: cc.EditBox,
        confirmFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.validatePassConfirm = this.validatePassConfirm.bind(this)
        this._turnOffErrorBox();
    },

    start() {

    },

    // update (dt) {},
    checkConfirmPass() {
        if (this.inputPassBox.string === this.confirmPassBox.string) {
            this._turnOffErrorBox();
            this.confirmFlag = true;
        } else {
            this.passwordErrorBox.string = 'Passwords confirm wrong, please check again!!!';
            this.passwordErrorBox.active = true;
            this.confirmFlag = false;
        }
        cc.log('confirm pass', this.confirmFlag)
    },

    _turnOffErrorBox() {
        this.passwordErrorBox.string = "";
        this.passwordErrorBox.active = false;
    },
    validatePassConfirm() {
        return this.confirmFlag;
    }
});
