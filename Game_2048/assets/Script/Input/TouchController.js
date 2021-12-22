const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _canInputTouch: true,
        _starPos: null,
        _distance: 20,
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);

        Emiter.instance.addEvent('inputTouch', this._setInputTouch.bind(this));
        this._setInputTouch(false);
    },

    onTouchStart: function (event) {
        this._starPos = event.getLocation();
    },

    onTouchEnd: function (event) {
        if (this._canInputTouch == false) return;
        let moveX = event.getLocationX() - this._starPos.x;
        let moveY = event.getLocationY() - this._starPos.y;
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (moveX < this._distance && moveX > -this._distance) return;
            if (moveX > 0) {
                Emiter.instance.emit('moveRight');
                return;
            }
            Emiter.instance.emit('moveLeft');
        } else {
            if (moveY < this._distance && moveY > -this._distance) return;
            if (moveY > 0) {
                Emiter.instance.emit('moveUp');
                return;
            }
            Emiter.instance.emit('moveDown');
        }
    },

    _checkDirect() {

    },

    _setInputTouch(status) {
        this._canInputTouch = status;
    },
});
