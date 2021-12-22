"use strict";
cc._RF.push(module, '1df2cMwkNpNDaW6XcbddVwk', 'MainMenuController');
// Script/Controller/MainMenuController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        newGameBtn: cc.Button,
        startGameBtn: cc.Button,
        replaySprite: cc.Node,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node,
        menuNode: cc.Node,

        soundMusicBtn: cc.Button,
        soundMusicOffSprite: cc.Node,
        soundEffectBtn: cc.Button,
        soundEffectOffSprite: cc.Node,
        musicOn: true,
        soundOn: true
    },

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);
        this.exitBtn.node.on('click', this._exitGame, this);

        this.gamePlayNode.active = false;
        this.menuNode.active = true;
        this._backMenuFunc();
    },
    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(-1000, 0, this.menuNode, 1.0, false);
        this._move(0, 0, this.gamePlayNode, 1.0, true);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(0, 0, this.menuNode, 1.0, true);
        this._move(1000, 0, this.gamePlayNode, 1.0, false);
    },
    _move: function _move(x, y, nodeObj, time, isActive) {

        var indx = 0;
        if (isActive == true) indx = 255;
        var t = cc.tween;
        t(nodeObj).call(function () {
            if (isActive == true) nodeObj.active = isActive;
        }).parallel(t().to(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }), t().to(time / 5, { opacity: indx })).call(function () {
            if (isActive == false) nodeObj.active = isActive;
        }).start();
    },
    _exitGame: function _exitGame() {
        cc.game.end();
    },
    _startGameFunc: function _startGameFunc() {
        Emiter.instance.emit('startGame');
        this.replaySprite.active = true;
    }
});

cc._RF.pop();