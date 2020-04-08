const { ipcRenderer, remote, shell } = require('electron');
const items = require('./journals');
const path = require('path')

let journal = document.getElementById('journal-entry')
let secondModal = document.getElementById('modal-2')
let testLink = document.getElementById('test')
let firstModal = document.getElementById('modal-1')
let wrapper = document.getElementById('wrapper')
let showHome = document.getElementById('show-home')



// Show modal-1

journal.addEventListener("click", (e) => {
    wrapper.style.display = "none"
    firstModal.style.display = "block";
  });

// Hide modal-1
showHome.addEventListener('click', (e) => {
  wrapper.style.display = "block"
  firstModal.style.display = "none"
  
})
  

  // Show modal-2

secondModal.addEventListener("click", (e) => {
    secondModal.style.display = "flex";
  });
  
