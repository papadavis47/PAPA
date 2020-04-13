// Modules
const electron = require("electron");
const { ipcRenderer } = require("electron");

// DOM variables

// Used for showing and hiding journal entries
const displayEntry = document.getElementById("modal-2");
// Wrapping the main window content
const wrapper = document.getElementById("wrapper");
// Holding the h1 that contains the title - this is clickable
const about = document.getElementById("aboutClickItem");
// This is the button that creates the journal entry form when clicked
const entryForm = document.getElementById("journal-entry");
// This is the div where I am placing journal entries
const journalHolder = document.getElementById("entry");
// This is the button to create a new section
const section = document.getElementById("section");
// This is the button for creating a scrapbook
const scrapbook = document.getElementById("scrapbook");

// This will launch the About Page
about.addEventListener("click", (e) => {
  ipcRenderer.send("aboutPage");
});

//-----------------------This is the logic to show the form to input a journal entry ---------
// ----------------------And prepare the main window to hold the entry ------------------------
entryForm.addEventListener("click", (e) => {
  wrapper.style.display = "none";
  displayEntry.style.display = "flex";
  ipcRenderer.send("write");
});

// Add Journal Entry
ipcRenderer.on("entry:add", (e, thought) => {
  const paragraph = document.createElement("div");
  const node = document.createTextNode(thought);
  paragraph.appendChild(node);
  journalHolder.appendChild(paragraph);
});

// Launching the spaceWindow
section.addEventListener("click", (e) => {
  // Create a section
  ipcRenderer.send("section:add");
});

// Launch the Scrapbook Window
scrapbook.addEventListener("click", (e) => {
  ipcRenderer.send('scrapBookPage')
})
