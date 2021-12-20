(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/MainMenuController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1df2cMwkNpNDaW6XcbddVwk', 'MainMenuController', __filename);
// Script/Controller/MainMenuController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        newGameBtn: cc.Button,
        startGameBtn: cc.Button,
        startGameBtnLabel: cc.Label,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node,
        menuNode: cc.Node
    },

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);
    },
    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(-2000, 0, this.menuNode, 1.0);
        this._move(-2000, 0, this.gamePlayNode, 1.0);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        this._move(2000, 0, this.menuNode, 1.0);
        this._move(2000, 0, this.gamePlayNode, 1.0);
    },
    _move: function _move(x, y, nodeObj, time) {
        cc.tween(nodeObj).by(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }).start();
    },
    _exitGame: function _exitGame() {
        cc.game.end();
    },
    _startGameFunc: function _startGameFunc() {
        Emiter.instance.emit('startGame');
        this.startGameBtnLabel.string = 'RePlay';
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
        //# sourceMappingURL=MainMenuController.js.map
        