const { ipcRenderer } = require('electron');

let journal = document.getElementById('journal-entry')
let displayEntry = document.getElementById('modal-2')
let entryForm = document.getElementById('modal-1')
let wrapper = document.getElementById('wrapper')
let showHome = document.getElementById('show-home')





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
  



