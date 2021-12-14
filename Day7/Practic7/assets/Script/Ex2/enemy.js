
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
        console.log('on collision enter');
        cc.log(other, self);
        cc.tween(this.node)
            .delay(0.4)
            .call(() => {
                this.node.destroy();
            })
            .start()

    },
});
