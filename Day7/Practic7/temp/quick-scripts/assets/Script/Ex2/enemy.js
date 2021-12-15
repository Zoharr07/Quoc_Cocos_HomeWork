(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ex2/enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '336b4TSc7FK450pR/o20jim', 'enemy', __filename);
// Script/Ex2/enemy.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        var _this = this;

        console.log('on bullet hit');
        if (other.tag == 4) {

            cc.log(other, self);
            cc.tween(this.node).delay(0.1).call(function () {
                _this.node.destroy();
            }).start();
        }
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
        //# sourceMappingURL=enemy.js.map
        