
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('say-hello', function (msg) {
            console.log(msg);
        });
    },

    start() {

    },

    // update (dt) {},
});
