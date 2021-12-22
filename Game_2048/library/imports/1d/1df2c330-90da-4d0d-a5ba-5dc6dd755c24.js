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
        playerNameInput: cc.EditBox,

        soundMusicBtn: cc.Button,
        soundMusicOffSprite: cc.Node,
        _musicOn: true,

        soundEffectBtn: cc.Button,
        soundEffectOffSprite: cc.Node,

        _soundOn: true
    },

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);

        this.soundMusicBtn.node.on('click', this._setSound, this);
        this.soundEffectBtn.node.on('click', this._setEffectSound, this);

        this._initStart();
    },
    _initStart: function _initStart() {
        this.gamePlayNode.active = false;
        this.menuNode.active = true;
        this._backMenuFunc();
    },
    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('canInput', true);
        Emiter.instance.emit('setPlayerName', this.playerNameInput.string);
        this._move(-1000, 0, this.menuNode, 1.0, false);
        this._move(0, 0, this.gamePlayNode, 1.0, true);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('turnOffPopup');
        Emiter.instance.emit('canInput', false);
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
        Emiter.instance.emit('turnOffPopup');
        Emiter.instance.emit('canInput', true);
        this.replaySprite.active = true;
    },
    _setSound: function _setSound() {
        if (this._musicOn) {
            this._musicOn = false;
            this.soundMusicOffSprite.active = true;
            Emiter.instance.emit('turnMusic', false);
            return;
        }
        this._musicOn = true;
        this.soundMusicOffSprite.active = false;
        Emiter.instance.emit('turnMusic', true);
    },
    _setEffectSound: function _setEffectSound() {
        if (this._musicOn) {
            this._musicOn = false;
            this.soundEffectOffSprite.active = true;
            Emiter.instance.emit('turnEffectSound', false);
            return;
        }
        this._musicOn = true;
        this.soundEffectOffSprite.active = false;
        Emiter.instance.emit('turnEffectSound', true);
    }
});

cc._RF.pop();