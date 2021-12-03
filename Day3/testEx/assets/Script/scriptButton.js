cc.Class({
    extends: cc.Component,
    properties: {
        button: cc.Button
    },
    onLoad: function () {
        this.button.node.on('click', this.callback, this);
    },
    callback: function (button) {
        // do whatever you want with button
        // In addition, attention to this way registered events, can not pass
        //customEventData
        console.log('helo')
    }
});