
var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        formMenu: cc.Node,
        wellcomePopup: cc.Node,
        userName: cc.Label,

        control: {
            type: cc.Node,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.control = this.getComponent(Controller);
    },

    start() {

    },

    onEnable() {
        if (this.control.userArg.length != 0) {
            this.userName.string = this.control.userArg[this.control.userArg.length - 1][2];
        } else this.userName.string = "";
        cc.log("ddd")
        cc.log(this.control.userArg[this.control.userArg.length - 1])
    },

    backSignUpBtn() {
        this.formMenu.active = true;
        this.wellcomePopup.active = false;
    },

    exitBtn() {
        this.wellcomePopup.active = false;
    }
    // update (dt) {},
});
