"use strict";
cc._RF.push(module, 'c0f455VKeRN6JterpJzXXl3', 'WinPopupController');
// Script/Controller/WinPopupController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        continuePlayBtn: cc.Button,
        backGameplayBtn: cc.Button,
        playerNameLable: cc.Label,
        _onPopup: false,
        _playerName: '',
        _score: 0
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('winGame', this._turnOnPopup.bind(this));
        Emiter.instance.addEvent('turnOffPopup', this._turnOffPopup.bind(this));
        Emiter.instance.addEvent('setPlayerName', this._setPlayerName.bind(this));
        this.continuePlayBtn.node.on('click', this._continuePlayFunc, this);
        this.backGameplayBtn.node.on('click', this._newGameBtn, this);
    },
    _turnOnPopup: function _turnOnPopup(score) {
        if (this._onPopup) return;
        this._onPopup = true;
        this._score = score;
        Emiter.instance.emit('canInput', false);
        Emiter.instance.emit('playSoundWin');
        this._move(0, 0, this.node, 0.6, true);
    },
    _turnOffPopup: function _turnOffPopup() {
        this._move(0, 1600, this.node, 0.6, false);
        this._onPopup = false;
    },
    _newGameBtn: function _newGameBtn() {
        this._turnOffPopup();
        Emiter.instance.emit('startGame');
        Emiter.instance.emit('addScoreData', this._playerName, this._score);
    },
    _continuePlayFunc: function _continuePlayFunc() {
        this._turnOffPopup();
        Emiter.instance.emit('continuePlayOverPoint');
        Emiter.instance.emit('canInput', true);
    },
    _move: function _move(x, y, nodeObj, time, isActive) {

        var indx = 0;
        if (isActive == true) indx = 255;
        var t = cc.tween;
        t(nodeObj).parallel(t().to(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }), t().to(time / 5, { opacity: indx })).start();
    },
    _setPlayerName: function _setPlayerName(name) {
        this._playerName = name;
        this.playerNameLable.string = name;
    }
});

cc._RF.pop();