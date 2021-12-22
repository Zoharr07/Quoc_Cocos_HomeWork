(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '35fcbcIcmhHL5aekjDe2BLq', 'GameController', __filename);
// Script/Controller/GameController.js

'use strict';

var Emiter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        unitBG: cc.Prefab,
        unitPrefabs: cc.Prefab,
        boardUnit: cc.Node,
        nodeBG: cc.Node,
        scoreTotal: cc.Label,
        bestScore: cc.Label,
        _boardPosition: [],
        _boardUnitArgs: [],
        _row: 4,
        _col: 4,
        _distance: 200,
        _maxObj: 0,
        _canMoveBoard: true,
        _canInstanceUnit: false,
        _winPoint: 0,
        _playOverPoint: false
    },

    onLoad: function onLoad() {
        Emiter.instance.addEvent('startGame', this._startGameFunc.bind(this));
        Emiter.instance.addEvent('continuePlayOverPoint', this._continuePlayOverPoint.bind(this));
        Emiter.instance.addEvent('moveUp', this._moveUp.bind(this));
        Emiter.instance.addEvent('moveDown', this._moveDown.bind(this));
        Emiter.instance.addEvent('moveLeft', this._moveLeft.bind(this));
        Emiter.instance.addEvent('moveRight', this._moveRight.bind(this));
        this.instanceBackgroundUnit();
        this._instanceBoardArray();
        this._clearBoardGame();
        this._winPoint = 128;
    },
    instanceRandomUnit: function instanceRandomUnit() {
        this._maxObj++;
        if (this._maxObj > this._row * this._col) return;
        var randX = 0;
        var randY = 0;
        randomXY();
        while (this._boardUnitArgs[randX][randY] != null) {
            randomXY();
        }var unit = cc.instantiate(this.unitPrefabs);
        this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        unit.setUnitValue(randomValue());
        this._canMoveBoard = true;

        function randomXY() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
        function randomValue() {
            var rand = Math.random();
            rand > 0.5 ? rand = 4 : rand = 2;
            return rand;
        }
    },
    _instanceUnit: function _instanceUnit() {
        var _this = this;

        cc.tween(this.node).delay(0.08).call(function () {
            if (_this._maxObj >= 16 && _this._canInstanceUnit == false) {
                Emiter.instance.emit('loseGame', _this.scoreTotal.string);
                cc.log('end Game');
            }
            if (_this._canInstanceUnit == false) {
                _this._canMoveBoard = true;
                return;
            }
            _this._canInstanceUnit = false;
            Emiter.instance.emit('playSoundSlide');
            _this.instanceRandomUnit();
        }).start();
    },
    instanceBackgroundUnit: function instanceBackgroundUnit() {
        for (var i = 1; i <= this._row; i++) {
            var rowBoard = [];
            for (var j = 1; j <= this._col; j++) {
                var unit = cc.instantiate(this.unitBG);
                var unitPos = cc.v2((j - (this._col + 1) / 2) * this._distance, -((i - (this._row + 1) / 2) * this._distance));
                unit.position = unitPos;
                rowBoard.push(unitPos);
                this.nodeBG.addChild(unit);
            }
            this._boardPosition.push(rowBoard);
        }
    },
    _startGameFunc: function _startGameFunc() {
        Emiter.instance.emit('playSoundClick');
        Emiter.instance.emit('playSoundBackground');
        Emiter.instance.emit('canInput', true);
        this._clearBoardGame();
        this.instanceRandomUnit();
        this.instanceRandomUnit();
    },
    _instanceBoardArray: function _instanceBoardArray() {
        for (var i = 0; i < this._row; i++) {
            var rowBoardArg = [];
            for (var j = 0; j < this._col; j++) {
                rowBoardArg.push(null);
            }this._boardUnitArgs.push(rowBoardArg);
        }
    },
    _clearBoardGame: function _clearBoardGame() {
        for (var i = 0; i < this._row; i++) {
            for (var j = 0; j < this._col; j++) {
                if (this._boardUnitArgs[i][j] != null) this._boardUnitArgs[i][j].destroyNode();
                this._boardUnitArgs[i][j] = null;
            }
        }
        this._maxObj = 0;
        this._playOverPoint = false;
        this._resetScore();
    },
    _continuePlayOverPoint: function _continuePlayOverPoint() {
        this._playOverPoint = true;
    },
    _moveUp: function _moveUp() {
        if (this._canMoveBoard == false) return;
        this._canMoveBoard = false;
        for (var y = 0; y < this._col; y++) {
            for (var x = 0; x < this._row; x++) {
                var index = this._getIndex(x, y, 'col', 'forward');
                if (index == x) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(index, y, x, y);
                    if (index != y) y--;
                    continue;
                }
                if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[index][y].getUnitValue()) {
                    this._moveUnitPosition(index, y, x, y);
                    this._mergeUnit(x, y, index, y);
                    continue;
                }
                this._moveUnitPosition(index, y, x + 1, y);
            }
        }
        this._instanceUnit();
    },
    _moveDown: function _moveDown() {
        if (this._canMoveBoard == false) return;
        this._canMoveBoard = false;
        for (var y = this._col - 1; y >= 0; y--) {
            for (var x = this._row - 1; x >= 0; x--) {
                var index = this._getIndex(x, y, 'col', 'backward');
                if (index == x) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(index, y, x, y);
                    if (index != y) y++;
                    continue;
                }
                if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[index][y].getUnitValue()) {
                    this._moveUnitPosition(index, y, x, y);
                    this._mergeUnit(x, y, index, y);
                    continue;
                }
                this._moveUnitPosition(index, y, x - 1, y);
            }
        }
        this._instanceUnit();
    },
    _moveLeft: function _moveLeft() {
        if (this._canMoveBoard == false) return;
        this._canMoveBoard = false;
        for (var x = 0; x < this._row; x++) {
            for (var y = 0; y < this._col; y++) {
                var index = this._getIndex(x, y, 'row', 'forward');
                if (index == y) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(x, index, x, y);
                    if (index != y) y--;
                    continue;
                }
                if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x][index].getUnitValue()) {
                    this._moveUnitPosition(x, index, x, y);
                    this._mergeUnit(x, y, x, index);
                    continue;
                }
                this._moveUnitPosition(x, index, x, y + 1);
            }
        }
        this._instanceUnit();
    },
    _moveRight: function _moveRight() {
        if (this._canMoveBoard == false) return;
        this._canMoveBoard = false;
        for (var x = this._row - 1; x >= 0; x--) {
            for (var y = this._col - 1; y >= 0; y--) {
                var index = this._getIndex(x, y, 'row', 'backward');
                if (index == y) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(x, index, x, y);
                    if (index != y) y++;
                    continue;
                }
                if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x][index].getUnitValue()) {
                    this._moveUnitPosition(x, index, x, y);
                    this._mergeUnit(x, y, x, index);
                    continue;
                }
                this._moveUnitPosition(x, index, x, y - 1);
            }
        }
        this._instanceUnit();
    },
    _moveUnitPosition: function _moveUnitPosition(currentX, currentY, indexX, indexY) {
        if (currentX == indexX && currentY == indexY) return;
        var temp = this._boardUnitArgs[currentX][currentY];
        this._boardUnitArgs[currentX][currentY] = this._boardUnitArgs[indexX][indexY];
        this._boardUnitArgs[indexX][indexY] = temp;
        this._boardUnitArgs[indexX][indexY].moveUnit(this._boardPosition[indexX][indexY]);
        this._canInstanceUnit = true;
    },
    _mergeUnit: function _mergeUnit(x, y, indexX, indexY) {
        Emiter.instance.emit('playSoundAward');
        var unitPoint = this._boardUnitArgs[x][y].getUnitValue() * 2;
        this._boardUnitArgs[x][y].setUnitValue(unitPoint);
        this._boardUnitArgs[indexX][indexY].destroyNode();
        this._boardUnitArgs[indexX][indexY] = null;
        this._addScore(this._boardUnitArgs[x][y].getUnitValue());
        this._maxObj--;
        if (this._playOverPoint == true) return;

        if (unitPoint >= this._winPoint) Emiter.instance.emit('winGame');
    },
    _getIndex: function _getIndex(x, y, getType, sortType) {
        var index = null;
        if (getType == 'row') {
            index = y;
            if (sortType == 'forward') for (var i = this._col - 1; i > y; i--) {
                if (this._boardUnitArgs[x][i] != null) index = i;
            }
            if (sortType == 'backward') for (var _i = 0; _i < y; _i++) {
                if (this._boardUnitArgs[x][_i] != null) index = _i;
            }
        }
        if (getType == 'col') {
            index = x;
            if (sortType == 'forward') for (var _i2 = this._row - 1; _i2 > x; _i2--) {
                if (this._boardUnitArgs[_i2][y] != null) index = _i2;
            }
            if (sortType == 'backward') for (var _i3 = 0; _i3 < x; _i3++) {
                if (this._boardUnitArgs[_i3][y] != null) index = _i3;
            }
        }
        return index;
    },
    _addScore: function _addScore(score) {
        this.scoreTotal.string = +score + +this.scoreTotal.string;
        this._updateBestScore();
    },
    _resetScore: function _resetScore() {
        this.scoreTotal.string = 0;
        if (cc.sys.localStorage.getItem('BestScore')) {
            this.bestScore.string = cc.sys.localStorage.getItem('BestScore');
            return;
        }
        this.bestScore.string = 0;
    },
    _updateBestScore: function _updateBestScore() {
        if (+this.scoreTotal.string > +this.bestScore.string) {
            this.bestScore.string = this.scoreTotal.string;
            cc.sys.localStorage.setItem('BestScore', +this.bestScore.string);
        }
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
        //# sourceMappingURL=GameController.js.map
        