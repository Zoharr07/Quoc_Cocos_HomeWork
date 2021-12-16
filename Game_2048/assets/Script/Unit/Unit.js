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
        this.goTo = this._goTo.bind(this);
        Emiter.instance.addEvent('moveunit', this.goTo);
        this.node.destroyNode = this._destroyNode.bind(this);

        this.node.moveUp = this._moveUp.bind(this);
    },

    start() {

    },

    update(dt) {

    },
    _goTo(direct) {
        // while () { 

        // }
        if ((this.node.x <= -300 && direct == 'left') || (this.node.x >= 300 && direct == 'right') ||
            (this.node.y <= -300 && direct == 'down') || (this.node.y >= 300 && direct == 'up')) {
            cc.log("can't move!!!", this.node.x, this.node.y, direct);
            return;
        }
        if (this._canMove == false) return;
        this._canMove = false;
        cc.log('unit move ', direct);
        if (direct == 'left') {
            this._movePosition(-this.moveValue, 0);
        }
        if (direct == 'right') {
            this._movePosition(this.moveValue, 0);
        }
        // if (direct == 'up') {
        //     this._movePosition(0, this.moveValue);
        // } 
        if (direct == 'down') {
            this._movePosition(0, -this.moveValue);
        }

    },

    _movePosition(x, y) {
        cc.tween(this.node)
            .by(0.15, { position: cc.v2(x, y) })
            .call(() => {
                this._canMove = true;
                cc.log(this.node.x, this.node.y);
            })
            .start();
    },
    _destroyNode() {
        Emiter.instance.removeEvent('moveunit', this.goTo);
        this.node.destroy();
        cc.log('remove node');
    },

    _moveUp() {
        this._movePosition(0, this.moveValue);
    },
});
