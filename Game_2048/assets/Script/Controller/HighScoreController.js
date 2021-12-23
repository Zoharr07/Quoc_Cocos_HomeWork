const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        clearScoreDataBtn: cc.Button,
        scoreList: [],
    },

    onLoad() {
        Emiter.instance.addEvent('addScoreData', this._addScoreData.bind(this));
        this.clearScoreDataBtn.node.on('click', this._clearScoreData, this);
    },

    _clearScoreData() {
        this.scoreList.forEach(element => {
            element.destroy()
        });
        this.scoreList = [];
    },
    _addScoreData(unit) {
        cc.log('add score unit')
        this.scoreList.push(unit);
    },
});
