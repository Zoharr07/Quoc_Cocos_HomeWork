"use strict";
cc._RF.push(module, '2b743FVQxpPaKkFkCLbKs+U', 'HighScoreController');
// Script/Controller/HighScoreController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        clearScoreDataBtn: cc.Button,
        scoreList: []
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('addScoreData', this._addScoreData.bind(this));
        this.clearScoreDataBtn.node.on('click', this._clearScoreData, this);
    },
    _clearScoreData: function _clearScoreData() {
        this.scoreList.forEach(function (element) {
            element.destroy();
        });
        this.scoreList = [];
    },
    _addScoreData: function _addScoreData(unit) {
        cc.log('add score unit');
        this.scoreList.push(unit);
    }
});

cc._RF.pop();