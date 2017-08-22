const remote = require('electron').remote
// получаем доступ к экспортированным методам из index.js
const main = remote.require('./index.js')


let alertButton = document.getElementById('alert')
alertButton.addEventListener('click', () => {
    // вызов метода открытия окна из index.js
    main.openWindow() 
}, false)