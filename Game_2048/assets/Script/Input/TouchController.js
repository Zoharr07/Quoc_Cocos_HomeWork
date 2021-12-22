const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _starPos: null,
        _endPos: null,
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    },

    onTouchStart: function (event) {
        this._starPos = event.getLocation();
    },

    onTouchEnd: function (event) {
        this._endPos = event.getLocation();
        this._checkDirect();
    },

    _checkDirect() {
        let distance = 20;
        let moveX = this._endPos.x - this._starPos.x;
        let moveY = this._endPos.y - this._starPos.y;
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (moveX < distance && moveX > -distance) return;
            if (moveX > 0) Emiter.instance.emit('moveRight');
            else Emiter.instance.emit('moveLeft');
        } else {
            if (moveY < distance && moveY > -distance) return;
            if (moveY > 0) Emiter.instance.emit('moveUp');
            else Emiter.instance.emit('moveDown');
        }
    }
});
