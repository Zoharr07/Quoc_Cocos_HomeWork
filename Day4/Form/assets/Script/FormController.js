
cc.Class({
    extends: cc.Component,

    properties: {
        mainForm: cc.Node,
        addButton: cc.Button,
        wellcomePopup: cc.Node,
        accountList: cc.Node,

        userPrefabs: cc.Prefab,
        accountScrollView: cc.ScrollView,
        popupNameLbl: cc.Label,

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
        this.node.getUserArg = this.getUserArg.bind(this)
        this.mainForm.active = false;
        this.wellcomePopup.active = false;
        this.accountList.active = false;
    },

    start() {
        this._resetInput();
    },

    update(dt) {

    },

    loadFormBtn() {
        this.mainForm.active = true;
    },

    loadAccountList() {
        this.wellcomePopup.active = false
        this.accountList.active = true;
    },

    backBtn() {
        this.mainForm.active = false;
    },

    addBtn() {
        if (!this._checkFlag()) return
        let newUser = cc.instantiate(this.userPrefabs);
        //ewUser.node.changeUserData(this.nameInput.string, this.emailInput.string, this.userNameInput.string, this.passInput.string);
        newUser.parent = this.accountScrollView.content;
        this.popupNameLbl.string = this.userNameInput.string;
        cc.log(newUser);
        this.userArg.push(newUser);
        cc.log(this.userArg);

        this._resetInput();

        this.wellcomePopup.active = true;
        this.mainForm.active = false;
    },

    _resetInput() {
        this.node.resetName();
        this.node.resetEmail();
        this.node.resetUserName();
        this.node.resetPass();
        this.node.resetConfirm();

        //this.addButton.interactable = false;
    },

    _checkFlag() {
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
