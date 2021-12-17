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
        _canPress: true,


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emiter.instance.addEvent('startGame', this._startGameFunc.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.instanceBackgroundUnit();
        this._instanceBoardArray();
    },

    start() {

    },

    // update (dt) {},

    onKeyUp: function (event) {
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
        cc.tween(this.node).delay(0.25).call(() => {
            this.instanceRandomUnit();
            this._canPress = true;
        }).start();
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
        while (this._boardUnitArgs[randX][randY] != null) random();
        this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        cc.log(this._boardUnitArgs, 'add unit, total ', this._maxObj)

        cc.tween(unit)
            .to(0.1, { scale: 1.1 }, { easing: 'elasticOut' })
            .to(0.1, { scale: 1 })
            .start();

        function random() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
    },

    instanceBackgroundUnit() {
        for (let i = 1; i <= this._row; i++) {
            let rowBoard = [];
            for (let j = 1; j <= this._col; j++) {
                let unit = cc.instantiate(this.unitBG);
                let unitPos = cc.v2(((j - (this._col + 1) / 2) * this._distance), -((i - (this._row + 1) / 2) * this._distance))
                unit.position = unitPos;
                rowBoard.push(unitPos);
                this.nodeBG.addChild(unit);
            }
            this._boardPosition.push(rowBoard);
        }
    },

    _startGameFunc() {
        this._clearBoardGame();
        this.instanceRandomUnit();
        this.instanceRandomUnit();
    },

    _instanceBoardArray() {
        for (let i = 0; i < this._row; i++) {
            let rowBoardArg = [];
            for (let j = 0; j < this._col; j++) rowBoardArg.push(null);
            this._boardUnitArgs.push(rowBoardArg);
        }
    },

    _clearBoardGame() {
        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._col; j++) {
                if (this._boardUnitArgs[i][j] != null) this._boardUnitArgs[i][j].destroyNode();
                this._boardUnitArgs[i][j] = null;
            }
        }
        this._maxObj = 0;
    },


    _moveUp() {
        for (let y = 0; y < this._col; y++) {
            for (let x = 0; x < this._row; x++) {
                if (this._boardUnitArgs[x][y] != null) {
                    if (x == 0) continue;
                    if (this._boardUnitArgs[0][y] == null) {
                        this._movePosition(x, y, 0)
                    } else {
                        let index = 0;
                        for (let i = 0; i < x; i++) {
                            if (this._boardUnitArgs[i][y] != null) index = i + 1;
                        }
                        if (index == x) continue;
                        if (this._boardUnitArgs[index][y] == null) this._movePosition(x, y, index);
                    }
                }
            }
        }
    },

    _moveDown() {
        for (let y = this._col - 1; y >= 0; y--) {
            for (let x = this._row - 1; x >= 0; x--) {
                if (this._boardUnitArgs[x][y] != null) {
                    if (x == this._row - 1) continue;
                    if (this._boardUnitArgs[this._row - 1][y] == null) {
                        this._movePosition(x, y, this._row - 1)
                    } else {
                        let index = this._row - 1;
                        for (let i = this._row - 1; i > x; i--) {
                            if (this._boardUnitArgs[i][y] != null) index = i - 1;
                        }
                        if (index == x) continue;
                        if (this._boardUnitArgs[index][y] == null) this._movePosition(x, y, index);
                    }
                }
            }
        }
    },

    _moveLeft() {
        for (let y = this._col - 1; y >= 0; y--) {
            for (let x = this._row - 1; x >= 0; x--) {
                if (this._boardUnitArgs[x][y] != null) {
                    if (x == this._row - 1) continue;
                    if (this._boardUnitArgs[this._row - 1][y] == null) {
                        this._movePosition(x, y, this._row - 1)
                    } else {
                        let index = this._row - 1;
                        for (let i = this._row - 1; i > x; i--) {
                            if (this._boardUnitArgs[i][y] != null) index = i - 1;
                        }
                        if (index == x) continue;
                        if (this._boardUnitArgs[index][y] == null) this._movePosition(x, y, index);
                    }
                }
            }
        }
    },


    _movePosition(x, y, index) {
        cc.log(x, y, index);
        let temp = this._boardUnitArgs[x][y];
        this._boardUnitArgs[x][y] = this._boardUnitArgs[index][y];
        this._boardUnitArgs[index][y] = temp;
        this._boardUnitArgs[index][y].moveUnit(this._boardPosition[index][y]);
    },


});
