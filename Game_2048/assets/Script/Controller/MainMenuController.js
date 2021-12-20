const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        newGameBtn: cc.Button,
        startGameBtn: cc.Button,
        startGameBtnLabel: cc.Label,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node,
        menuNode: cc.Node,
    },

    onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);
    },

    _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(-2000, 0, this.menuNode, 1.0);
        this._move(-2000, 0, this.gamePlayNode, 1.0);
    },

    _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(2000, 0, this.menuNode, 1.0);
        this._move(2000, 0, this.gamePlayNode, 1.0);
    },

    _move(x, y, nodeObj, time) {
        cc.tween(nodeObj)
            .by(time, { position: cc.v2(x, y) }, { easing: 'quartOut' })
            .start();
    },

    _exitGame() {
        cc.game.end();
    },

    _startGameFunc() {
        Emiter.instance.emit('startGame');
        this.startGameBtnLabel.string = 'RePlay';
    },
});
