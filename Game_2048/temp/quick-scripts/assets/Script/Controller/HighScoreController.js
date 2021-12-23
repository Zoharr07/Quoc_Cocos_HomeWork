(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/HighScoreController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2b743FVQxpPaKkFkCLbKs+U', 'HighScoreController', __filename);
// Script/Controller/HighScoreController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        clearScoreDataBtn: cc.Button,
        scoreList: []
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('addScoreData', this._addScoreData.bind(this));
        this.clearScoreDataBtn.node.on('click', this._clearScoreData, this);
    },
    _clearScoreData: function _clearScoreData() {
        this.scoreList.forEach(function (element) {
            element.destroy();
        });
        this.scoreList = [];
    },
    _addScoreData: function _addScoreData(unit) {
        cc.log('add score unit');
        this.scoreList.push(unit);
    }
});

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
        //# sourceMappingURL=HighScoreController.js.map
        