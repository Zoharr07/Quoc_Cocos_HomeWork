"use strict";
cc._RF.push(module, '2b743FVQxpPaKkFkCLbKs+U', 'HighScoreController');
// Script/Controller/HighScoreController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        clearScoreDataBtn: cc.Button,
        scoreUnit: cc.Prefab,
        leaderBoardScrollView: cc.ScrollView,
        _scoreList: []
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('addScoreData', this._addScoreData.bind(this));
        this.clearScoreDataBtn.node.on('click', this._clearScoreData, this);
        // this._loadScoreSave();
    },
    _clearScoreData: function _clearScoreData() {
        this._scoreList.forEach(function (element) {
            if (element == null) return;
            element.destroy();
        });
        this._scoreList = [];
        // this._saveScoreList();
    },
    _addScoreData: function _addScoreData(name, score) {
        this._instanceScoreUnit(name, score);
        // this._saveScoreList();
    },
    _instanceScoreUnit: function _instanceScoreUnit(name, score) {
        var unit = cc.instantiate(this.scoreUnit);
        this.leaderBoardScrollView.content.addChild(unit);
        unit.getComponent('UnitScore').setScoreData(name, score);
        this._scoreList.push(unit);
    }
}

// _saveScoreList() {
//     localStorage["scoreList"] = JSON.stringify(this._scoreList);
// },

// _loadScoreSave() {
//     if (JSON.parse(localStorage["scoreList"]) != null) {
//         this._scoreList = JSON.parse(localStorage["scoreList"]);
//     } else this._scoreList = [];
//     if (this._scoreList == []) return;
//     this._scoreList.forEach(element => {
//         if (element instanceof this.scoreUnit) this.leaderBoardScrollView.content.addChild(element);
//     });
// },
);

cc._RF.pop();