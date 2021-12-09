(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/EventForm.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6894XpkEZIj5dKXfVNEO8X', 'EventForm', __filename);
// scripts/EventForm.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("HELLO", this.onHello.bind(this));
        Emitter.instance.registerOnce("WELCOME", this.onWelcome.bind(this));
    },
    onHello: function onHello(data) {
        cc.log('hello', data);
    },
    onWelcome: function onWelcome(data) {
        cc.log('welcome', data);
    },
    start: function start() {}
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
        //# sourceMappingURL=EventForm.js.map
        