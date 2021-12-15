
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
    onCollisionEnter: function (other, self) {

    },

    onCollisionStay: function (other, self) {
        if (other.tag == 0) {
            if (other.node.y < -168) {
                other.node.y = -168;
            }

        }
    },
});
