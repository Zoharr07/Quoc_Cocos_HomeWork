(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Input/TouchController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '216c9bKAjhCZ5olErtOhkcp', 'TouchController', __filename);
// Script/Input/TouchController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        _starPos: null,
        _endPos: null
    },

    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    },


    onTouchStart: function onTouchStart(event) {
        this._starPos = event.getLocation();
    },

    onTouchEnd: function onTouchEnd(event) {
        this._endPos = event.getLocation();
        this._checkDirect();
    },

    _checkDirect: function _checkDirect() {
        var distance = 20;
        var moveX = this._endPos.x - this._starPos.x;
        var moveY = this._endPos.y - this._starPos.y;
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (moveX < distance && moveX > -distance) return;
            if (moveX > 0) Emiter.instance.emit('moveRight');else Emiter.instance.emit('moveLeft');
        } else {
            if (moveY < distance && moveY > -distance) return;
            if (moveY > 0) Emiter.instance.emit('moveUp');else Emiter.instance.emit('moveDown');
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
        //# sourceMappingURL=TouchController.js.map
        