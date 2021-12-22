const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        continuePlayBtn: cc.Button,
        backGameplayBtn: cc.Button,
        _onPopup: false,
    },

    onLoad() {
        Emiter.instance.addEvent('winGame', this._turnOnPopup.bind(this));
        Emiter.instance.addEvent('turnOffPopup', this._turnOffPopup.bind(this));
        this.continuePlayBtn.node.on('click', this._continuePlayFunc, this);
        this.backGameplayBtn.node.on('click', this._newGameBtn, this);
    },

    _turnOnPopup(score) {
        if (this._onPopup) return;
        this._onPopup = true;
        Emiter.instance.emit('canInput', false);
        this._move(0, 0, this.node, 0.6, true);
    },

    _turnOffPopup() {
        this._move(0, 1600, this.node, 0.6, false);
        this._onPopup = false;
    },

    _newGameBtn() {
        this._turnOffPopup();
        Emiter.instance.emit('startGame');
    },

    _continuePlayFunc() {
        this._turnOffPopup();
        Emiter.instance.emit('continuePlayOverPoint');
        Emiter.instance.emit('canInput', true);
    },

    _move(x, y, nodeObj, time, isActive) {

        let indx = 0;
        if (isActive == true) indx = 255;
        let t = cc.tween;
        t(nodeObj)
            .parallel(
                t().to(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }),
                t().to(time / 5, { opacity: indx }),
            )
            .start();
    },
});
