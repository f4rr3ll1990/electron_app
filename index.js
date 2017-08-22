const electron = require('electron')
const{app, BrowserWindow} = electron

// Создаем главное окно приложения
app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        widh: 800,
        height: 600
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

// экспортируем метод, дабы он был доступен в main.js или других
exports.openWindow = () => {
    let miniWindow = new BrowserWindow({
        width: 400,
        height: 200
    })
    miniWindow.loadURL(`file://${__dirname}/miniWindow.html`)
}