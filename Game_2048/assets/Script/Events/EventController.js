const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emiter.instance = new Emiter();
    },

    start() {

    },

    // update (dt) {},
});
