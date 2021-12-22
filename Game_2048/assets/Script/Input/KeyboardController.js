const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _canInputKeyboard: true,
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        Emiter.instance.addEvent('inputKeyboard', this._setInputKeyboard.bind(this));
        this._setInputKeyboard(false);
    },

    onKeyUp: function (event) {
        if (this._canInputKeyboard == false) return;
        switch (event.keyCode) {
            case cc.macro.KEY.up: Emiter.instance.emit('moveUp');
                break;
            case cc.macro.KEY.down: Emiter.instance.emit('moveDown');
                break;
            case cc.macro.KEY.left: Emiter.instance.emit('moveLeft');
                break;
            case cc.macro.KEY.right: Emiter.instance.emit('moveRight');
                break;
        }
    },

    _setInputKeyboard(status) {
        this._canInputKeyboard = status;
    },
});
