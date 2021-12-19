"use strict";
cc._RF.push(module, '35fcbcIcmhHL5aekjDe2BLq', 'GameController');
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
        _boardPosition: [],
        _boardUnitArgs: [],
        _row: 4,
        _col: 4,
        _distance: 200,
        _maxObj: 0,
        _canPress: true

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Emiter.instance.addEvent('startGame', this._startGameFunc.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.instanceBackgroundUnit();
        this._instanceBoardArray();
    },
    start: function start() {},


    // update (dt) {},

    onKeyUp: function onKeyUp(event) {
        var _this = this;

        if (this._canPress == false) return;
        this._canPress = false;
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this._moveUp();
                break;
            case cc.macro.KEY.down:
                this._moveDown();
                break;
            case cc.macro.KEY.left:
                this._moveLeft();
                break;
            case cc.macro.KEY.right:
                this._moveRight();
                break;
        }
        //all even call this func -> need check keyinput!!!
        if (event.keyCode == cc.macro.KEY.up || event.keyCode == cc.macro.KEY.down || event.keyCode == cc.macro.KEY.left || event.keyCode == cc.macro.KEY.right) {
            cc.tween(this.node).delay(0.25).call(function () {
                _this.instanceRandomUnit();
                _this._canPress = true;
            }).start();
        }
    },

    instanceRandomUnit: function instanceRandomUnit() {
        this._maxObj++;
        if (this._maxObj > this._row * this._col) {
            cc.log('overGame');
            this._maxObj--;
            return;
        }
        var unit = cc.instantiate(this.unitPrefabs);
        var randX = 0;
        var randY = 0;
        randomXY();
        while (this._boardUnitArgs[randX][randY] != null) {
            randomXY();
        }this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        unit.setUnitValue(randomValue());
        cc.log(this._boardUnitArgs, 'add unit, total ', this._maxObj);

        function randomXY() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
        function randomValue() {
            var rand = Math.random();
            rand > 0.75 ? rand = 4 : rand = 2;
            return rand;
        }
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
    },
    _moveUp: function _moveUp() {
        for (var y = 0; y < this._col; y++) {
            for (var x = 1; x < this._row; x++) {
                if (this._boardUnitArgs[x][y] == null) continue;
                if (this._boardUnitArgs[0][y] == null) {
                    this._moveUnitPosition(x, y, 0, y);
                    continue;
                }
                var index = 0;
                for (var i = 0; i < x; i++) {
                    if (this._boardUnitArgs[i][y] != null) index = i + 1;
                }if (this._boardUnitArgs[index][y] == null) this._moveUnitPosition(x, y, index, y);
            }
        }
    },
    _moveDown: function _moveDown() {
        for (var y = this._col - 1; y >= 0; y--) {
            for (var x = this._row - 2; x >= 0; x--) {
                if (this._boardUnitArgs[x][y] == null) continue;
                if (this._boardUnitArgs[this._row - 1][y] == null) {
                    this._moveUnitPosition(x, y, this._row - 1, y);
                    continue;
                }
                var index = this._row - 1;
                for (var i = this._row - 1; i > x; i--) {
                    if (this._boardUnitArgs[i][y] != null) index = i - 1;
                }if (this._boardUnitArgs[index][y] == null) this._moveUnitPosition(x, y, index, y);
            }
        }
    },
    _moveLeft: function _moveLeft() {
        for (var x = 0; x < this._row; x++) {
            for (var y = 0; y < this._col; y++) {
                var index = this._getIndex(x, y, 'row', 'forward');
                if (index == y) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(x, index, x, y);
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
    },
    _moveRight: function _moveRight() {
        for (var x = this._row - 1; x >= 0; x--) {
            for (var y = this._col - 1; y >= 0; y--) {
                var index = this._getIndex(x, y, 'row', 'backward');
                if (index == y) continue;
                if (this._boardUnitArgs[x][y] == null) {
                    this._moveUnitPosition(x, index, x, y);
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
    },
    _moveUnitPosition: function _moveUnitPosition(currentX, currentY, indexX, indexY) {
        var temp = this._boardUnitArgs[currentX][currentY];
        this._boardUnitArgs[currentX][currentY] = this._boardUnitArgs[indexX][indexY];
        this._boardUnitArgs[indexX][indexY] = temp;
        this._boardUnitArgs[indexX][indexY].moveUnit(this._boardPosition[indexX][indexY]);
    },
    _crossUnit: function _crossUnit(x, y, direct) {
        cc.log(x, y);
        //if (this._boardUnitArgs[x][y] == null || this._boardUnitArgs[x][y - 1]) return;
        if (direct == 'up') {
            if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x - 1][y].getUnitValue()) return true;
        }
        if (direct == 'down') {
            if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x - 1][y].getUnitValue()) return true;
        }
        if (direct == 'left') {
            if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x][y - 1].getUnitValue()) {
                this._boardUnitArgs[x][y - 1].setUnitValue(this._boardUnitArgs[x][y - 1].getUnitValue() * 2);
                this._boardUnitArgs[x][y].destroyNode();
                this._boardUnitArgs[x][y] = null;
                this._maxObj--;
            }
        }
        if (direct == 'right') {
            if (this._boardUnitArgs[x][y].getUnitValue() == this._boardUnitArgs[x][y + 1].getUnitValue()) {
                this._boardUnitArgs[x][y + 1].setUnitValue(this._boardUnitArgs[x][y + 1].getUnitValue() * 2);
                this._boardUnitArgs[x][y].destroyNode();
                this._boardUnitArgs[x][y] = null;
                this._maxObj--;
            }
        }
    },
    _mergeUnit: function _mergeUnit(x, y, indexX, indexY) {
        this._boardUnitArgs[x][y].setUnitValue(this._boardUnitArgs[x][y].getUnitValue() * 2);
        this._boardUnitArgs[indexX][indexY].destroyNode();
        this._boardUnitArgs[indexX][indexY] = null;
        this._maxObj--;
    },
    _getIndex: function _getIndex(x, y, getType, sortType) {
        var index = null;
        if (getType == 'row') {
            index = y;
            if (sortType == 'forward') for (var i = this._col - 1; i > y; i--) {
                if (this._boardUnitArgs[x][i] != null) {
                    index = i;
                }
            }
            if (sortType == 'backward') for (var _i = 0; _i < y; _i++) {
                if (this._boardUnitArgs[x][_i] != null) {
                    index = _i;
                }
            }
        }
        if (getType == 'col') {
            index = x;
            if (sortType == 'forward') for (var _i2 = this._row - 1; _i2 > x; _i2--) {
                if (this._boardUnitArgs[_i2][y] != null) {
                    index = _i2;
                }
            }
            if (sortType == 'backward') for (var _i3 = 0; _i3 < x; _i3++) {
                if (this._boardUnitArgs[_i3][x] != null) {
                    index = _i3;
                }
            }
        }
        return index;
    }
});

cc._RF.pop();