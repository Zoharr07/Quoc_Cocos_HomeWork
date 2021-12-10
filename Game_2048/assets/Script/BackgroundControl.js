const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _row: 4,
        _col: 4,
        _distance: 200,
        unitBG: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.instanceBackgroundUnit();
    },

    // update (dt) {},
    instanceBackgroundUnit() {
        for (let i = 1; i <= this._row; i++) {
            let rowBoard = [];
            for (let j = 1; j <= this._col; j++) {
                let unit = cc.instantiate(this.unitBG);
                let unitPos = cc.v2(((j - (this._col + 1) / 2) * this._distance), ((i - (this._row + 1) / 2) * this._distance))
                unit.position = unitPos;
                rowBoard.push(unitPos);
                this.node.addChild(unit);
                Emiter.instance.emit('addPos', unitPos)
                //cc.log(unit)
            }
            let minX = (1 - (this._col + 1) / 2) * this._distance;
            let maxX = (this._col - (this._col + 1) / 2) * this._distance;
            let minY = (1 - (this._row + 1) / 2) * this._distance;
            let maxY = (this._row - (this._row + 1) / 2) * this._distance;
            Emiter.instance.emit('setMinMaxPosition', minX, maxX, minY, maxY);
        }

    }
});
