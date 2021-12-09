(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Emitter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '75443o/Z4ZFfaGZPn3Km4ZY', 'Emitter', __filename);
// Scripts/Emitter.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = require('events');

var Emitter = function () {
    function Emitter() {
        _classCallCheck(this, Emitter);

        this._emitter = new EventEmitter();
        this._emitter.setMaxListeners(10);
    }

    _createClass(Emitter, [{
        key: 'emit',
        value: function emit() {
            var _emitter;

            (_emitter = this._emitter).emit.apply(_emitter, arguments);
        }
    }, {
        key: 'addEvent',
        value: function addEvent(event, listener) {
            this._emitter.on(event, listener);
        }
    }, {
        key: 'addOne',
        value: function addOne(event, listener) {
            this._emitter.once(event, listener);
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(event, listener) {
            this._emitter.removeListener(event, listener);
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
        //# sourceMappingURL=Emitter.js.map
        