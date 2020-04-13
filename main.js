const { app, BrowserWindow, ipcMain, webContents } = require('electron')
const windowStateKeeper = require('electron-window-state')

let mainWindow;
let aboutWindow;
let entryWindow;
let spaceWindow;
let scrapbookWindow;

function createWindow () {

  let winState = windowStateKeeper({
    defaultWidth: 1000, defaultHeight: 700
  })
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    x: winState.x, y: winState.y,
    minWidth: 660,
    minHeight: 700,
    icon: __dirname+'/renderer/assets/icons/fatherhood1.png',
    // frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./renderer/html/main.html')

  winState.manage(mainWindow)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Listen for window being closed
  mainWindow.on("closed", () => {
    app.quit();
  });
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Here is where I have the about window information

function createAboutWindow() {

  aboutWindow = new BrowserWindow({
    fullscreen: true,
    width: 1000,
    height:800,
    minWidth: 660,
    minHeight: 700,
    icon: __dirname+'/renderer/assets/icons/fatherhood1.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  aboutWindow.loadFile('./renderer/html/about.html')

  // Listen for window being closed
  aboutWindow.on("closed", () => {
    aboutWindow = null;
  });
  
}

// Listen for aboutpagewindow click

ipcMain.on('aboutPage', () => {
  createAboutWindow();
});



// Here is where I create the journal Entry window

function createEntryWindow() {

  entryWindow = new BrowserWindow({
    parent: mainWindow,
    width: 1000,
    height:800,
    minWidth: 660,
    minHeight: 700,
    icon: __dirname+'/renderer/assets/icons/fatherhood1.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  entryWindow.loadFile('./renderer/html/journalForm.html')

  // Listen for window being closed
  entryWindow.on("closed", () => {
    aboutWindow = null;
  });
  
}

// listen for entryWindow click
ipcMain.on('write', () => {
  createEntryWindow();
})

// Here is where I create the SpaceWindow ---------------------------------------------

function createSpaceWindow() {

  spaceWindow = new BrowserWindow({
    // parent: entryWindow,
    // modal: true,
    width: 1000,
    height:800,
    minWidth: 660,
    minHeight: 700,
    icon: __dirname+'/renderer/assets/icons/fatherhood1.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  spaceWindow.loadFile('./renderer/html/space.html')

  // Listen for window being closed
  spaceWindow.on("closed", () => {
    aboutWindow = null;
  }); 
}

ipcMain.on('section:add', () => {
  createSpaceWindow();
})

// Listen for value from textarea submit

ipcMain.on('entry:add', (e, thought) => {
  console.log(thought)
  // entryWindow.close()
  // console.log(thought)   
  mainWindow.webContents.send('entry:add', thought)
  
})

// createScrapBookWindow()

function createScrapBookWindow() {

  scrapbookWindow = new BrowserWindow({
    // parent: entryWindow,
    // modal: true,
    fullscreen: true,
    width: 1000,
    height:800,
    minWidth: 660,
    minHeight: 700,
    icon: __dirname+'/renderer/assets/icons/fatherhood1.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  scrapbookWindow.loadFile('./renderer/html/scrapbook.html')

  // Listen for window being closed
  scrapbookWindow.on("closed", () => {
    aboutWindow = null;
  }); 
}


// listen for entryWindow click
ipcMain.on('scrapBookPage', (e) => {
  createScrapBookWindow();
})
