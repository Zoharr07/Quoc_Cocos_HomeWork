const EvenEmiter = require('Events');
class Emitter {
    constructor() {
        this._emitter = new EvenEmiter();
        this._emitter.setMaxListeners(100);
    }
    emit(...args) {
        this._emitter.emit(...args);
    }
    addEvent(event, callback) {
        this._emitter.on(event, callback);
    }
    addOneEvent(event, callback) {
        this._emitter.once(event, callback);
    }
    removeEvent(event, callback) {
        this._emitter.removeListener(event, callback);
    }
    destroy() {
        this._emitter.removeAllListeners();
        this._emitter = null;
        Emitter.instance = null;
    }
}
Emitter.instance = null;
module.exports = Emitter;