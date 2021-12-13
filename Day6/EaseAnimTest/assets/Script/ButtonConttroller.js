const EASE = require('Ease');
cc.Class({
    extends: cc.Component,

    properties: {
        easeInShineBtn: cc.Button,
        easeOutShineBtn: cc.Button,
        easeInOutShineBtn: cc.Button,

        easeInQuadBtn: cc.Button,
        easeOutQuadBtn: cc.Button,
        easeInOutQuadBtn: cc.Button,

        easeInCubicBtn: cc.Button,
        easeOutCubicBtn: cc.Button,
        easeInOutCubicBtn: cc.Button,

        easeInQuartBtn: cc.Button,
        easeOutQuartBtn: cc.Button,
        easeInOutQuartBtn: cc.Button,

        easeInQuintBtn: cc.Button,
        easeOutQuintBtn: cc.Button,
        easeInOutQuintBtn: cc.Button,

        easeInExpoBtn: cc.Button,
        easeOutExpoBtn: cc.Button,
        easeInOutExpoBtn: cc.Button,

        easeInCircBtn: cc.Button,
        easeOutCircBtn: cc.Button,
        easeInOutCircBtn: cc.Button,

        easeInBackBtn: cc.Button,
        easeOutBackBtn: cc.Button,
        easeInOutBackBtn: cc.Button,

        easeInElasticBtn: cc.Button,
        easeOutElasticBtn: cc.Button,
        easeInOutElasticBtn: cc.Button,

        easeInBounceBtn: cc.Button,
        easeOutBounceBtn: cc.Button,
        easeInOutBounceBtn: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.easeInShineBtn.node.on('click', () => { this.node.emit(EASE.SINE_IN); });
        this.easeOutShineBtn.node.on('click', () => { this.node.emit(EASE.SINE_OUT); });
        this.easeInOutShineBtn.node.on('click', () => { this.node.emit(EASE.SINE_INOUT); });

        this.easeInQuadBtn.node.on('click', () => { this.node.emit(EASE.QUARD_IN); });
        this.easeOutQuadBtn.node.on('click', () => { this.node.emit(EASE.QUARD_OUT); });
        this.easeInOutQuadBtn.node.on('click', () => { this.node.emit(EASE.QUARD_INOUT); });

        this.easeInCubicBtn.node.on('click', () => { this.node.emit(EASE.CUBIC_IN); });
        this.easeOutCubicBtn.node.on('click', () => { this.node.emit(EASE.CUBIC_OUT); });
        this.easeInOutCubicBtn.node.on('click', () => { this.node.emit(EASE.CUBIC_INOUT); });

        this.easeInQuartBtn.node.on('click', () => { this.node.emit(EASE.QUART_IN); });
        this.easeOutQuartBtn.node.on('click', () => { this.node.emit(EASE.QUART_OUT); });
        this.easeInOutQuartBtn.node.on('click', () => { this.node.emit(EASE.QUARD_INOUT); });

        this.easeInQuintBtn.node.on('click', () => { this.node.emit(EASE.QUINT_IN); });
        this.easeOutQuintBtn.node.on('click', () => { this.node.emit(EASE.QUINT_OUT); });
        this.easeInOutQuintBtn.node.on('click', () => { this.node.emit(EASE.QUINT_INOUT); });

        this.easeInExpoBtn.node.on('click', () => { this.node.emit(EASE.EXPO_IN); });
        this.easeOutExpoBtn.node.on('click', () => { this.node.emit(EASE.EXPO_OUT); });
        this.easeInOutExpoBtn.node.on('click', () => { this.node.emit(EASE.EXPO_INOUT); });

        this.easeInCircBtn.node.on('click', () => { this.node.emit(EASE.CIRCL_IN); });
        this.easeOutCircBtn.node.on('click', () => { this.node.emit(EASE.CIRCL_OUT); });
        this.easeInOutCircBtn.node.on('click', () => { this.node.emit(EASE.CIRCL_INOUT); });

        this.easeInBackBtn.node.on('click', () => { this.node.emit(EASE.BACK_IN); });
        this.easeOutBackBtn.node.on('click', () => { this.node.emit(EASE.BACK_OUT); });
        this.easeInOutBackBtn.node.on('click', () => { this.node.emit(EASE.BACK_INOUT); });

        this.easeInElasticBtn.node.on('click', () => { this.node.emit(EASE.ELASTIC_IN); });
        this.easeOutElasticBtn.node.on('click', () => { this.node.emit(EASE.ELASTIC_OUT); });
        this.easeInOutElasticBtn.node.on('click', () => { this.node.emit(EASE.ELASTIC_INOUT); });

        this.easeInBounceBtn.node.on('click', () => { this.node.emit(EASE.BOUNCE_IN); });
        this.easeOutBounceBtn.node.on('click', () => { this.node.emit(EASE.BOUNCE_OUT); });
        this.easeInOutBounceBtn.node.on('click', () => { this.node.emit(EASE.BOUNCE_INOUT); });
    },

    start() {

    },

    // update (dt) {},

});
