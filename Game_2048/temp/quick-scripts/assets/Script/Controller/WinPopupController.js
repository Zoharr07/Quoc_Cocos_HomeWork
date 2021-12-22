(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/WinPopupController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c0f455VKeRN6JterpJzXXl3', 'WinPopupController', __filename);
// Script/Controller/WinPopupController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        continuePlayBtn: cc.Button,
        backGameplayBtn: cc.Button,
        _onPopup: false
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('winGame', this._turnOnPopup.bind(this));
        Emiter.instance.addEvent('turnOffPopup', this._turnOffPopup.bind(this));
        this.continuePlayBtn.node.on('click', this._continuePlayFunc, this);
        this.backGameplayBtn.node.on('click', this._newGameBtn, this);
    },
    _turnOnPopup: function _turnOnPopup(score) {
        if (this._onPopup) return;
        this._onPopup = true;
        Emiter.instance.emit('canInput', false);
        this._move(0, 0, this.node, 0.6, true);
    },
    _turnOffPopup: function _turnOffPopup() {
        this._move(0, 1600, this.node, 0.6, false);
        this._onPopup = false;
    },
    _newGameBtn: function _newGameBtn() {
        this._turnOffPopup();
        Emiter.instance.emit('startGame');
    },
    _continuePlayFunc: function _continuePlayFunc() {
        this._turnOffPopup();
        Emiter.instance.emit('continuePlayOverPoint');
        Emiter.instance.emit('canInput', true);
    },
    _move: function _move(x, y, nodeObj, time, isActive) {

        var indx = 0;
        if (isActive == true) indx = 255;
        var t = cc.tween;
        t(nodeObj).parallel(t().to(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }), t().to(time / 5, { opacity: indx })).start();
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
        //# sourceMappingURL=WinPopupController.js.map
        