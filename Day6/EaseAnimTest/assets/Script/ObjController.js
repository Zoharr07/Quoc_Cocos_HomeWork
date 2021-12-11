
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('easeInShine', this._easeInShineFunc, this);
        this.node.on('easeOutShine', this._easeOutShineFunc, this);

        this.node.on('click', () => { this.node.emit('easeInShine'); });
        this.node.on('click', () => { this.node.emit('easeOutShine'); });
        this.node.on('click', () => { this.node.emit('easeInOutShine'); });

        this.node.on('click', () => { this.node.emit('easeInQuad'); });
        this.node.on('click', () => { this.node.emit('easeOutQuad'); });
        this.node.on('click', () => { this.node.emit('easeInOutQuad'); });

        this.node.on('click', () => { this.node.emit('easeInCubic'); });
        this.node.on('click', () => { this.node.emit('easeOutCubic'); });
        this.node.on('click', () => { this.node.emit('easeInOutCubic'); });

        this.node.on('click', () => { this.node.emit('easeInQuart'); });
        this.node.on('click', () => { this.node.emit('easeOutQuart'); });
        this.node.on('click', () => { this.node.emit('easeInOutQuartBtn'); });

        this.node.on('click', () => { this.node.emit('easeInQuint'); });
        this.node.on('click', () => { this.node.emit('easeOutQuintBtn'); });
        this.node.on('click', () => { this.node.emit('easeInOutQuintBtn'); });

        this.node.on('click', () => { this.node.emit('easeInExpo'); });
        this.node.on('click', () => { this.node.emit('easeOutExpo'); });
        this.node.on('click', () => { this.node.emit('easeInOutExpo'); });

        this.node.on('click', () => { this.node.emit('easeInCirc'); });
        this.node.on('click', () => { this.node.emit('easeOutCirc'); });
        this.node.on('click', () => { this.node.emit('easeInOutCirc'); });

        this.node.on('click', () => { this.node.emit('easeInBack'); });
        this.node.on('click', () => { this.node.emit('easeOutBack'); });
        this.node.on('click', () => { this.node.emit('easeInOutBack'); });

        this.node.on('click', () => { this.node.emit('easeInElastic'); });
        this.node.on('click', () => { this.node.emit('easeOutElastic'); });
        this.node.on('click', () => { this.node.emit('easeInOutElastic'); });

        this.node.on('click', () => { this.node.emit('easeInBounce'); });
        this.node.on('click', () => { this.node.emit('easeOutBounce'); });
        this.node.on('click', () => { this.node.emit('easeInOutBounce'); });
    },

    start() {

    },

    // update (dt) {},
    _easeInShineFunc() {
        cc.log('easeInShineFunc');
    },
    _easeOutShineFunc() {
        cc.log('easeOutShineFunc');
    },
});
