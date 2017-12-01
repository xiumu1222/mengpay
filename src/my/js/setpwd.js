init()
function init() {
    $('.submit-button-box').on('click', function () {
        var oldpwd = $('.oldpwd').val() || '';
        var newpwd = $('.newpwd').val() || '';
        var checkpwd = $('.checkpwd').val() || '';
        if (!oldpwd) {
            return new toast('请输入原始密码')
        }
        if (!newpwd) {
            return new toast('请输入新密码')
        }
        if (!checkpwd) {
            return new toast('请确认新密码')
        }
        if (checkpwd != newpwd) {
            return new toast('新密码与二次确认新密码不一致')
        }
        setpwd(oldpwd, newpwd, callback)
    })
}
function setpwd(oldpwd, newpwd) {
    readyUser(function (res) {
        $.ajax({
            type: 'POST',
            url: BASHURL + '/user/modifyPwd',
            data: {pwd: oldpwd, newpwd: newpwd, loginName: res.result.userName},
            success: function (data) {
                if (typeof data == "string") {
                    data = JSON.parse(data);
                }
                if (data.pub && data.pub.retCode == '00000') {
                    callback(data.data);
                    data.pub && new toast(data.pub.retMsg);
                    return
                }
                data.pub && new toast(data.pub.retMsg);
            }
        })
    });


}
function callback() {
    // new toast('登录令牌');
}