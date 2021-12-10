const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        frameAnim: 40,
        char: cc.Node,
        _counter: 0,
    },

    onLoad() {
        Emiter.instance = new Emiter();
        Emiter.instance.addEvent("goleft", this._goLeft.bind(this));
        Emiter.instance.addEvent("goright", this._goRight.bind(this));
        Emiter.instance.addEvent("jump", this._jumpChar.bind(this));
        Emiter.instance.addEvent("reset", this._resetChar.bind(this));
    },

    update(dt) {

    },

    start() {
        //this._resetChar();
    },

    _goLeft() {
        let goLeft = cc.moveBy(0.9, -100, 0);
        goLeft.easing(cc.easeQuarticActionOut(0.7));
        this.char.runAction(goLeft);
    },

    _goRight() {
        let goRight = cc.moveBy(0.9, 100, 0);
        goRight.easing(cc.easeQuarticActionOut(0.7));
        this.char.runAction(goRight);
    },

    _jumpChar() {
        let jump = cc.jumpBy(0.9, 0, 0, 50, 1);
        jump.easing(cc.easeInOut(0.9));
        this.char.runAction(jump);
    },

    _resetChar() {
        this.char.position = cc.v2(480, 185);
        this.char.angle = 0;
        this._resetFlag();
        Emiter.instance.emit('setbutton', true);
    }


});
