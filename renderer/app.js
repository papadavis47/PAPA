const { ipcRenderer, remote, shell } = require('electron');
const { BrowserWindow } = remote
const items = require('./journals');
const path = require('path')

let firstModal = document.getElementById('modal-1')
let secondModal = document.getElementById('modal-2')
let testLink = document.getElementById('test')



// Show modal-1

firstModal.addEventListener("click", (e) => {
    firstModal.style.display = "block";
  });
  

  // Show modal-2

secondModal.addEventListener("click", (e) => {
    secondModal.style.display = "flex";
  });
  
