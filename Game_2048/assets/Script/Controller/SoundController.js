const Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        soundBtnClick: cc.AudioSource,
        soundBackground: cc.AudioSource,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emiter.instance.addEvent('playSoundBG', () => { this.soundBackground.play(); });
        Emiter.instance.addEvent('playSoundClick', this._playSoundClick.bind(this));
    },

    start() {

    },

    // update (dt) {},
    _playSoundClick() {
        this.soundBtnClick.play();
    },
});
