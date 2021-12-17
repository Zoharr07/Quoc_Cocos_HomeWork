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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.instanceBackgroundUnit();
        this._instanceBoardArray();
    },

    start() {
    },

    // update (dt) {},

    onKeyDown: function (event) {
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
        if (event.keyCode == cc.macro.KEY.up || event.keyCode == cc.macro.KEY.down ||
            event.keyCode == cc.macro.KEY.left || event.keyCode == cc.macro.KEY.right) {
            cc.tween(this.node).delay(0.25).call(() => {
                this.instanceRandomUnit();
                this._canPress = true;
            }).start();
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
        randomXY();
        while (this._boardUnitArgs[randX][randY] != null) randomXY();
        this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        unit.setUnitValue(randomValue());
        cc.log(this._boardUnitArgs, 'add unit, total ', this._maxObj)

        cc.tween(unit)
            .to(0.1, { scale: 1.1 }, { easing: 'elasticOut' })
            .to(0.1, { scale: 1 })
            .start();

        function randomXY() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
        function randomValue() {
            let rand = Math.random();
            rand > 0.75 ? rand = 4 : rand = 2;
            // if (this._maxObj < 3) rand = 2;
            return rand;
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
                if (this._boardUnitArgs[x][y] == null) continue;
                if (x == 0) continue;
                if (this._boardUnitArgs[0][y] == null) {
                    this._movePositionX(x, y, 0)
                } else {
                    let index = 0;
                    for (let i = 0; i < x; i++) {
                        if (this._boardUnitArgs[i][y] != null) index = i + 1;
                    }
                    if (index == x) continue;
                    if (this._boardUnitArgs[index][y] == null) this._movePositionX(x, y, index);
                }
            }
        }
    },

    _moveDown() {
        for (let y = this._col - 1; y >= 0; y--) {
            for (let x = this._row - 1; x >= 0; x--) {
                if (this._boardUnitArgs[x][y] == null) continue;
                if (x == this._row - 1) continue;
                if (this._boardUnitArgs[this._row - 1][y] == null) {
                    this._movePositionX(x, y, this._row - 1)
                } else {
                    let index = this._row - 1;
                    for (let i = this._row - 1; i > x; i--) {
                        if (this._boardUnitArgs[i][y] != null) index = i - 1;
                    }
                    if (index == x) continue;
                    if (this._boardUnitArgs[index][y] == null) this._movePositionX(x, y, index);
                }
            }
        }
    },

    _moveLeft() {
        for (let x = 0; x < this._row; x++) {
            for (let y = 0; y < this._col; y++) {
                if (this._boardUnitArgs[x][y] == null) continue;
                if (y == 0) continue;
                if (this._boardUnitArgs[x][0] == null) {
                    this._movePositionY(x, y, 0)
                } else {
                    let index = 0;
                    for (let i = 0; i < y; i++) {
                        if (this._boardUnitArgs[x][i] != null) index = i + 1;
                    }
                    if (index == y) continue;
                    if (this._boardUnitArgs[x][index] == null) this._movePositionY(x, y, index);
                }
            }
        }
    },

    _moveRight() {
        for (let x = this._row - 1; x >= 0; x--) {
            for (let y = this._col - 1; y >= 0; y--) {
                if (this._boardUnitArgs[x][y] == null) continue;
                if (y == this._col - 1) continue;
                if (this._boardUnitArgs[x][this._col - 1] == null) {
                    this._movePositionY(x, y, this._col - 1)
                } else {
                    let index = this._col - 1;
                    for (let i = this._col - 1; i > y; i--) {
                        if (this._boardUnitArgs[x][i] != null) index = i - 1;
                    }
                    if (index == y) continue;
                    if (this._boardUnitArgs[x][index] == null) this._movePositionY(x, y, index);
                }
            }
        }
    },


    _movePositionX(x, y, index) {
        cc.log(x, y, index);
        let temp = this._boardUnitArgs[x][y];
        this._boardUnitArgs[x][y] = this._boardUnitArgs[index][y];
        this._boardUnitArgs[index][y] = temp;
        this._boardUnitArgs[index][y].moveUnit(this._boardPosition[index][y]);
    },

    _movePositionY(x, y, index) {
        cc.log(x, y, index);
        let temp = this._boardUnitArgs[x][y];
        this._boardUnitArgs[x][y] = this._boardUnitArgs[x][index];
        this._boardUnitArgs[x][index] = temp;
        this._boardUnitArgs[x][index].moveUnit(this._boardPosition[x][index]);
    },


});
