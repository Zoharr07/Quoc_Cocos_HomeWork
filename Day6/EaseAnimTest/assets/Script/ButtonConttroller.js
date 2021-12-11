
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
        this.easeInShineBtn.node.on('click', () => { this.node.emit('easeInShine'); });
        this.easeOutShineBtn.node.on('click', () => { this.node.emit('easeOutShine'); });
        this.easeInOutShineBtn.node.on('click', () => { this.node.emit('easeInOutShine'); });

        this.easeInQuadBtn.node.on('click', () => { this.node.emit('easeInQuad'); });
        this.easeOutQuadBtn.node.on('click', () => { this.node.emit('easeOutQuad'); });
        this.easeInOutQuadBtn.node.on('click', () => { this.node.emit('easeInOutQuad'); });

        this.easeInCubicBtn.node.on('click', () => { this.node.emit('easeInCubic'); });
        this.easeOutCubicBtn.node.on('click', () => { this.node.emit('easeOutCubic'); });
        this.easeInOutCubicBtn.node.on('click', () => { this.node.emit('easeInOutCubic'); });

        this.easeInQuartBtn.node.on('click', () => { this.node.emit('easeInQuart'); });
        this.easeOutQuartBtn.node.on('click', () => { this.node.emit('easeOutQuart'); });
        this.easeInOutQuartBtn.node.on('click', () => { this.node.emit('easeInOutQuartBtn'); });

        this.easeInQuintBtn.node.on('click', () => { this.node.emit('easeInQuint'); });
        this.easeOutQuintBtn.node.on('click', () => { this.node.emit('easeOutQuintBtn'); });
        this.easeInOutQuintBtn.node.on('click', () => { this.node.emit('easeInOutQuintBtn'); });

        this.easeInExpoBtn.node.on('click', () => { this.node.emit('easeInExpo'); });
        this.easeOutExpoBtn.node.on('click', () => { this.node.emit('easeOutExpo'); });
        this.easeInOutExpoBtn.node.on('click', () => { this.node.emit('easeInOutExpo'); });

        this.easeInCircBtn.node.on('click', () => { this.node.emit('easeInCirc'); });
        this.easeOutCircBtn.node.on('click', () => { this.node.emit('easeOutCirc'); });
        this.easeInOutCircBtn.node.on('click', () => { this.node.emit('easeInOutCirc'); });

        this.easeInBackBtn.node.on('click', () => { this.node.emit('easeInBack'); });
        this.easeOutBackBtn.node.on('click', () => { this.node.emit('easeOutBack'); });
        this.easeInOutBackBtn.node.on('click', () => { this.node.emit('easeInOutBack'); });

        this.easeInElasticBtn.node.on('click', () => { this.node.emit('easeInElastic'); });
        this.easeOutElasticBtn.node.on('click', () => { this.node.emit('easeOutElastic'); });
        this.easeInOutElasticBtn.node.on('click', () => { this.node.emit('easeInOutElastic'); });

        this.easeInBounceBtn.node.on('click', () => { this.node.emit('easeInBounce'); });
        this.easeOutBounceBtn.node.on('click', () => { this.node.emit('easeOutBounce'); });
        this.easeInOutBounceBtn.node.on('click', () => { this.node.emit('easeInOutBounce'); });
    },

    start() {

    },

    // update (dt) {},

});
