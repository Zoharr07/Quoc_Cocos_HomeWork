
cc.Class({
    extends: cc.Component,

    properties: {
        fullName: cc.Label,
        email: cc.Label,
        account: cc.Label,
        passwords: cc.Label,
        userPrefs: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.getFullName = this.getFullName.bind(this);
        this.node.setUserData = this.setUserData.bind(this);
        this.setUserData("null", "null", "null", "null");
    },

    start() {

    },

    // update (dt) {},

    getFullName() {
        return this.fullName.string;
    },

    setUserData(name, mail, acc, pass) {
        this.fullName.string = name;
        this.email.string = mail;
        this.account.string = acc;
        this.passwords.string = pass;
    }
});
