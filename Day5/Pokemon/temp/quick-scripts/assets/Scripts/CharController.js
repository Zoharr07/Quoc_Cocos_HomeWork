(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/CharController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9a271ZagXtL6qi+SEMr8wtE', 'CharController', __filename);
// Scripts/CharController.js

"use strict";

var Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        frameAnim: 40,
        char: cc.Node,
        _counter: 0
    },

    onLoad: function onLoad() {
        Emiter.instance = new Emiter();
        Emiter.instance.addEvent("goleft", this._goLeft.bind(this));
        Emiter.instance.addEvent("goright", this._goRight.bind(this));
        Emiter.instance.addEvent("jump", this._jumpChar.bind(this));
        Emiter.instance.addEvent("reset", this._resetChar.bind(this));
    },
    update: function update(dt) {},
    start: function start() {
        //this._resetChar();
    },
    _goLeft: function _goLeft() {
        var goLeft = cc.moveBy(0.9, -100, 0);
        goLeft.easing(cc.easeQuarticActionOut(0.7));
        this.char.runAction(goLeft);
    },
    _goRight: function _goRight() {
        var goRight = cc.moveBy(0.9, 100, 0);
        goRight.easing(cc.easeQuarticActionOut(0.7));
        this.char.runAction(goRight);
    },
    _jumpChar: function _jumpChar() {
        var jump = cc.jumpBy(0.9, 0, 0, 50, 1);
        jump.easing(cc.easeInOut(0.9));
        this.char.runAction(jump);
    },
    _resetChar: function _resetChar() {
        this.char.position = cc.v2(480, 185);
        this.char.angle = 0;
        this._resetFlag();
        Emiter.instance.emit('setbutton', true);
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
        //# sourceMappingURL=CharController.js.map
        