const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        clickAudio: cc.AudioSource,
        slideAudio: cc.AudioSource,
        awardAudio: cc.AudioSource,
        winAudio: cc.AudioSource,
        loseAudio: cc.AudioSource,

        soundBackground: cc.AudioSource,
    },

    onLoad() {
        Emiter.instance.addEvent('playSoundBG', () => { this.soundBackground.play(); });
        Emiter.instance.addEvent('playSoundClick', this._playSoundClick.bind(this));
        Emiter.instance.addEvent('playSoundSlide', this._playSoundSlide.bind(this));
        Emiter.instance.addEvent('playSoundAward', this._playSoundAward.bind(this));
        Emiter.instance.addEvent('playSoundWin', this._playSoundWin.bind(this));
        Emiter.instance.addEvent('playSoundLose', this._playSoundLose.bind(this));

        Emiter.instance.addEvent('playSoundBackground', this._playSoundBackground.bind(this));
        Emiter.instance.addEvent('turnMusic', this._turnMusic.bind(this));
        Emiter.instance.addEvent('turnEffectSound', this._turnEffectSound.bind(this));
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

    _playSoundWin() {
        this.winAudio.play();
    },

    _playSoundLose() {
        this.loseAudio.play();
    },

    _playSoundBackground() {
        this.soundBackground.play();
    },

    _turnMusic(status) {
        this.soundBackground.mute = !status;
    },
    _turnEffectSound(status) {
        this.slideAudio.mute = !status;
        this.awardAudio.mute = !status;
        this.clickAudio.mute = !status;
    },
});
