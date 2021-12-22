const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {

    },

    onLoad() {
        Emiter.instance.addEvent('canInput', this._canInput.bind(this));
    },

    _canInput(status) {
        Emiter.instance.emit('inputKeyboard', status);
        Emiter.instance.emit('inputTouch', status);
    }
});
