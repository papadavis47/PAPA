
const { ipcRenderer, remote, shell } = require('electron');
const { BrowserWindow } = remote
const path = require('path')

let testLink = document.getElementById('test')



testLink.addEventListener('click', (e) => {
    let secondWindow = new BrowserWindow({ 
        width: 800, 
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        parent:mainWindow
    })
  
    secondWindow.on('close', () => { secondWindow = null })
    secondWindow.loadFile('./html/about.html')
    secondWindow.show()
})