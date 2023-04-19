Ext.onReady(() => {
    new Ext.button.Button({
        text: 'button',
        renderTo: 'main',
        listeners: {
            // NOTE 要使用 `function()` 以确保 'this'的正确
            click: function () {
                console.log(this);
                // Not work:
                // this.text = 'new text ' + Date.now();
                // should use the setter
                this.setText('new text ' + Date.now());
            }
        }
    })
})
