(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ex2/bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ccd3eKdzGdA0Y6ZKGOZaknz', 'bullet', __filename);
// Script/Ex2/bullet.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {},


    // update (dt) {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on enemy hit');
        cc.log(other, self);
        if (other.tag == 3 || other.tag == 2) {
            this.node.destroy();
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
        //# sourceMappingURL=bullet.js.map
        