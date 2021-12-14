
cc.Class({
    extends: cc.Component,

    properties: {
        spAnim: sp.Skeleton,
        canMove: true,
        canJump: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
    },

    start() {
        this.spAnim.setAnimation(0, 'walk', true);
    },

    update(dt) {
        if (this.canMove) this.node.x += dt * 80;

    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        cc.log(other, self);
        if (self.tag === 0 && other.tag == 1) this._jump();
        if (other.tag === 2) {
            this.canMove = false;
            this._shot();

        }
    },

    onCollisionStay: function (other, self) {
        console.log('on collision stay');
        if (other.tag === 2) {

        }
    },

    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        cc.tween(this.node)
            .delay(0.4)
            .call(() => {
                this.spAnim.setAnimation(0, 'walk', true);
                this.canMove = true;
            })
            .start()
    },


    _moveLeft() {
        cc.tween(this.node).by(3, { position: cc.v2(-120, 0) });
    },
    _moveRight() {
        //cc.tween(this.node).by(3, { position: cc.v2(-120, 0) });
    },

    _jump() {
        if (this.canJump === false) return;
        this.canJump = false;
        //this.spAnim.setAnimation(0, 'jump', false);
        let seq = cc.sequence(
            cc.callFunc(() => {
                //this.spAnim.setAnimation(0, 'jump', false);
                this.canMove = false;
                cc.log('ss')
            }),
            cc.jumpBy(1, 60, 0, 100, 1),
            cc.callFunc(() => {
                this.canMove = true;
                this.canJump = true;
                cc.log('dd')
                this.spAnim.setAnimation(0, 'walk', true);
            }),
        )
        //action.easing(cc.easeCubicActionOut(1));
        this.node.runAction(seq);
        //this.spAnim.addAnimation(0, 'walk', true);
    },

    _shot() {
        this.spAnim.setAnimation(0, 'shoot', false);


    },


    onKeyDown(event) {
        if (!this._canGetKey) return;
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
                this._jump();
                break;
            // case cc.macro.KEY.escape:
            //     console.log('Press esc key');
            //     Emiter.instance.emit('reset');
            //     break;
        }
    },
});
