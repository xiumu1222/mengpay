$(function () {
    init();
});


function init() {
    readyUser(function (res) {
        // alert(JSON.stringify(res))
        getUserInfo(res.result.userName, setUserInfo);
    })
}
function getUserInfo(info, callback) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/personal/searchPersonalInfo',
        // contentType: "application/x-www-form-urlencoded",
        data: {loginName: info},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                callback(data.data);
                return
            }
            data.pub && new toast(data.pub.retMsg);
        }
    })
}
// nickName	昵称
function setUserInfo(info) {
    var nickName = info.nickName || '';
    nickName && $('.nickname').html(nickName);
}