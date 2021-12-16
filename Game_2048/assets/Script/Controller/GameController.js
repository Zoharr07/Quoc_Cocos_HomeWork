const Emiter = require('Emitter');
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


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._instanceBoardArray();
        Emiter.instance.addEvent('startGame', this._startGameFunc.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.instanceBackgroundUnit();
    },

    start() {

    },

    // update (dt) {},

    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                console.log('release up key');
                //Emiter.instance.emit('moveunit', 'up');
                this._moveUnit('up');
                break;
            case cc.macro.KEY.down:
                console.log('release down key');
                Emiter.instance.emit('moveunit', 'down');
                break;
            case cc.macro.KEY.left:
                console.log('release left key');
                Emiter.instance.emit('moveunit', 'left');
                break;
            case cc.macro.KEY.right:
                console.log('release right key');
                Emiter.instance.emit('moveunit', 'right');
                break;
        }
        this.instanceRandomUnit();
    },

    _moveUnit(moveDirect) {
        {
            if (moveDirect == 'up') {
                for (let i = 0; i < this._col; i++) {
                    for (let j = 0; j < this._row; j++) {
                        if (this._canMoveUp(i, j)) {
                            this._boardUnitArgs[i][j].moveUp();

                            this._boardUnitArgs[i][j - 1] = this._boardUnitArgs[i][j];
                            this._boardUnitArgs[i][j] = null;
                            cc.log(i, j)
                        }
                    }
                }
            }
        }
    },



    instanceRandomUnit() {
        this._maxObj++;
        if (this._maxObj > (this._row * this._col)) {
            cc.log('overGame');
            this._maxObj--;
            return;
        }
        let unit = cc.instantiate(this.unitPrefabs);
        let randX = 0;
        let randY = 0;
        random();
        //cc.log(randX, randY, this._boardPosition[randX][randY])
        while (this._boardUnitArgs[randX][randY] != null) {
            random();
        }
        this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        //cc.log(this._boardUnitArgs, 'add unit, total ', this._maxObj)

        function random() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
        cc.tween(unit)
            .to(0.1, { scale: 1.1 }, { easing: 'elasticOut' })
            .to(0.1, { scale: 1 })
            .start()
    },

    instanceBackgroundUnit() {
        for (let i = 1; i <= this._row; i++) {
            let rowBoard = [];
            for (let j = 1; j <= this._col; j++) {
                let unit = cc.instantiate(this.unitBG);
                let unitPos = cc.v2(((j - (this._col + 1) / 2) * this._distance), ((i - (this._row + 1) / 2) * this._distance))
                unit.position = unitPos;
                rowBoard.push(unitPos);
                this.nodeBG.addChild(unit);
            }
            this._boardPosition.push(rowBoard);
        }
        let minX = (1 - (this._col + 1) / 2) * this._distance;
        let maxX = (this._col - (this._col + 1) / 2) * this._distance;
        let minY = (1 - (this._row + 1) / 2) * this._distance;
        let maxY = (this._row - (this._row + 1) / 2) * this._distance;
        Emiter.instance.emit('setMinMaxPosition', minX, maxX, minY, maxY);
    },

    _startGameFunc() {
        this._clearBoardGame();
        this.instanceRandomUnit();
        this.instanceRandomUnit();
    },

    _instanceBoardArray() {
        for (let i = 0; i < this._row; i++) {
            let rowBoardArg = [];
            for (let j = 0; j < this._col; j++) {
                let empty = null;
                rowBoardArg.push(empty);
            }
            this._boardUnitArgs.push(rowBoardArg);
        }
    },

    _clearBoardGame() {
        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._col; j++) {
                if (this._boardUnitArgs[i][j] != null) {
                    this._boardUnitArgs[i][j].destroyNode();
                }
                this._boardUnitArgs[i][j] = null;
            }
        }
        this._maxObj = 0;
        cc.log(this._boardUnitArgs)
    },


    _canMoveUp(x, y) {
        if (y <= 0) return false;
        if (this._boardUnitArgs[x][y] == null) {
            cc.log('null obj');
            return false;
        }
        if (this._boardUnitArgs[x][y - 1] != null) {
            return false;
        } else return true;
    },
    _canMoveDown(x, y) {
        if (this._validatePosition(x, y) == false) return false;
        if (this._boardUnitArgs[x][y + 1] != null) {
            return false;
        } else return true;
    },
    _canMoveLeft(x, y) {
        if (this._validatePosition() == false) return false;
        if (this._boardUnitArgs[x - 1][y] != null) {
            return false;
        } else return true;
    },
    _canMoveRight(x, y) {
        if (this._validatePosition() == false) return false;
        if (this._boardUnitArgs[x + 1][y] != null) {
            return false;
        } else return true;
    },

    _validatePosition(x, y) {
        if (x <= 0 || x >= this._col || y <= 0 || y >= this._row) return false;
        if (this._boardUnitArgs[x][y] == null) {
            cc.log('null obj');
            return false;
        }
    }
});
