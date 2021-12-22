(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Input/InputController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7a501/WivBIlrlwVaucMo4V', 'InputController', __filename);
// Script/Input/InputController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        Emiter.instance.addEvent('canInput', this._canInput.bind(this));
    },
    _canInput: function _canInput(status) {
        Emiter.instance.emit('inputKeyboard', status);
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
        //# sourceMappingURL=InputController.js.map
        