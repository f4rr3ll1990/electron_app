const remote = require('electron').remote
// получаем доступ к экспортированным методам из index.js
const main = remote.require('./index.js')
// получаем доступ к меню окна
const Menu = remote.require('electron').Menu
// создаем новое меню
const menu = Menu.buildFromTemplate([
    {
        label: 'Меню',
        submenu: [
            {
                label: 'тест',
                click: function(){
                    main.openWindow()
                }
            }
        ]
    }
])
// инициализируем меню
Menu.setApplicationMenu(menu)


let alertButton = document.getElementById('alert')
alertButton.addEventListener('click', () => {
    // вызов метода открытия окна из index.js
    main.openWindow() 
}, false)