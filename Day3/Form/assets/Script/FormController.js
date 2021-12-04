
cc.Class({
    extends: cc.Component,

    properties: {
        mainForm: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.mainForm.active = false;
    },

    start() {


    },

    // update (dt) {},

    loadFormBtn() {
        this.mainForm.active = true;
    },
    backBtn() {
        this.mainForm.active = false;
    }
});
