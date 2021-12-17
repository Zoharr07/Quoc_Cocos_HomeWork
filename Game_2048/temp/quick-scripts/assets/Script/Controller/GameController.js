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
                console.log('release up key');
                //Emiter.instance.emit('moveunit', 'up');
                this._moveUp();
                break;
            case cc.macro.KEY.down:
                console.log('release down key');
                // Emiter.instance.emit('moveunit', 'down');
                this._moveDown();
                break;
            case cc.macro.KEY.left:
                console.log('release left key');
                // Emiter.instance.emit('moveunit', 'left');
                break;
            case cc.macro.KEY.right:
                console.log('release right key');
                // Emiter.instance.emit('moveunit', 'right');
                break;
        }
        cc.tween(this.node).delay(0.25).call(function () {
            _this.instanceRandomUnit();
            _this._canPress = true;
        }).start();
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
        random();
        while (this._boardUnitArgs[randX][randY] != null) {
            random();
        }this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        cc.log(this._boardUnitArgs, 'add unit, total ', this._maxObj);

        cc.tween(unit).to(0.1, { scale: 1.1 }, { easing: 'elasticOut' }).to(0.1, { scale: 1 }).start();

        function random() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
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
            for (var x = 0; x < this._row; x++) {
                if (this._boardUnitArgs[x][y] != null) {
                    if (x == 0) continue;
                    if (this._boardUnitArgs[0][y] == null) {
                        this._movePosition(x, y, 0);
                    } else {
                        var index = 0;
                        for (var i = 0; i < x; i++) {
                            if (this._boardUnitArgs[i][y] != null) index = i + 1;
                        }
                        if (index == x) continue;
                        if (this._boardUnitArgs[index][y] == null) this._movePosition(x, y, index);
                    }
                }
            }
        }
    },
    _moveDown: function _moveDown() {
        for (var y = this._col - 1; y >= 0; y--) {
            for (var x = this._row - 1; x >= 0; x--) {
                if (this._boardUnitArgs[x][y] != null) {
                    if (x == this._row - 1) continue;
                    if (this._boardUnitArgs[this._row - 1][y] == null) {
                        this._movePosition(x, y, this._row - 1);
                    } else {
                        var index = this._row - 1;
                        for (var i = this._row - 1; i > x; i--) {
                            if (this._boardUnitArgs[i][y] != null) index = i - 1;
                        }
                        if (index == x) continue;
                        if (this._boardUnitArgs[index][y] == null) this._movePosition(x, y, index);
                    }
                }
            }
        }
    },
    _movePosition: function _movePosition(x, y, index) {
        cc.log(x, y, index);
        var temp = this._boardUnitArgs[x][y];
        this._boardUnitArgs[x][y] = this._boardUnitArgs[index][y];
        this._boardUnitArgs[index][y] = temp;
        this._boardUnitArgs[index][y].moveUnit(this._boardPosition[index][y]);
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
        