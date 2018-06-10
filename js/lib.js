
$(document).ready(function () {
    $('#btn-set-pg').on('click', function () {
        let ac_token = $('#txt_ac_token').val();
        let pg_name = $('#txt_pg_name').val();
        window.localStorage.ac_token = ac_token;
        window.localStorage.pg_name = pg_name;
        fetch_page(ac_token, pg_name);
    });
    $('#nextBtn').on('click', function () {
        let pg_name = $('#txt_pg_name').val();
        if (!(pg_name === "")) {
            let ac_token = $('#txt_ac_token').val();
            window.localStorage.ac_token = ac_token;
            window.localStorage.pg_name = pg_name;
            fetch_page(ac_token, pg_name);
        }

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

    $('#transfer-pa').on('click', function () {
        $('#page-attributes  > option:selected').each(function () {
            $(this).remove();
            $('#page-attributes-selected').append('<option value="' + $(this).val() + '" selected>' + $(this).text() + '</option>');
        });
    });
    $('#transfer-po').on('click', function () {
        $('#post-attributes  > option:selected').each(function () {
            $(this).remove();
            $('#post-attributes-selected').append('<option value="' + $(this).val() + '" selected>' + $(this).text() + '</option>');
        });
    });

    $('#download_json').on('click', function () {

        let page_attr = $('#page-attributes-selected').val();
        let post_attr = $('#post-attributes-selected').val();
        for (let index = 0; index < page_attr.length; index++) {
            page_attr[index] = page_attr[index].replace('pa-', '');
        }
        for (let index = 0; index < post_attr.length; index++) {
            post_attr[index] = post_attr[index].replace('po-', '');
            switch (post_attr[index]) {
                case 'comments':
                    post_attr[index]="comments.limit(10000){message,reactions.type(LIKE).limit(0).summary(total_count).as(comm_LIKES),reactions.type(LOVE).limit(0).summary(total_count).as(comm_LOVES),reactions.type(HAHA).limit(0).summary(total_count).as(comm_HAHA),reactions.type(SAD).limit(0).summary(total_count).as(comm_SAD),reactions.type(ANGRY).limit(0).summary(total_count).as(comm_ANGRY)}"
                break;
            
                case 'reactions':
                post_attr[index]="reactions.type(LIKE).limit(0).summary(total_count).as(LIKES),reactions.type(LOVE).limit(0).summary(total_count).as(LOVES),reactions.type(HAHA).limit(0).summary(total_count).as(HAHAS),reactions.type(SAD).limit(0).summary(total_count).as(SADS),reactions.type(ANGRY).limit(0).summary(total_count).as(ANGRYS)"                
                break;

                case 'shares':
                post_attr[index]="shares.summary(total_count)"                                
                default:
                    break;
            }
        }
        if (post_attr.length == 0) {
            alert('Please select a post attribute');
        }
        let json_contents;
        let pg_name = window.localStorage.pg_name;
        let ac_token = window.localStorage.ac_token;
        if (page_attr.length > 0) {

            FB.api('/' + pg_name, {
                access_token: ac_token,
                fields: page_attr
            }, function (response) {
                if (response.hasOwnProperty('error')) {
                    alert(response.error);
                } else {
                    json_contents += response;
                }
            });
        }
        if (post_attr.length > 0) {

            FB.api('/' + pg_name, {
                access_token: ac_token,
                fields: post_attr
            }, function (response) {
                if (response.hasOwnProperty('error')) {
                    alert(response.error);
                } else {
                    json_contents += response;
                }
            });
        }

    });


});

