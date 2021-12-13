const Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        char: cc.Node,
        spAnim: sp.Skeleton,
        footStepAudio: cc.AudioSource,

        _usingAction: '',
    },

    onLoad() {
        Emiter.instance = new Emiter();
        Emiter.instance.addEvent("changeAction", this._changeActionType.bind(this));
        Emiter.instance.addEvent("goleft", this._goLeft.bind(this));
        Emiter.instance.addEvent("goright", this._goRight.bind(this));
        Emiter.instance.addEvent("jump", this._jumpChar.bind(this));
        Emiter.instance.addEvent("reset", this._resetChar.bind(this));
        this.spAnim.setEventListener((entry, event) => {
            const { data } = event;
            cc.log(data.name);
            if (data.name == 'footstep') this.footStepAudio.play()

        });
        this.spAnim.setMix('jump', 'idle', 0.2);
    },


    _goLeft() {
        if (this.char.scaleX == 1) this.char.scaleX = -1;

        if (this._usingAction == 'CCAction') {
            let goLeft = cc.moveBy(3, -120, 0);
            goLeft.easing(cc.easeQuarticActionOut(2.0));
            this.char.runAction(goLeft);
        } else if (this._usingAction == 'TweenAction') {
            cc.tween(this.char)
                .by(3, { position: cc.v2(-120, 0) }, { easing: 'quartOut' })
                .start()
        }

        this.spAnim.setAnimation(0, 'walk', false);
        this.spAnim.addAnimation(0, 'idle', true);
    },

    _goRight() {
        if (this.char.scaleX == -1) this.char.scaleX = 1;

        if (this._usingAction == 'CCAction') {
            let goRight = cc.moveBy(3, 120, 0);
            goRight.easing(cc.easeQuarticActionOut(2.5));
            this.char.runAction(goRight);
        } else if (this._usingAction == 'TweenAction') {
            cc.tween(this.char)
                .by(3, { position: cc.v2(120, 0) }, { easing: 'quartOut' })
                .start()
        }

        this.spAnim.setAnimation(0, 'walk', false);
        this.spAnim.addAnimation(0, 'idle', true);
    },

    _jumpChar() {
        let jump = cc.jumpBy(1, 50 * this.char.scaleX, 0, 10, 1);
        jump.easing(cc.easeInOut(1));
        this.char.runAction(jump);

        this.spAnim.setAnimation(0, 'jump', false);
        this.spAnim.addAnimation(0, 'idle', true);
    },

    _resetChar() {
        this.char.position = cc.v2(0, -200);
        Emiter.instance.emit('setbutton', true);
    },

    _changeActionType(action) {
        this._usingAction = action;
        cc.log(action);
    },
});
