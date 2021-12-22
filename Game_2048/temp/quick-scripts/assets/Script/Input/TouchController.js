(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Input/TouchController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '216c9bKAjhCZ5olErtOhkcp', 'TouchController', __filename);
// Script/Input/TouchController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _canInputTouch: true,
        _starPos: null,
        _distance: 20
    },

    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);

        Emiter.instance.addEvent('inputTouch', this._setInputTouch.bind(this));
        this._setInputTouch(false);
    },


    onTouchStart: function onTouchStart(event) {
        this._starPos = event.getLocation();
    },

    onTouchEnd: function onTouchEnd(event) {
        if (this._canInputTouch == false) return;
        var moveX = event.getLocationX() - this._starPos.x;
        var moveY = event.getLocationY() - this._starPos.y;
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (moveX < this._distance && moveX > -this._distance) return;
            if (moveX > 0) {
                Emiter.instance.emit('moveRight');
                return;
            }
            Emiter.instance.emit('moveLeft');
        } else {
            if (moveY < this._distance && moveY > -this._distance) return;
            if (moveY > 0) {
                Emiter.instance.emit('moveUp');
                return;
            }
            Emiter.instance.emit('moveDown');
        }
    },

    _checkDirect: function _checkDirect() {},
    _setInputTouch: function _setInputTouch(status) {
        this._canInputTouch = status;
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
        //# sourceMappingURL=TouchController.js.map
        