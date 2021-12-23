"use strict";
cc._RF.push(module, 'd191dlU/9ZNEYmFg0MMQZpK', 'UnitScore');
// Script/Unit/UnitScore.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        playerNameLable: cc.Label,
        totalScoreLable: cc.Label,
        _namePlayer: '',
        _totalScore: 0
    },

    onLoad: function onLoad() {},
    setScoreData: function setScoreData(name, score) {
        this._namePlayer = name;
        this.playerNameLable.string = name;
        this._totalScore = score;
        this.totalScoreLable.string = score;
    }
});

cc._RF.pop();