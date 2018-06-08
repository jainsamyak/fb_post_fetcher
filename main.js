const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
let win

function createWindow() {
    win = new BrowserWindow({ width: 900, height: 750 })
    win.loadURL(url.format ({ 
        pathname: path.join(__dirname, './index.html'), 
        protocol: 'file:', 
        slashes: true 
     }))
     win.webContents.openDevTools();
}

app.on('ready', createWindow) 

