
cc.Class({
    extends: cc.Component,

    properties: {
        inputPassBox: cc.EditBox,
        passErrorBox: cc.Label,
        passFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.validatePass = this.validatePass.bind(this);
        this._turnOffErrorBox();
    },

    start() {

    },
    // update (dt) {},

    checkPass() {
        if (this.inputPassBox.string === "") {
            this.passErrorBox.active = true;
            this.passErrorBox.string = "Passwords can't be null, please check again!!!";
            this.passFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputPassBox.string)) {
            this.passErrorBox.string = "Passwords can't using special char, please check again!!!";
            this.passErrorBox.active = true;
            this.passFlag = false;
        } else {
            this._turnOffErrorBox();
            this.passFlag = true;
        }
        cc.log('pass ', this.passFlag)
    },

    _turnOffErrorBox() {
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

    validatePass() {
        return this.passFlag;
    },
});
