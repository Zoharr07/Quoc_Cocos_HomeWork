(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/CharController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9a271ZagXtL6qi+SEMr8wtE', 'CharController', __filename);
// Scripts/CharController.js

"use strict";

var Emiter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {
        char: cc.Node,
        spAnim: sp.Skeleton
    },

    onLoad: function onLoad() {
        Emiter.instance = new Emiter();
        Emiter.instance.addEvent("goleft", this._goLeft.bind(this));
        Emiter.instance.addEvent("goright", this._goRight.bind(this));
        Emiter.instance.addEvent("jump", this._jumpChar.bind(this));
        Emiter.instance.addEvent("reset", this._resetChar.bind(this));
        this.spAnim.setEventListener(function (entry, event) {
            var data = event.data;

            cc.log(data.name);
        });
        //this.spAnim.setMix('idle', 'walk', 0.1);
        this.spAnim.setMix('jump', 'idle', 0.2);
    },
    _goLeft: function _goLeft() {
        if (this.char.scaleX == 1) this.char.scaleX = -1;
        var goLeft = cc.moveBy(3, -120, 0);
        goLeft.easing(cc.easeQuarticActionOut(2.0));

        this.spAnim.setAnimation(0, 'walk', false);
        this.char.runAction(goLeft);
        this.spAnim.addAnimation(0, 'idle', true);
    },
    _goRight: function _goRight() {
        if (this.char.scaleX == -1) this.char.scaleX = 1;
        var goRight = cc.moveBy(3, 120, 0);
        goRight.easing(cc.easeQuarticActionOut(2.5));

        this.spAnim.setAnimation(0, 'walk', false);

        this.char.runAction(goRight);
        this.spAnim.addAnimation(0, 'idle', true);
    },
    _jumpChar: function _jumpChar() {
        var jump = cc.jumpBy(1, 50 * this.char.scaleX, 0, 10, 1);
        jump.easing(cc.easeInOut(1));

        this.spAnim.setAnimation(0, 'jump', false);

        this.char.runAction(jump);
        this.spAnim.addAnimation(0, 'idle', true);
    },
    _resetChar: function _resetChar() {
        this.char.position = cc.v2(455, 160);
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
        