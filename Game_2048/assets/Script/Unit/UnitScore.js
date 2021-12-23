
cc.Class({
    extends: cc.Component,
    properties: {
        playerNameLable: cc.Label,
        totalScoreLable: cc.Label,
        _namePlayer: '',
        _totalScore: 0,
    },

    onLoad() {

    },

    setScoreData(name, score) {
        this._namePlayer = name;
        this.playerNameLable.string = name;
        this._totalScore = score;
        this.totalScoreLable.string = score
    },
});
