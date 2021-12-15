(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ex2/groundJs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f46fcQOb+9OMqB6l5t1tqW1', 'groundJs', __filename);
// Script/Ex2/groundJs.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {},

    onCollisionStay: function onCollisionStay(other, self) {
        if (other.tag == 0) {
            if (other.node.y < -168) {
                other.node.y = -168;
            }
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
        //# sourceMappingURL=groundJs.js.map
        