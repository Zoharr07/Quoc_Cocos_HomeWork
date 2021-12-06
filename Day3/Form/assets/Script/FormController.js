
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
        useNameFlag: false,
        passFlag: false,
        confirmFlag: false,

        userArg: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.mainForm.active = false;
        this.wellcomePopup.active = false;
    },

    start() {
        this._resetInput();

    },

    update(dt) {
        if (this.nameFlag && this.emailFlag && this.useNameFlag && this.passFlag && this.confirmFlag) {
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
        this.nameFlag = false;
        this.emailFlag = false;
        this.useNameFlag = false;
        this.passFlag = false;
        this.confirmFlag = false;
        this.addButton.interactable = false;
    }
});
