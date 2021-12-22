"use strict";
cc._RF.push(module, '7ffc1PhCJRDT4YHwEGDUvDY', 'SoundController');
// Script/Controller/SoundController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        clickAudio: cc.AudioSource,
        slideAudio: cc.AudioSource,
        awardAudio: cc.AudioSource,
        soundBackground: cc.AudioSource
    },

    onLoad: function onLoad() {
        var _this = this;

        Emiter.instance.addEvent('playSoundBG', function () {
            _this.soundBackground.play();
        });
        Emiter.instance.addEvent('playSoundClick', this._playSoundClick.bind(this));
        Emiter.instance.addEvent('playSoundSlide', this._playSoundSlide.bind(this));
        Emiter.instance.addEvent('playSoundAward', this._playSoundAward.bind(this));
        Emiter.instance.addEvent('playSoundBackground', this._playSoundBackground.bind(this));
        Emiter.instance.addEvent('turnMusic', this._turnMusic.bind(this));
        Emiter.instance.addEvent('turnEffectSound', this._turnEffectSound.bind(this));
    },
    _playSoundClick: function _playSoundClick() {
        this.clickAudio.play();
    },
    _playSoundSlide: function _playSoundSlide() {
        this.slideAudio.play();
    },
    _playSoundAward: function _playSoundAward() {
        this.awardAudio.play();
    },
    _playSoundBackground: function _playSoundBackground() {
        this.soundBackground.play();
    },
    _turnMusic: function _turnMusic(status) {
        this.soundBackground.mute = !status;
    },
    _turnEffectSound: function _turnEffectSound(status) {
        this.slideAudio.mute = !status;
        this.awardAudio.mute = !status;
        this.clickAudio.mute = !status;
    }
});

cc._RF.pop();