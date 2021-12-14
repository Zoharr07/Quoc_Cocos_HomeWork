"use strict";
cc._RF.push(module, '1df2cMwkNpNDaW6XcbddVwk', 'MainMenuController');
// Script/Controller/MainMenuController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        newGameBtn: cc.Button,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);
    },
    start: function start() {},


    // update (dt) {},

    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(-1500, 0, this.node, 1.0, false);
        this._move(-1500, 0, this.gamePlayNode, 1.0, true);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(1500, 0, this.node, 1.0, false);
        this._move(1500, 0, this.gamePlayNode, 1.0, true);
    },
    _move: function _move(x, y, nodeObj, time, isView) {
        cc.tween(nodeObj).by(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }).start();
    },
    _exitGame: function _exitGame() {
        cc.game.end();
    }
});

cc._RF.pop();