
cc.Class({
    extends: cc.Component,

    properties: {
        row: 4,
        col: 4,
        distance: 200,
        unitBG: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.instanceBackgroundUnit();
    },

    // update (dt) {},
    instanceBackgroundUnit() {
        for (let i = 1; i <= this.row; i++) {
            for (let j = 1; j <= this.col; j++) {
                let unit = cc.instantiate(this.unitBG);
                unit.position = cc.v2(((j - (this.col + 1) / 2) * this.distance), ((i - (this.row + 1) / 2) * this.distance))
                this.node.addChild(unit);
                cc.log(unit)
            }
        }
    }
});
