(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/SoundController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7ffc1PhCJRDT4YHwEGDUvDY', 'SoundController', __filename);
// Script/Controller/SoundController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        soundBtnClick: cc.AudioSource,
        soundBackground: cc.AudioSource
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        Emiter.instance.addEvent('playSoundBG', function () {
            _this.soundBackground.play();
        });
        Emiter.instance.addEvent('playSoundClick', this._playSoundClick.bind(this));
    },
    start: function start() {},


    // update (dt) {},
    _playSoundClick: function _playSoundClick() {
        this.soundBtnClick.play();
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
        //# sourceMappingURL=SoundController.js.map
        