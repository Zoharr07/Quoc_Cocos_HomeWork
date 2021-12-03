
cc.Class({
    extends: cc.Component,

    properties: {
        frameAnim: 40,
        isLeft: false,
        isRight: false,
        isJump: false,

        leftBtn: cc.Button,
        rightBtn: cc.Button,
        jumpBtn: cc.Button,
        _counter: 0,
    },

    update(dt) {
        if (this.isLeft || this.isRight || this.isJump) {
            if (this._counter >= this.frameAnim) {
                this._resetFlag();
                this._resetBtn(true);
                return;
            }

            if (this.isLeft) {
                if (this.node.scaleX < 0) {
                    this.node.scaleX *= -1;
                }
                this.node.x += -3;
            }

            if (this.isRight) {
                if (this.node.scaleX > 0) {
                    this.node.scaleX *= -1;
                }
                this.node.x += 3;
            }

            if (this.isJump) {
                if (this._counter < (this.frameAnim / 2)) {
                    this.node.y += 1;
                } else {
                    this.node.y -= 1;
                }
                if (this._counter >= (this.frameAnim * 1 / 4) && this._counter < this.frameAnim) {
                    if (this.node.scaleX > 0) {
                        this.node.angle += 360 / (this.frameAnim * 3 / 4);
                    } else this.node.angle -= 360 / (this.frameAnim * 3 / 4);
                }
            }
            this._counter++;
        }
    },
    start() {
        this.resetChars();
    },

    goLeft() {
        this.isLeft = true;
        this._counter = 0;
        this._resetBtn(false);
    },

    goRight() {
        this.isRight = true;
        this._counter = 0;
        this._resetBtn(false);
    },

    jump() {
        this.isJump = true;
        this._counter = 0;
        this._resetBtn(false);
    },

    resetChar() {
        this.node.position = cc.v2(0, -135);
        this.node.angle = 0;
        this._resetFlag();
        this._resetBtn(true);
    },

    _resetFlag() {
        this.isLeft = false;
        this.isRight = false;
        this.isJump = false;
    },

    _resetBtn(isInteractable) {
        this.leftBtn.interactable = isInteractable;
        this.rightBtn.interactable = isInteractable;
        this.jumpBtn.interactable = isInteractable;
    }
});
