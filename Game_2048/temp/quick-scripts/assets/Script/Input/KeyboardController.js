(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Input/KeyboardController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '01b53iQwulP+oeV57sueIqk', 'KeyboardController', __filename);
// Script/Input/KeyboardController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _canInputKeyboard: true
    },

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        Emiter.instance.addEvent('inputKeyboard', this._setInputKeyboard.bind(this));
        this._setInputKeyboard(false);
    },


    onKeyUp: function onKeyUp(event) {
        if (this._canInputKeyboard == false) return;
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Emiter.instance.emit('moveUp');
                break;
            case cc.macro.KEY.down:
                Emiter.instance.emit('moveDown');
                break;
            case cc.macro.KEY.left:
                Emiter.instance.emit('moveLeft');
                break;
            case cc.macro.KEY.right:
                Emiter.instance.emit('moveRight');
                break;
        }
    },

    _setInputKeyboard: function _setInputKeyboard(status) {
        this._canInputKeyboard = status;
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
        //# sourceMappingURL=KeyboardController.js.map
        