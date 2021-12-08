
cc.Class({
    extends: cc.Component,

    properties: {
        accountPopup: cc.Node,
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
    }
});
