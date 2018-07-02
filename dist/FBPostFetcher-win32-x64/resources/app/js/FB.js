window.fbAsyncInit = function () {
    FB.init({
        appId: '1241602892652913',
        cookie: true,
        xfbml: true,
        version: 'v3.0'
    });
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function statusChangeCallback(response) {
    if (response.status == 'connected') {
        let ac_token = response.authResponse.accessToken;
        window.localStorage.ac_token = ac_token;
        $('#txt_ac_token').val(ac_token);
    }
}
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}
