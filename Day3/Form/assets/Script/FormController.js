
cc.Class({
    extends: cc.Component,

    properties: {
        mainForm: cc.Node,
        addButton: cc.Button,
        wellcomePopup: cc.Node,

        nameInput: cc.EditBox,
        emailInput: cc.EditBox,
        userNameInput: cc.EditBox,
        passInput: cc.EditBox,
        passConfirmInput: cc.EditBox,

        nameFlag: false,
        emailFlag: false,
        userNameFlag: false,
        passFlag: false,
        confirmFlag: false,

        userArg: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.mainForm.active = false;
        this.node.getUserArg = this.getUserArg.bind(this)
    },

    start() {
        this._resetInput();

    },

    update(dt) {
        if (this.checkFlag()) {
            this.addButton.interactable = true;
        } else this.addButton.interactable = false;
    },

    loadFormBtn() {
        this.mainForm.active = true;
    },

    backBtn() {
        this.mainForm.active = false;
    },

    addBtn() {
        let newUser = [this.nameInput.string, this.emailInput.string, this.userNameInput.string, this.passInput.string];
        this.userArg.push(newUser);
        this._resetInput();
        this.wellcomePopup.active = true;
        this.mainForm.active = false;

        cc.log("add new user");
        cc.log(this.userArg);
    },

    _resetInput() {
        this.nameInput.string = "";
        this.emailInput.string = "";
        this.userNameInput.string = "";
        this.passInput.string = "";
        this.passConfirmInput.string = "";

        this.addButton.interactable = false;
    },

    checkFlag() {
        let flag = false;
        if (this.node.validatePassConfirm() == true && this.node.validateEmail() == true && this.node.validateFullName() == true && this.node.validatePass() == true && this.node.validateUserName() == true) {
            flag = true;
        }
        cc.log(flag, this.node.validateFullName(), this.node.validateEmail(), this.node.validateUserName(), this.node.validatePass(), this.node.validatePassConfirm())
        return flag;
    },
    getUserArg() {
        return this.userArg;
    },
});
