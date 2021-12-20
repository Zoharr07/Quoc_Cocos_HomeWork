const Emiter = require('Emitter');
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
        _canPress: true,
        _canInstanceUnit: false,
    },

    onLoad() {
        Emiter.instance.addEvent('startGame', this._startGameFunc.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.instanceBackgroundUnit();
        this._instanceBoardArray();
        this._clearBoardGame();
    },

    onKeyUp: function (event) {
        if (this._canPress == false) return;
        this._canPress = false;
        switch (event.keyCode) {
            case cc.macro.KEY.up: this._moveUp();
                break;
            case cc.macro.KEY.down: this._moveDown();
                break;
            case cc.macro.KEY.left: this._moveLeft();
                break;
            case cc.macro.KEY.right: this._moveRight();
                break;
        }
    },

    instanceRandomUnit() {
        this._maxObj++;
        if (this._maxObj > (this._row * this._col)) return;
        let randX = 0;
        let randY = 0;
        while (this._boardUnitArgs[randX][randY] != null) randomXY();
        let unit = cc.instantiate(this.unitPrefabs);
        this._boardUnitArgs[randX][randY] = unit;
        this.boardUnit.addChild(unit);
        unit.position = this._boardPosition[randX][randY];
        unit.setUnitValue(randomValue());

        function randomXY() {
            randX = Math.floor(Math.random() * 4);
            randY = Math.floor(Math.random() * 4);
        }
        function randomValue() {
            let rand = Math.random();
            rand > 0.8 ? rand = 4 : rand = 2;
            return rand;
        }
    },

    _instanceUnit() {
        Emiter.instance.emit('playSoundSlide');
        cc.tween(this.node).delay(0.3).call(() => {
            this._canPress = true;
            if (this._maxObj >= 16 && this._canInstanceUnit == false) {
                this._updateBestScore();
                cc.log('end Game');
            }
            if (this._canInstanceUnit == false) return;
            this._canInstanceUnit = false;
            this.instanceRandomUnit();
        }).start();
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
        this._resetScore();
    },


    _moveUp() {
        for (let y = 0; y < this._col; y++) {
            for (let x = 0; x < this._row; x++) {
                let index = this._getIndex(x, y, 'col', 'forward');
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

    _moveDown() {
        for (let y = this._col - 1; y >= 0; y--) {
            for (let x = this._row - 1; x >= 0; x--) {
                let index = this._getIndex(x, y, 'col', 'backward');
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

    _moveLeft() {
        for (let x = 0; x < this._row; x++) {
            for (let y = 0; y < this._col; y++) {
                let index = this._getIndex(x, y, 'row', 'forward');
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

    _moveRight() {
        for (let x = this._row - 1; x >= 0; x--) {
            for (let y = this._col - 1; y >= 0; y--) {
                let index = this._getIndex(x, y, 'row', 'backward');
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

    _moveUnitPosition(currentX, currentY, indexX, indexY) {
        if (currentX == indexX && currentY == indexY) return;
        let temp = this._boardUnitArgs[currentX][currentY];
        this._boardUnitArgs[currentX][currentY] = this._boardUnitArgs[indexX][indexY];
        this._boardUnitArgs[indexX][indexY] = temp;
        this._boardUnitArgs[indexX][indexY].moveUnit(this._boardPosition[indexX][indexY]);
        this._canInstanceUnit = true;
    },

    _mergeUnit(x, y, indexX, indexY) {
        Emiter.instance.emit('playSoundAward');
        this._boardUnitArgs[x][y].setUnitValue(this._boardUnitArgs[x][y].getUnitValue() * 2);
        this._boardUnitArgs[indexX][indexY].destroyNode();
        this._boardUnitArgs[indexX][indexY] = null;
        this._addScore(this._boardUnitArgs[x][y].getUnitValue());
        this._maxObj--;
    },

    _getIndex(x, y, getType, sortType) {
        let index = null;
        if (getType == 'row') {
            index = y;
            if (sortType == 'forward')
                for (let i = this._col - 1; i > y; i--) {
                    if (this._boardUnitArgs[x][i] != null) index = i;
                }
            if (sortType == 'backward')
                for (let i = 0; i < y; i++) {
                    if (this._boardUnitArgs[x][i] != null) index = i;
                }
        }
        if (getType == 'col') {
            index = x;
            if (sortType == 'forward')
                for (let i = this._row - 1; i > x; i--) {
                    if (this._boardUnitArgs[i][y] != null) index = i;
                }
            if (sortType == 'backward')
                for (let i = 0; i < x; i++) {
                    if (this._boardUnitArgs[i][y] != null) index = i;
                }
        }
        return index;
    },

    _addScore(score) {
        this.scoreTotal.string = (+score) + (+this.scoreTotal.string);
    },

    _resetScore() {
        this.scoreTotal.string = 0;
        if (cc.sys.localStorage.getItem('BestScore')) {
            this.bestScore.string = cc.sys.localStorage.getItem('BestScore');
            return;
        }
        this.bestScore.string = 0;
    },

    _updateBestScore() {
        if ((+this.scoreTotal.string) > (+this.bestScore.string)) {
            this.bestScore.string = this.scoreTotal.string;
            cc.sys.localStorage.setItem('BestScore', (+this.bestScore.string));
        }
    },
});
