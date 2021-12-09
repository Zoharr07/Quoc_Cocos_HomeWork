const EventEmitter = require('events');

class Emitter {
    constructor() {
        this._emitter = new EventEmitter();
        this._emitter.setMaxListeners(10);
    }

    emit(...args) {
        this._emitter.emit(...args);
    }

    addEvent(event, listener) {
        this._emitter.on(event, listener);
    }

    addOne(event, listener) {
        this._emitter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    destroy() {
        this._emitter.removeAllListeners();
        this._emitter = null;
        Emitter.instance = null;
    }
}
Emitter.instance = null;
module.exports = Emitter;