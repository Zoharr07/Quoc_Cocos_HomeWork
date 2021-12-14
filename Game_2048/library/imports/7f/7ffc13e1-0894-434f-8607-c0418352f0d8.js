"use strict";
cc._RF.push(module, '7ffc1PhCJRDT4YHwEGDUvDY', 'SoundController');
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