const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad() {
        Emiter.instance = new Emiter();
    },

});
