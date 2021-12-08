
cc.Class({
    extends: cc.Component,

    properties: {
        mainForm: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.active = false;
    },

    start() {

    },

    // update (dt) {},

    exitBtn() {
        this.node.active = false;
    },

    backSignupBtn() {
        this.node.active = false;
        this.mainForm.active = true;
    },
});
