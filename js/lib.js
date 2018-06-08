
$(document).ready(function () {
    $('#btn-set-pg').on('click', function () {
        let ac_token = $('#txt_ac_token').val();
        let pg_name = $('#txt_pg_name').val();
        fetch_page(ac_token, pg_name);
    });
    $('#view_posts').on('click', function () {
        const BrowserWindow = require('electron').remote.BrowserWindow
        const path = require('path')

        const modalPath = path.join('file://', __dirname, './view.html')
        let win2 = new BrowserWindow({ frame: false })
        win2.on('close', function () { win = null })
        win2.loadURL(modalPath)
        win2.show()
    });
});

