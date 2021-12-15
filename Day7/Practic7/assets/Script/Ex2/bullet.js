
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {

    },

    // update (dt) {},
    onCollisionEnter: function (other, self) {
        console.log('on enemy hit');
        cc.log(other, self);
        if (other.tag == 3 || other.tag == 2) {
            this.node.destroy();
        }


    },
});
