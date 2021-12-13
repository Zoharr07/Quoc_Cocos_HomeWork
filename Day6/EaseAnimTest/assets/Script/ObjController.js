const EASE = {
    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    QUARD_IN: 'easeQuadraticActionIn',
    QUARD_OUT: 'easeQuadraticActionOut',
    QUARD_INOUT: 'easeQuadraticActionInOut',

    CUBIC_IN: 'easeCubicActionIn',
    CUBIC_OUT: 'easeCubicActionOut',
    CUBIC_INOUT: 'easeCubicActionInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',

    SINE_IN: 'easeSineIn',
    SINE_OUT: 'easeSineOut',
    SINE_INOUT: 'easeSineInOut',
}

cc.Class({
    extends: cc.Component,

    properties: {
        object: cc.Node,
        timeTest: cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        this.node.on('easeInSine', () => { this._easeMove(EASE.SINE_IN); });
        this.node.on('easeOutSine', () => { this._easeMove('easeSineOut'); });
        this.node.on('easeInOutSine', () => { this._easeMove('easeSineInOut'); });

        this.node.on('easeInQuad', () => { this._easeMove('easeQuadraticActionIn'); });
        this.node.on('easeOutQuad', () => { this._easeMove('easeQuadraticActionOut'); });
        this.node.on('easeInOutQuad', () => { this._easeMove('easeQuadraticActionInOut'); });

        this.node.on('easeInCubic', () => { this._easeMove('easeCubicActionIn'); });
        this.node.on('easeOutCubic', () => { this._easeMove('easeCubicActionOut'); });
        this.node.on('click', () => { this.node.emit('easeInOutCubic'); });

        // this.node.on('click', () => { this.node.emit('easeInQuart'); });
        // this.node.on('click', () => { this.node.emit('easeOutQuart'); });
        // this.node.on('click', () => { this.node.emit('easeInOutQuartBtn'); });

        // this.node.on('click', () => { this.node.emit('easeInQuint'); });
        // this.node.on('click', () => { this.node.emit('easeOutQuintBtn'); });
        // this.node.on('click', () => { this.node.emit('easeInOutQuintBtn'); });

        // this.node.on('click', () => { this.node.emit('easeInExpo'); });
        // this.node.on('click', () => { this.node.emit('easeOutExpo'); });
        // this.node.on('click', () => { this.node.emit('easeInOutExpo'); });

        // this.node.on('click', () => { this.node.emit('easeInCirc'); });
        // this.node.on('click', () => { this.node.emit('easeOutCirc'); });
        // this.node.on('click', () => { this.node.emit('easeInOutCirc'); });

        // this.node.on('click', () => { this.node.emit('easeInBack'); });
        // this.node.on('click', () => { this.node.emit('easeOutBack'); });
        // this.node.on('click', () => { this.node.emit('easeInOutBack'); });

        // this.node.on('click', () => { this.node.emit('easeInElastic'); });
        // this.node.on('click', () => { this.node.emit('easeOutElastic'); });
        // this.node.on('click', () => { this.node.emit('easeInOutElastic'); });

        // this.node.on('click', () => { this.node.emit('easeInBounce'); });
        // this.node.on('click', () => { this.node.emit('easeOutBounce'); });
        // this.node.on('click', () => { this.node.emit('easeInOutBounce'); });
        //this.timeTest.string = 2;
    },

    start() {
        this._checkTimeTest();
        this._resetPos();
    },

    // update (dt) {},
    _checkTimeTest() {
        if (!this.timeTest.string) this.timeTest.string = 2;
    },

    _easeMove(easeType) {

        let action = cc.sequence(
            cc.callFunc(this._checkTimeTest(), this._resetPos()),
            cc.moveBy(this.timeTest.string, 800, 0),
        );
        action.easing(eval(`cc.${easeType}(this.timeTest.string, this.timeTest.string);`));
        this.object.runAction(action);
    },

    _resetPos() {
        this.object.position = cc.v2(-400, 0);
    },
});
