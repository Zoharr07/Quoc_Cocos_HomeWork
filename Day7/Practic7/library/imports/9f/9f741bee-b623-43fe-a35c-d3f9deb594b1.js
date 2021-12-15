"use strict";
cc._RF.push(module, '9f741vutiND/qNc0/netZSx', 'SpineChar');
// Script/Ex2/SpineChar.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        spAnim: sp.Skeleton,
        bullet: cc.Prefab,
        mainNode: cc.Node,
        _canMove: true,
        _canJump: true,

        jumpHeight: 60,
        jumpDuration: 1.2,
        jumpDistance: 60,
        accel: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.spAnim.setMix('idle', 'walk', 0.2);
        this.spAnim.setMix('walk', 'idle', 0.2);
    },
    start: function start() {
        // this.spAnim.setAnimation(0, 'walk', true);
    },
    update: function update(dt) {
        // if (this.canMove) this.node.x += dt * 80;

    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on collision enter');
        cc.log(other, self);
        if (self.tag == 0 && other.tag == 2) {
            this._jump();
        }
        if (other.tag === 3) {
            this._canMove = false;
            this._shot(other, self);
        }
    },

    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
        if (other.tag === 2) {}
    },

    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
        // if (other.tag == 2) {
        //     cc.tween(this.node)
        //         .delay(0.4)
        //         .call(() => {
        //             this.spAnim.setAnimation(0, 'walk', true);
        //             this.canMove = true;
        //         })
        //         .start()
        // }
    },

    _moveLeft: function _moveLeft() {
        var _this = this;

        if (this.node.scaleX > 0) this.node.scaleX *= -1;
        if (this._canMove == false) return;
        this._canMove = false;
        cc.tween(this.node).call(function () {
            _this.spAnim.setAnimation(0, 'walk', false);
        }).by(0.8, { position: cc.v2(-30, 0) }).call(function () {
            _this.spAnim.addAnimation(0, 'idle', true);
            _this._canMove = true;
        }).start();
    },
    _moveRight: function _moveRight() {
        var _this2 = this;

        if (this.node.scaleX < 0) this.node.scaleX *= -1;
        if (this._canMove == false) return;
        this._canMove = false;
        cc.tween(this.node).call(function () {
            _this2.spAnim.setAnimation(0, 'walk', false);
        }).by(0.8, { position: cc.v2(30, 0) }).call(function () {
            _this2.spAnim.addAnimation(0, 'idle', true);
        }).call(function () {
            _this2._canMove = true;
        }).start();
    },
    _jump: function _jump() {
        cc.log(this._canJump);
        if (this._canJump == false) return;
        this._canJump = false;
        this._canMove = false;
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },
    _shot: function _shot(other, self) {
        var direct = 1;
        if (this.node.scaleX < 0) direct = -1;
        this.spAnim.setAnimation(0, 'shoot', false);
        var bullet = cc.instantiate(this.bullet);
        this.mainNode.addChild(bullet);
        bullet.position = cc.v2(this.node.x + 20 * direct, this.node.y + 25);
        cc.tween(bullet).by(10, { position: cc.v2(1000 * direct, 0) }).start();
    },


    setJumpAction: function setJumpAction() {
        var _this3 = this;

        var distance = this.jumpDistance;
        if (this.node.scaleX < 0) distance *= -1;
        var jump = cc.jumpBy(this.jumpDuration, cc.v2(distance, 0), this.jumpHeight, 1);
        return cc.sequence(cc.callFunc(function () {
            _this3.spAnim.setAnimation(0, 'jump', false);
        }), jump, cc.callFunc(function () {
            _this3.spAnim.setAnimation(0, 'idle', true);
        }), cc.callFunc(function () {
            _this3._canMove = true;
            _this3._canJump = true;
        }));
    },

    onKeyDown: function onKeyDown(event) {
        //if (!this._canGetKey) return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                console.log('Press left key');
                this._moveLeft();
                break;
            case cc.macro.KEY.right:
                console.log('Press right key');
                this._moveRight();
                break;
            case cc.macro.KEY.space:
                console.log('Press space key');
                this._shot();
                break;

        }
    }
});

cc._RF.pop();