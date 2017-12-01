function init() {
    // var token = '18457193215';
    readyUser(function (res) {
        getUserInfo(res.result.userName, setUserInfo);

    });

    $('#logout').on('click', function () {
        var popOption = {
            desc: '是否确认退出登录？',
            okCallback: function () {
                readyUser(function (res) {
                    logout(res.result.userName)
                });
            }
        };
        new Pop(popOption);

    })
}
function logout(info) {


    $.ajax({
        type: 'POST',
        url: BASHURL + '/user/cancel',
        data: {loginName: info},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                jsapi.app.logoutAndBackToLoginView({}, function (res) {
                    new toast(JSON.stringify(res));
                });
            } else {
                data.pub && new toast(data.pub.retMsg);
            }

        },
        error: function () {
            new toast('请求失败')
        }
    })
}
function getUserInfo(info, callback) {

    $.ajax({
        type: 'POST',
        url: BASHURL + '/personal/searchPersonalInfo',
        data: {loginName: info},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                alert(JSON.stringify(data.data));
                callback(data.data);
                return
            }
            data.pub && new toast(data.pub.retMsg);
        }
    })
}
// personalPic	个人头像
// nickName	昵称
// realName	真实名称
// qq	qq
// webChat	微信
// idcard	身份证
// cardType	证件类型
// sex	性别
// address	地址
// mobile	手机
// email	邮箱
// status	状态
function setUserInfo(info) {
    var personalPic = info.personalPic || '';
    var nickName = info.nickName || '';
    var realName = info.realName || '';
    var qq = info.qq || '';
    var webchat = info.webchat || '';
    var weibo = info.weibo || '';
    var idcard = info.idcard || '';
    var cardType = info.cardType || '';
    var sex = info.sex || '';
    var address = info.address || '';
    var loginName = info.loginName || '';
    var email = info.email || '';
    var status = info.status || '';
    var id = info.id || '';

    personalPic && $('.personalPic').attr('src', personalPic);
    id && $('.user').html(loginName);
    loginName && $('.mobile').html(loginName);
    if (qq) {
        $('.qq').addClass('bind').removeClass('unbind').html('<span class="value">'+qq+'</span>已绑定');
    } else {
        $('.qq').removeClass('bind').addClass('unbind').html('未绑定');
    }

    if (webchat) {
        $('.webchat').addClass('bind').removeClass('unbind').html('<span class="value">'+webchat+'</span>已绑定');
    } else {
        $('.webchat').removeClass('bind').addClass('unbind').html('未绑定');
    }

    if (weibo) {
        $('.weibo').addClass('bind').removeClass('unbind').html('<span class="value">'+weibo+'</span>已绑定');
    } else {
        $('.weibo').removeClass('bind').addClass('unbind').html('未绑定');
    }
}

$(function () {

    init();
})
