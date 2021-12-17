const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        valueLable: cc.Label,
        value: Number,
        moveValue: 200,
        _canMove: true,
        goTo: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.destroyNode = this._destroyNode.bind(this);
        this.node.moveUnit = this._moveUnit.bind(this);
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
            .to(0.2, { position: vector2 })
            .call(() => {
                this._canMove = true;
                cc.log(this.node.x, this.node.y);
            })
            .start();
    },
});
