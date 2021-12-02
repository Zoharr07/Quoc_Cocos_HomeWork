// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        userID: 20,
        userName: "Foobar",
        frames: [cc.SpriteFrame],
        score: {
            default: 10,
            type: Number,
            serializable: true,
            tooltip: 'test serializable true',
        },
        score2: {
            default: 20,
            type: Number,
            serializable: false,
            tooltip: 'test serializable false',
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var father = new cc.Class({
            ext: "",
            ctor() {
                this.ext = "sss";
                cc.log('contruct')
            },
            properties: {
                name: "aaa"
            },
        })
        var child = new cc.Class({
            extends: father,
        })
        var chil = new child();
        cc.log(chil.name)
        cc.log(chil.ext)
    },

    start() {


    },

    update(dt) {
        // this.score++;
        // cc.log(this.score);
        // this.score2++;
        // cc.log(this.score2);
    },
});
