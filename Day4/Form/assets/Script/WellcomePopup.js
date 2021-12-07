
cc.Class({
    extends: cc.Component,

    properties: {
        formMenu: cc.Node,
        userLbl: cc.Label,
        mainNode: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.active = false;
    },

    start() {

    },
    onEnable() {
        let userArg = this.mainNode.getUserArg();
        // if (userArg.length != null) {
        //     this.userName.string = this.control.userArg[this.control.userArg.length - 1][2]
        // } else this.userName.string = ""
        this.userLbl.string = userArg[userArg.length - 1][2].toString();

        cc.log(this.userLbl.string)
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
