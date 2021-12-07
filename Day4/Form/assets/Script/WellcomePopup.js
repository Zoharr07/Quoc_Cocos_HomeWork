
var Controller = require("FormController");

cc.Class({
    extends: cc.Component,

    properties: {
        formMenu: cc.Node,
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
        this.userName.string = "";
    },
    onEnable() {
        //let userNameStr = this.control.userArg[this.control.userArg.length - 1][2];
        // if (this.control.userArg.length != null) {
        //     this.userName.string = this.control.userArg[this.control.userArg.length - 1][2]
        // } else this.userName.string = ""
        this.userName.string = "";
        cc.log(userNameStr)
        cc.log("enable msg")
    },

    backSignUpBtn() {
        this.formMenu.active = true;
        this.node.active = false;
    },

    exitBtn() {
        this.node.active = false;
    }
    // update (dt) {},
});
