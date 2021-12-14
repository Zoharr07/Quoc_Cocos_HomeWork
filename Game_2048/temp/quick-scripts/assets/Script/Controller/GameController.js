(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '35fcbcIcmhHL5aekjDe2BLq', 'GameController', __filename);
// Script/GameController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _boardPosition: [],
        _maxX: 0,
        _minX: 0,
        _maxY: 0,
        _minY: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Emiter.instance.addEvent('addPos', this._addPosition.bind(this));
        Emiter.instance.addEvent('setMinMaxPosition', this._setMinMaxPosition.bind(this));
    },
    start: function start() {},


    // update (dt) {},
    _addPosition: function _addPosition(vector) {
        this._boardPosition.push(vector);
        cc.warn(this._boardPosition);
    },
    _setMinMaxPosition: function _setMinMaxPosition(minX, maxX, minY, maxY) {
        this._maxX = maxX;
        this._minX = minX;
        this._maxY = maxY;
        this._minY = minY;
        cc.log(this._minX, this._maxX, this._minY, this._maxY);
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
        //# sourceMappingURL=GameController.js.map
        