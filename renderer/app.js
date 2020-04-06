const { ipcRenderer } = require('electron');
const items = require('./journals');
const {BrowserWindow} = require('electron').remote
const path = require('path')

let firstModal = document.getElementById('modal-1')
let secondModal = document.getElementById('modal-2')
let testButton = document.getElementById('test')

// testButton.addEventListener('click', (e) => {
//     // let win = new BrowserWindow({ frame: false })

//     const modalPath = path.join('file://', __dirname, '.about.html')
//     let win = new BrowserWindow({ 
//         width: 800, 
//         height: 500,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     })
  
//     win.on('close', () => { win = null })
//     win.loadURL(modalPath)
//     win.show()
// })

// Show modal-1

firstModal.addEventListener("click", (e) => {
    firstModal.style.display = "flex";
  });
  

  // Show modal-2

secondModal.addEventListener("click", (e) => {
    secondModal.style.display = "flex";
  });
  
