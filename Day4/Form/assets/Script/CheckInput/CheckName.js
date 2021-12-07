
cc.Class({
    extends: cc.Component,

    properties: {
        inputNameBox: cc.EditBox,
        nameErrorBox: cc.Label,
        nameFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.validateFullName = this.validateFullName.bind(this);
        this._turnOffErrorBox();
    },

    start() {

    },
    // update (dt) {},


    checkFullName() {
        if (this.inputNameBox.string === "") {
            this.nameErrorBox.active = true;
            this.nameErrorBox.string = "Yourname can't be null, please check again!!!";
            this.nameFlag = false;
            return
        } else { }
        if (this._checkSpecialChar(this.inputNameBox.string)) {
            this.nameErrorBox.string = 'You input special char, please check again!!!';
            this.nameErrorBox.active = true;
            this.nameFlag = false;
        } else {
            this._turnOffErrorBox();
            this.nameFlag = true
        }
        cc.log('fullname check', this.nameFlag)
    },

    _turnOffErrorBox() {
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

    validateFullName() {
        return this.nameFlag;
    },
});
