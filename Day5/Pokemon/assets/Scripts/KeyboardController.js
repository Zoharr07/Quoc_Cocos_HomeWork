const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        _canGetKey: true,
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        Emiter.instance.addEvent('inputstatus', this._setInputStatus.bind(this))
    },

    onKeyDown(event) {
        if (!this._canGetKey) return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                console.log('Press left key');
                Emiter.instance.emit('goleft');
                break;
            case cc.macro.KEY.right:
                console.log('Press right key');
                Emiter.instance.emit('goright');
                break;
            case cc.macro.KEY.space:
                console.log('Press space key');
                Emiter.instance.emit('jump');
                break;
            case cc.macro.KEY.escape:
                console.log('Press esc key');
                Emiter.instance.emit('reset');
                break;
        }
    },

    _setInputStatus(canGetKey) {
        this._canGetKey = canGetKey;
        cc.log(this._canGetKey)
    }
});
