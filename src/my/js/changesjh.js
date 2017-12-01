$(function () {
    init();


});


function init() {
    $('.checkcode').on('click', function () {
        var _this = $(this);
        if (_this.hasClass('on')) {
            return
        }
        var mobile = $('.phoneinputlayout input').val() || '';
        if (!mobile || mobile.length != 11) {
            return new toast('请输入11位手机号')
        }

        _this.addClass('on');
        var time = 60;

        function timeSub() {
            time--;
            _this.text(time + '秒后重发');
            if (time < 1) {
                _this.removeClass('on');
                _this.text('获取验证码');
                return
            }
            setTimeout(timeSub, 1000);
        }

        timeSub();


        getCode(mobile)
    });
    $('.submit-button-box').on('click', function () {
        var mobile = $('.phoneinputlayout input').val() || '';
        var code = $('.inputlayout input').val() || '';
        if (!mobile || mobile.length != 11) {
            return new toast('请输入11位手机号')
        }
        if (!code) {
            return new toast('请输入验证码')
        }
        checkCode(mobile, code)
    })
}

// 手机校验---

function checkCode(mobile, code) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/personal/checkcode',
        data: {mobile: mobile, code: code},
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

function getCode(mobile) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/user/sendVerify',
        data: {mobile: mobile},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.retCode == '00000') {
                new toast('您的验证码已发送！')
            }
            // if(data.pub && data.pub.retCode == '00000'){
            //     new toast('您的验证码已发送！')
            //     callback && callback(data.data);
            //     return
            // }
            // data.pub && new toast(data.pub.retMsg);
        }
    })
}
