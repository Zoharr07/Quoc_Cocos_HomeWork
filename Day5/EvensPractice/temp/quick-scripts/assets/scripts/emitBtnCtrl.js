(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/emitBtnCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5f880U1sbhJ17JInOEyFQwh', 'emitBtnCtrl', __filename);
// scripts/emitBtnCtrl.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start: function start() {},
    onHello: function onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome: function onWelcome() {
        Emitter.instance.emit('WELCOME', "Welcomeeeee");
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
        //# sourceMappingURL=emitBtnCtrl.js.map
        