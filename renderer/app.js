const { ipcRenderer } = require('electron');

let displayEntry = document.getElementById('modal-2')

let wrapper = document.getElementById('wrapper')





// // Show modal-1 - Journal Entry

// journal.addEventListener("click", (e) => {
//     wrapper.style.display = "none"
//     entryForm.style.display = "flex";
//   });

// Hide modal-1
// showHome.addEventListener('click', (e) => {
//   wrapper.style.display = "block"
//   entryForm.style.display = "none"
  
// })
  

  // Show modal-2

displayEntry.addEventListener("click", (e) => {
    displayEntry.style.display = "flex";
  });
  



