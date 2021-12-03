cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MyComponent";// This is the code file name
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "foobar";
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    },
    callback: function (event, customEventData) {
        // here event is a Event object, you can get events sent to the event node node
        var node = event.target;
        var button = node.getComponent(cc.Button);
        cc.log('helo')
        // here the customEventData parameter is equal to the one you set before the "foobar"
    }
});