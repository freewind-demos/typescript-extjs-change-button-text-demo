Ext.onReady(() => {
    new Ext.button.Button({
        text: 'button',
        renderTo: 'main',
        listeners: {
            click: () => {
                alert('button clicked!')
            }
        }
    })
})
