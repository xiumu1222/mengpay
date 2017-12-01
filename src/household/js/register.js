init();

function init() {

    var _business = getBusiness();
    var business = new singleSelect('.yuyueyewu', _business);
    business.init(businessCallback);

    $('.shenqingliyou').on('click', function () {

        if ($(this).find('.result').length != 0) {
            return
        }
        var business = $('.yuyueyewu .result').attr('data-key') || '';
        if (!business) {
            new toast('请先选择你说预约的业务');
            return
        }
    })


    var _addr = getAddr();
    var addr = new singleSelect('.yuyuedidian', _addr);
    addr.init();

    var _time = getTime();
    var time = new singleSelect('.yuyueshijian', _time);
    time.init();


    $('.submit-button-box').on('click', buttonCallback)


    $('.checkcode').on('click', function () {
        var _this = $(this);
        if (_this.hasClass('on')) {
            return
        }
        var mobile = $('.mobile').val() || '';
        if (!mobile||mobile.length != 11) {
            return new toast('请输入11位手机号')
        }

        _this.addClass('on');
        var time = 60;

        function timeSub() {
            time--;
            _this.text(time + '秒后重发');
            if(time <1){
                _this.removeClass('on');
                _this.text('获取验证码');
                return
            }
            setTimeout(timeSub, 1000);
        }

        timeSub();


        getCode(mobile, function () {
            new toast('验证码已发送');
        })
    })

}

function businessCallback() {

    var _html = '请选择<span class=" item-right-icon"></span>';
    $('.shenqingliyou').html(_html);
    var business = $('.yuyueyewu .result').attr('data-key') || '';
    var _reason = getReason(business);
    var reason = new singleSelect('.shenqingliyou', _reason);
    reason.init();
}

function getBusiness() {
    var business = [
        {name: '出生入户', type: 0},
        {name: '市外迁入', type: 1},
        {name: '变更信息', type: 2},
        {name: '本市户籍身份证办理', type: 3},
        {name: '本市户籍临时身份证办理', type: 4},
        {name: '注销户口', type: 5}
    ];
    return business;
}

function getReason(business) {

    var reason = [
        [
            {name: '市内出生', type: 0},
            {name: '一周岁以内市外出生', type: 1},
            {name: '一周岁以上市外出生', type: 2},
            {name: '国外出生', type: 3},
            {name: '助产机构外出生', type: 4},
            {name: '其他', type: 5}
        ],
        [
            {name: '夫妻投靠', type: 0},
            {name: '子女投靠父母', type: 1},
            {name: '父母投靠子女', type: 2},
            {name: '毕业生入户', type: 3},
            {name: '军队转业干部入户', type: 4}
        ],
        [
            {name: '变更信息', type: 0}
        ],
        [
            {name: '本市户籍身份证办理', type: 0}
        ],
        [
            {name: '本市户籍临时身份证办理', type: 0}
        ],
        [
            {name: '注销户口', type: 0}
        ]

    ];
    return reason[business];
}

function getAddr() {
    var addr = [
        {name: '孟州市南庄派出所', type: 0},
        {name: '孟州市会昌派出所', type: 1},
        {name: '孟州市化工派出所', type: 2},
        {name: '孟州市公安局谷旦镇派出所', type: 3},
        {name: '赵和派出所', type: 4},
        {name: '河阳派出所', type: 5}
    ];
    return addr;
}

function getTime() {
    var time = [];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var week = new Date().getDay();
    var isLeapYear = (function (year) {
        var cond1 = year % 4 == 0;
        var cond2 = year % 100 != 0;
        var cond3 = year % 400 == 0;
        var cond = cond1 && cond2 || cond3;
        if (cond) {
            return true;
        }
        return false;
    })();
    var mouthDay = function () {
        if (isLeapYear) {
            [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }();

    for (var i = 0; i < 7; i++) {
        var _mouthDay = mouthDay[month - 1];
        day = day + 1
        if (day > _mouthDay) {
            day = day - _mouthDay;
            month = month + 1;
            if (month > 12) {
                month = month - 12;
                year = year + 1;
            }
        }

        week = week + 1;

        if (week == 7 || week == 6) {
            continue
        }
        var targetday = {name: year + '-' + month + '-' + day, type: i}
        time.push(targetday);
    }


    return time;
}

// loginname	登录名
// businesstype	预约业务类型
// reasonsapplying	申请理由
// subscribeperson
// 预约人姓名
// idnumber	预约人身份证
// phone	预约人手机号
// govid	预约单位
// handletime	预约办理时间
// censusno	预约编号


function buttonCallback() {
    var businesstype = $('.yuyueyewu .result').text() || '';
    var reasonsapplying = $('.shenqingliyou .result').text() || '';
    var govid = $('.yuyuedidian .result').text() || '';
    var handletime = $('.yuyueshijian .result').text() || '';

    var subscribeperson = $('.name').val() || '';
    var idnumber = $('.idcard').val() || '';
    var phone = $('.mobile').val() || '';
    var verificationCode = $('.code').val() || '';

    //校验预约业务
    if (!businesstype || businesstype == '请选择') {
        return new toast('请选择预约业务');
    }
    //校验申请理由
    if (!reasonsapplying || reasonsapplying == '请选择') {
        return new toast('请选择申请理由');
    }
    //校验预约地点
    if (!govid || govid == '请选择') {
        return new toast('请选择预约地点');
    }
    //校验预约业务
    if (!handletime || handletime == '请选择') {
        return new toast('请选择预约时间');
    }
    //校验姓名
    if (!subscribeperson || subscribeperson == '请选择') {
        return new toast('请输入姓名');
    } else if (!REG.CH_REX.test(subscribeperson)) {
        return new toast('姓名请输入2-4个汉字');
    }
    //身份证号码校验
    if (!idnumber || idnumber == '请选择') {
        return new toast('请输入身份证');
    } else if (isCardID(idnumber) != true) {
        return new toast(isCardID(idnumber));
    }
    //手机号验证
    if (!phone || phone == '请选择') {
        return new toast('请输入手机号');
    }else if(phone.length !=11){
        return new toast('请输入11位长度手机号码');
    }
    //验证码校验
    if (!verificationCode || verificationCode == '请选择') {
        return new toast('请输入验证码');
    }

    saveInfo(businesstype, reasonsapplying, govid, handletime, subscribeperson, idnumber, phone, verificationCode, saveCallback)

    // <a href="./detail.html">
}

function saveCallback(data) {
    if (!data) {
        return new toast('censusno不存在');
    }
    location.href = "./detail.html?censusno=" + data
}

function saveInfo(businesstype, reasonsapplying, govid, handletime, subscribeperson, idnumber, phone, verificationCode, callback) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/cr/saveCr',
        data: {
            businesstype: businesstype,
            reasonsapplying: reasonsapplying,
            govid: govid,
            handletime: handletime,
            subscribeperson: subscribeperson,
            idnumber: idnumber,
            phone: phone,
            verificationCode: verificationCode
        },
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

function getCode(info, callback) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/user/sendVerify',
        data: {mobile: info},
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

