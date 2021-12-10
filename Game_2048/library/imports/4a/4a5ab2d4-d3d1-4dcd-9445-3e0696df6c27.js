"use strict";
cc._RF.push(module, '4a5abLU09FNzZRFPgaW32wn', 'Emitter');
// Script/Events/Emitter.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EvenEmiter = require('Events');

var Emitter = function () {
    function Emitter() {
        _classCallCheck(this, Emitter);

        this._emitter = new EvenEmiter();
        this._emitter.setMaxListeners(100);
    }

    _createClass(Emitter, [{
        key: 'emit',
        value: function emit() {
            var _emitter;

            (_emitter = this._emitter).emit.apply(_emitter, arguments);
        }
    }, {
        key: 'addEvent',
        value: function addEvent(event, callback) {
            this._emitter.on(event, callback);
        }
    }, {
        key: 'addOneEvent',
        value: function addOneEvent(event, callback) {
            this._emitter.once(event, callback);
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(event, callback) {
            this._emitter.removeListener(event, callback);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._emitter.removeAllListeners();
            this._emitter = null;
            Emitter.instance = null;
        }
    }]);

    return Emitter;
}();

Emitter.instance = null;
module.exports = Emitter;

cc._RF.pop();