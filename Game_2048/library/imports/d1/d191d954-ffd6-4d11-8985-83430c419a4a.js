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

    onLoad: function onLoad() {
        this.node.setNameData = this._setNameData.bind(this);
    },
    _setScoreData: function _setScoreData(score) {
        this._totalScore = score;
        this.totalScoreLable.string = score;
    },
    _setNameData: function _setNameData(name) {
        this._namePlayer = name;
        this.playerNameLable.string = name;
    }
});

cc._RF.pop();