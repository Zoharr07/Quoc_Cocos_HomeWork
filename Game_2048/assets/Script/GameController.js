const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _boardPosition: [],
        _maxX: 0,
        _minX: 0,
        _maxY: 0,
        _minY: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emiter.instance.addEvent('addPos', this._addPosition.bind(this));
        Emiter.instance.addEvent('setMinMaxPosition', this._setMinMaxPosition.bind(this));
    },

    start() {

    },

    // update (dt) {},
    _addPosition(vector) {
        this._boardPosition.push(vector);
        cc.warn(this._boardPosition);
    },
    _setMinMaxPosition(minX, maxX, minY, maxY) {
        this._maxX = maxX;
        this._minX = minX;
        this._maxY = maxY;
        this._minY = minY;
        cc.log(this._minX, this._maxX, this._minY, this._maxY)
    },
});
