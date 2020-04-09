const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

let mainWindow;

function createWindow () {

  let winState = windowStateKeeper({
    defaultWidth: 1000, defaultHeight: 700
  })
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    x: winState.x, y: winState.y,
    minWidth: 500,
    minHeight: 600,
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
    mainWindow = null;
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