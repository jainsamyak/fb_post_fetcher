const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
const ProgressBar = require('electron-progressbar')
let win

function createWindow() {
  win = new BrowserWindow({ width: 900, height: 750, backgroundColor: '#311B92', /* frame: false */ })
  win.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.webContents.openDevTools();
  var progressBar = new ProgressBar({
    indeterminate: false,
    text: 'Preparing application',
    detail: 'Hold On....',
  });
  progressBar
    .on('completed', function () {
      console.info(`completed...`);
      progressBar.detail = 'Done';
    })
    .on('aborted', function () {
      console.info(`Aborted...`);
    })
    .on('progress', function (value) {
      progressBar.detail = `Value ${value} out of ${progressBar.getOptions().maxValue}...`;
    });
    setInterval(function() {
      if(!progressBar.isCompleted()){
        progressBar.value += 1;
      }
    }, 20);
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

