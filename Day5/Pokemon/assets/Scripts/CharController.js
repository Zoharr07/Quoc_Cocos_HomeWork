const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        frameAnim: 40,
        isLeft: false,
        isRight: false,
        isJump: false,
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
        if (this.isLeft || this.isRight || this.isJump) {
            Emiter.instance.emit('setbutton', false);
            Emiter.instance.emit('inputstatus', false);
            if (this._counter >= this.frameAnim) {
                this._resetFlag();
                Emiter.instance.emit('setbutton', true);
                Emiter.instance.emit('inputstatus', true);
                this._counter = 0;
                return;
            }
            if (this.isLeft) this._moveLeft();
            if (this.isRight) this._moveRight();
            if (this.isJump) this._jump();
            this._counter++;
        }
    },

    start() {
        this._resetChar();
    },

    _goLeft() {
        this.isLeft = true;
    },

    _goRight() {
        this.isRight = true;
    },

    _jumpChar() {
        this.isJump = true;
    },

    _resetChar() {
        this.char.position = cc.v2(480, 185);
        this.char.angle = 0;
        this._resetFlag();
        Emiter.instance.emit('setbutton', true);
        this._counter = 0;
    },

    _resetFlag() {
        this.isLeft = false;
        this.isRight = false;
        this.isJump = false;
    },

    _moveLeft() {
        if (this.char.scaleX < 0) {
            this.char.scaleX *= -1;
        }
        this.char.x += -3;
    },
    _moveRight() {
        if (this.char.scaleX > 0) {
            this.char.scaleX *= -1;
        }
        this.char.x += 3;
    },
    _jump() {
        if (this._counter < (this.frameAnim / 2)) {
            this.char.y += 1;
        } else {
            this.char.y -= 1;
        }
        if (this._counter >= (this.frameAnim * 1 / 4) && this._counter < this.frameAnim) {
            if (this.char.scaleX > 0) {
                this.char.angle += 360 / (this.frameAnim * 3 / 4);
            } else this.char.angle -= 360 / (this.frameAnim * 3 / 4);
        }
    }
});
