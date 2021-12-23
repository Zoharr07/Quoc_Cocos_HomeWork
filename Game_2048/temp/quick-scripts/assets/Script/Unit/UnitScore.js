(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Unit/UnitScore.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd191dlU/9ZNEYmFg0MMQZpK', 'UnitScore', __filename);
// Script/Unit/UnitScore.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        playerNameLable: cc.Label,
        totalScoreLable: cc.Label,
        _namePlayer: '',
        _totalScore: 0
    },

    onLoad: function onLoad() {
        this.node.setNameData = this._setNameData.bind(this);
    },
    _setScoreData: function _setScoreData(score) {
        this._totalScore = score;
        this.totalScoreLable.string = score;
    },
    _setNameData: function _setNameData(name) {
        this._namePlayer = name;
        this.playerNameLable.string = name;
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
        //# sourceMappingURL=UnitScore.js.map
        