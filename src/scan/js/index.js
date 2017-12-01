//页面传入金额
var moneyQuery = GetQueryString('money');

$(function () {
    //判断是否有金额传入
    var moneyIn = $('.moneyinputbox').find('input');
    if (moneyQuery && moneyQuery != 0) {
        moneyIn.attr('readonly', true)
        moneyIn.val(moneyQuery);
    } else {

    }

    //支付方式切换事件
    $(document).on('click', '.scan-radio', function (e) {
        var _this = $(this);
        $('.scan-radio').removeClass('on');
        _this.addClass('on');
    });

    //提交事件
    $('.submit-button-box').on('click', function () {
        var money = moneyIn.val();

        if(!(money&&money!=0)){
            //金额不存在或者为0是直接跳出
            return
        }

        jsapi.app.goToZMCertification({'url':'http://111111'},function (res) {

        });

        // window.location.href = './payOff.html';
    })


});