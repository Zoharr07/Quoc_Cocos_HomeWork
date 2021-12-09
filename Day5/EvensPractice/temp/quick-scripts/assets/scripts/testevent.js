(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/testevent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '31199jjrDNIOrTWjhCLPYIu', 'testevent', __filename);
// scripts/testevent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},
    // onLoad: function () {
    //     this.node.on('mousedown', function (event) {
    //         console.log('Hello!');
    //     });
    // },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // this.node.on('mousedown', this.funcTest, this);
        // this._bindA = this.funcTest.bind(this);
        // this._bindB = this.funcTest.bind(this);

    },
    start: function start() {
        // this._bindA();
        // this._bindB();
        // cc.warn(this._bindA === this._bindB);
    },


    // update (dt) {},
    funcTest: function funcTest() {
        cc.warn('bind');
    },
    removeEvn: function removeEvn() {
        this.node.off('mousedown', this.funcTest, this);
    },
    emitBtn: function emitBtn() {
        this.node.emit('say-hello', 'Hello, this is Cocos Creator');
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=testevent.js.map
        