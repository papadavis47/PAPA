const { ipcRenderer, remote, shell } = require('electron');
const items = require('./journals');
const path = require('path')

let journal = document.getElementById('journal-entry')
let displayEntry = document.getElementById('modal-2')
let aboutPage = document.getElementById('modal-3')
let about = document.getElementById('aboutClickItem')
let entryForm = document.getElementById('modal-1')
let wrapper = document.getElementById('wrapper')
let showHome = document.getElementById('show-home')
let returnToMain = document.getElementById('backhome')





// Show modal-1 - Journal Entry

journal.addEventListener("click", (e) => {
    wrapper.style.display = "none"
    entryForm.style.display = "flex";
  });

// Hide modal-1
showHome.addEventListener('click', (e) => {
  wrapper.style.display = "block"
  entryForm.style.display = "none"
  
})
  

  // Show modal-2

displayEntry.addEventListener("click", (e) => {
    displayEntry.style.display = "flex";
  });
  

// Show modal-3 - About Page
about.addEventListener('click', (e) => {
  wrapper.style.display = 'none'
  aboutPage.style.display = 'flex'

})

// Return to main after About Page
returnToMain.addEventListener('click', (e) => {
  aboutPage.style.display = 'none'
  wrapper.style.display = 'block'
})



