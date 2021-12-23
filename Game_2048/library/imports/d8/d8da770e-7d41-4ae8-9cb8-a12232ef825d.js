"use strict";
cc._RF.push(module, 'd8da7cOfUFK6Jy4oSIy74Jd', 'LosePopupController');
// Script/Controller/LosePopupController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLable: cc.Label,
        playerNameLable: cc.Label,
        backGameplayBtn: cc.Button,
        scoreUnit: cc.Prefab,
        leaderBoardScrollView: cc.ScrollView,
        _onPopup: false,
        _playerName: '',
        _score: 0
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('loseGame', this._turnOnPopup.bind(this));
        Emiter.instance.addEvent('turnOffPopup', this._turnOffPopup.bind(this));
        Emiter.instance.addEvent('setPlayerName', this._setPlayerName.bind(this));
        this.backGameplayBtn.node.on('click', this._newGameBtn, this);
    },
    _turnOnPopup: function _turnOnPopup(score) {
        if (this._onPopup) return;
        this._onPopup = true;
        Emiter.instance.emit('canInput', false);
        this.scoreLable.string = score;
        this._score = score;
        this._move(0, 0, this.node, 0.6, true);
        this._addPlayerScoreUnit();
    },
    _turnOffPopup: function _turnOffPopup() {
        this._move(0, 1600, this.node, 0.6, false);
        this._onPopup = false;
    },
    _newGameBtn: function _newGameBtn() {
        this._turnOffPopup();
        Emiter.instance.emit('startGame');
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
    },
    _addPlayerScoreUnit: function _addPlayerScoreUnit() {
        var unitScore = cc.instantiate(this.scoreUnit);
        cc.log(this._playerName, this._score);
        // unitScore.setNameData(this._playerName);
        //cc.log(unitScore);
        unitScore.getChildByName('PlayerName').getComponent(cc.Label).string = this._playerName;
        unitScore.getChildByName('Total Score').getComponent(cc.Label).string = this._score;
        this.leaderBoardScrollView.content.addChild(unitScore);
        Emiter.instance.emit('addScoreData', unitScore);
    }
});

cc._RF.pop();