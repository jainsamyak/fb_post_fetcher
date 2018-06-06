const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
var http = require('http')
var fs = require('fs')
//create a server object:
//the server object listens on port 8080
let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    var http = require('http'),
        fs = require('fs');


    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        http.createServer(function (request, response) {
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }).listen(8080);
    });
    win.loadURL('http://localhost:8080')
}

app.on('ready', createWindow) 

