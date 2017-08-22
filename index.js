const electron = require('electron')
const{app, BrowserWindow} = electron

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        widh: 800,
        height: 600
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})