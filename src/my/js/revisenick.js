init();
function init() {
    $('.submit-button-box').on('click', setUserNickName)
}
function setUserNickName(callback) {

    var nickname = $('.nickname').val();
    // alert(nickname)
    readyUser(function (res) {
        // alert(JSON.stringify(res));
        $.ajax({
            type: 'POST',
            url: BASHURL + '/personal/updatePersonalInfo',
            data: {nickName: nickname, loginName: res.result.userName},
            success: function (data) {
                if (typeof data == "string") {
                    data = JSON.parse(data);
                }
                if (data.pub && data.pub.retCode == '00000') {
                    setUserNickNameCallback(data.data);
                    new toast(data.pub.retMsg)
                    return
                }
                data.pub && new toast(data.pub.retMsg);
            },
            error: function () {

            }
        })
    })

}
// nickName	昵称
function setUserNickNameCallback(info) {

}