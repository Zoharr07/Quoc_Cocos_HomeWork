
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
        console.log('on bullet hit');
        if (other.tag == 4) {

            cc.log(other, self);
            cc.tween(this.node)
                .delay(0.1)
                .call(() => {
                    this.node.destroy();
                })
                .start()
        }
    },
});
