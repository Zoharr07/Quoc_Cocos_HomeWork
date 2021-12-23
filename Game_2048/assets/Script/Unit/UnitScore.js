
cc.Class({
    extends: cc.Component,
    properties: {
        playerNameLable: cc.Label,
        totalScoreLable: cc.Label,
        _namePlayer: '',
        _totalScore: 0,
    },

    onLoad() {
        this.node.setNameData = this._setNameData.bind(this);
    },

    _setScoreData(score) {
        this._totalScore = score;
        this.totalScoreLable.string = score
    },

    _setNameData(name) {
        this._namePlayer = name;
        this.playerNameLable.string = name;
    },

});
