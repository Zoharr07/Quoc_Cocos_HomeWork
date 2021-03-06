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
        replaySprite: cc.Node,
        backMenuBtn: cc.Button,
        exitBtn: cc.Button,
        gamePlayNode: cc.Node,
        menuNode: cc.Node,

        leaderBoardNode: cc.Node,
        hightScoreBtn: cc.Button,
        backMenuLeaderboardBtn: cc.Button,

        playerNameInput: cc.EditBox,

        soundMusicBtn: cc.Button,
        soundMusicOffSprite: cc.Node,
        _musicOn: true,

        soundEffectBtn: cc.Button,
        soundEffectOffSprite: cc.Node,

        _soundOn: true
    },

    onLoad: function onLoad() {
        this.newGameBtn.node.on('click', this._newGameFunc, this);
        this.startGameBtn.node.on('click', this._startGameFunc, this);
        this.backMenuBtn.node.on('click', this._backMenuFunc, this);
        this.exitBtn.node.on('click', this._exitGame, this);

        this.hightScoreBtn.node.on('click', this._hightScoreFunc, this);
        this.backMenuLeaderboardBtn.node.on('click', this._backMenuFunc, this);

        this.soundMusicBtn.node.on('click', this._setSound, this);
        this.soundEffectBtn.node.on('click', this._setEffectSound, this);

        this._initStart();
    },
    _initStart: function _initStart() {
        this.gamePlayNode.active = false;
        this.menuNode.active = true;
        this.leaderBoardNode.active = false;
        this._backMenuFunc();
        this._loadPlayerName();
    },
    _newGameFunc: function _newGameFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('canInput', true);
        this._savePlayerName();
        Emiter.instance.emit('setPlayerName', this.playerNameInput.string);
        this._move(-1000, 0, this.menuNode, 0.6, false);
        this._move(0, 0, this.gamePlayNode, 0.6, true);
    },
    _hightScoreFunc: function _hightScoreFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('canInput', false);
        this._move(1000, 0, this.menuNode, 0.6, false);
        this._move(0, 0, this.leaderBoardNode, 0.6, true);
    },
    _backMenuFunc: function _backMenuFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('turnOffPopup');
        Emiter.instance.emit('canInput', false);
        this._move(0, 0, this.menuNode, 0.6, true);
        this._move(1000, 0, this.gamePlayNode, 0.6, false);
        this._move(-1000, 0, this.leaderBoardNode, 0.6, false);
    },
    _move: function _move(x, y, nodeObj, time, isActive) {

        var indx = 0;
        if (isActive == true) indx = 255;
        var t = cc.tween;
        t(nodeObj).call(function () {
            if (isActive == true) nodeObj.active = isActive;
        }).parallel(t().to(time, { position: cc.v2(x, y) }, { easing: 'quartOut' }), t().to(time / 5, { opacity: indx })).call(function () {
            if (isActive == false) nodeObj.active = isActive;
        }).start();
    },
    _exitGame: function _exitGame() {
        cc.game.end();
    },
    _startGameFunc: function _startGameFunc() {
        Emiter.instance.emit('startGame');
        Emiter.instance.emit('turnOffPopup');
        Emiter.instance.emit('canInput', true);
        this.replaySprite.active = true;
    },
    _setSound: function _setSound() {
        if (this._musicOn) {
            this._musicOn = false;
            this.soundMusicOffSprite.active = true;
            Emiter.instance.emit('turnMusic', false);
            return;
        }
        this._musicOn = true;
        this.soundMusicOffSprite.active = false;
        Emiter.instance.emit('turnMusic', true);
    },
    _setEffectSound: function _setEffectSound() {
        if (this._musicOn) {
            this._musicOn = false;
            this.soundEffectOffSprite.active = true;
            Emiter.instance.emit('turnEffectSound', false);
            return;
        }
        this._musicOn = true;
        this.soundEffectOffSprite.active = false;
        Emiter.instance.emit('turnEffectSound', true);
    },
    _savePlayerName: function _savePlayerName() {
        if (this.playerNameInput.string != null) cc.sys.localStorage.setItem('PlayerName', this.playerNameInput.string);
    },
    _loadPlayerName: function _loadPlayerName() {
        if (cc.sys.localStorage.getItem('PlayerName')) {
            this.playerNameInput.string = cc.sys.localStorage.getItem('PlayerName');
        } else this.playerNameInput.string = 'Player';
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
        