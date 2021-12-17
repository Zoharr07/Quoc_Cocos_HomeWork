const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        valueLable: cc.Label,
        unitValue: 0,
        moveValue: 200,
        _canMove: true,
        goTo: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.destroyNode = this._destroyNode.bind(this);
        this.node.moveUnit = this._moveUnit.bind(this);
        this.node.getUnitValue = this._getUnitValue.bind(this);
        this.node.setUnitValue = this._setUnitValue.bind(this);
    },

    start() {

    },

    update(dt) {

    },

    _destroyNode() {
        this.node.destroy();
        cc.log('remove node');
    },

    _moveUnit(vector2) {
        cc.tween(this.node)
            .to(0.15, { position: vector2 })
            .call(() => {
                this._canMove = true;
                cc.log(this.node.x, this.node.y);
            })
            .start();
    },

    _getUnitValue() {
        return this.unitValue;
    },
    _setUnitValue(num) {
        this.valueLable.string = num;
        this.unitValue = num;

    },
});
