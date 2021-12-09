
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // onLoad: function () {
    //     this.node.on('mousedown', function (event) {
    //         console.log('Hello!');
    //     });
    // },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.node.on('mousedown', this.funcTest, this);
        // this._bindA = this.funcTest.bind(this);
        // this._bindB = this.funcTest.bind(this);

    },

    start() {
        // this._bindA();
        // this._bindB();
        // cc.warn(this._bindA === this._bindB);
    },

    // update (dt) {},
    funcTest() {
        cc.warn('bind');
    },

    removeEvn() {
        this.node.off('mousedown', this.funcTest, this);
    },

    emitBtn() {
        this.node.emit('say-hello', 'Hello, this is Cocos Creator');
    },
});
