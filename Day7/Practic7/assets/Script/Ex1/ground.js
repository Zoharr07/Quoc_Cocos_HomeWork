
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;
    },

    start() {

    },

    // update (dt) {},
    // onCollisionEnter: function (other, self) {
    //     console.log('on collision enter');
    // }
});
