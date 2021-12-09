const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start() {
    },
    onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome() {
        Emitter.instance.emit('WELCOME', "Welcomeeeee");
    },
});