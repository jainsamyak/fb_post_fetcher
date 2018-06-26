const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
let win

function createWindow() {
  win = new BrowserWindow({ width: 900, height: 750, backgroundColor: '#311B92', /* frame: false */ })
  win.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.webContents.openDevTools();
  
}

app.on('ready', createWindow)

const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('save-dialog', function (event) {
  const options = {
    title: 'Save File'
  }
  dialog.showSaveDialog(options, function (filename) {
    event.sender.send('saved-file', filename)
  })
})

