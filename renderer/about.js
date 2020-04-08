
const { ipcRenderer, remote, shell } = require('electron');
const { BrowserWindow } = remote
const path = require('path')

let testLink = document.getElementById('test')
