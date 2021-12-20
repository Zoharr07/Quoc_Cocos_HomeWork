const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        clickAudio: cc.AudioSource,
        slideAudio: cc.AudioSource,
        awardAudio: cc.AudioSource,
        soundBackground: cc.AudioSource,
    },

    onLoad() {
        Emiter.instance.addEvent('playSoundBG', () => { this.soundBackground.play(); });
        Emiter.instance.addEvent('playSoundClick', this._playSoundClick.bind(this));
        Emiter.instance.addEvent('playSoundSlide', this._playSoundSlide.bind(this));
        Emiter.instance.addEvent('playSoundAward', this._playSoundAward.bind(this));
    },

    _playSoundClick() {
        this.clickAudio.play();
    },
    _playSoundSlide() {
        this.slideAudio.play();
    },
    _playSoundAward() {
        this.awardAudio.play();
    },
});
