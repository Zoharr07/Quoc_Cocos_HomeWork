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
        startGameBtnLabel: cc.Label,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node,
        menuNode: cc.Node
    },

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);

        //this.gamePlayNode.active = false;
        //this.menuNode.node.active = true;
    },
    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(-1000, 0, this.menuNode, 1.0, false);
        this._move(-1000, 0, this.gamePlayNode, 1.0, true);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(1000, 0, this.menuNode, 1.0, true);
        this._move(1000, 0, this.gamePlayNode, 1.0, false);
    },
    _move: function _move(x, y, nodeObj, time, isActive) {
        cc.tween(nodeObj).call(function () {
            //if (isActive == true) nodeObj.active = isActive;
        }).by(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }).call(function () {
            //if (isActive == false) nodeObj.active = isActive;
        }).start();
    },
    _exitGame: function _exitGame() {
        cc.game.end();
    },
    _startGameFunc: function _startGameFunc() {
        Emiter.instance.emit('startGame');
        this.startGameBtnLabel.string = 'RePlay';
    }
});

cc._RF.pop();