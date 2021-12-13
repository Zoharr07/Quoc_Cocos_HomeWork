const EASE = require('Ease');

cc.Class({
    extends: cc.Component,

    properties: {
        object: cc.Node,
        timeTest: cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        this.node.on(EASE.SINE_IN, () => { this._easeMove(EASE.SINE_IN); });
        this.node.on(EASE.SINE_OUT, () => { this._easeMove(EASE.SINE_OUT); });
        this.node.on(EASE.SINE_INOUT, () => { this._easeMove(EASE.SINE_INOUT); });

        this.node.on(EASE.QUARD_IN, () => { this._easeMove(EASE.QUARD_IN); });
        this.node.on(EASE.QUARD_OUT, () => { this._easeMove(EASE.QUARD_OUT); });
        this.node.on(EASE.QUARD_INOUT, () => { this._easeMove(EASE.QUARD_INOUT); });

        this.node.on(EASE.CUBIC_IN, () => { this._easeMove(EASE.CUBIC_IN); });
        this.node.on(EASE.CUBIC_OUT, () => { this._easeMove(EASE.CUBIC_OUT); });
        this.node.on(EASE.CUBIC_INOUT, () => { this._easeMove(EASE.CUBIC_INOUT); });

        this.node.on(EASE.QUART_IN, () => { this._easeMove(EASE.QUART_IN); });
        this.node.on(EASE.QUART_OUT, () => { this._easeMove(EASE.QUART_OUT); });
        this.node.on(EASE.QUARD_INOUT, () => { this._easeMove(EASE.QUARD_INOUT); });

        this.node.on(EASE.QUINT_IN, () => { this._easeMove(EASE.QUINT_IN); });
        this.node.on(EASE.QUINT_OUT, () => { this._easeMove(EASE.QUINT_OUT); });
        this.node.on(EASE.QUINT_INOUT, () => { this._easeMove(EASE.QUINT_INOUT); });

        this.node.on(EASE.EXPO_IN, () => { this._easeMove(EASE.EXPO_IN); });
        this.node.on(EASE.EXPO_OUT, () => { this._easeMove(EASE.EXPO_OUT); });
        this.node.on(EASE.EXPO_INOUT, () => { this._easeMove(EASE.EXPO_INOUT); });

        this.node.on(EASE.CIRCL_IN, () => { this._easeMove(EASE.CIRCL_IN); });
        this.node.on(EASE.CIRCL_OUT, () => { this._easeMove(EASE.CIRCL_OUT); });
        this.node.on(EASE.CIRCL_INOUT, () => { this._easeMove(EASE.CIRCL_INOUT); });

        this.node.on(EASE.BACK_IN, () => { this._easeMove(EASE.BACK_IN); });
        this.node.on(EASE.BACK_OUT, () => { this._easeMove(EASE.BACK_OUT); });
        this.node.on(EASE.BACK_INOUT, () => { this._easeMove(EASE.BACK_INOUT); });

        this.node.on(EASE.ELASTIC_IN, () => { this._easeMove(EASE.ELASTIC_IN); });
        this.node.on(EASE.ELASTIC_OUT, () => { this._easeMove(EASE.ELASTIC_OUT); });
        this.node.on(EASE.ELASTIC_INOUT, () => { this._easeMove(EASE.ELASTIC_INOUT); });

        this.node.on(EASE.BOUNCE_IN, () => { this._easeMove(EASE.BOUNCE_IN); });
        this.node.on(EASE.BOUNCE_OUT, () => { this._easeMove(EASE.BOUNCE_OUT); });
        this.node.on(EASE.BOUNCE_INOUT, () => { this._easeMove(EASE.BOUNCE_INOUT); });
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
        action.easing(eval(`cc.${easeType}(this.timeTest.string);`));
        this.object.runAction(action);
    },

    _resetPos() {
        this.object.position = cc.v2(-400, 0);
    },
});
