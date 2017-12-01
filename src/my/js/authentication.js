init();

function init() {

    var _sex = getSex();
    var sex = new singleSelect('.sexbox', _sex);
    sex.init();
    readyUser(function (res) {
        getUserInfo(res.result.userName, setUserInfo)
    });


    $('.submit-button-box').on('click', getAuthenticationInfo)

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
    var webChat = info.webChat || '';
    var idcard = info.idcard || '';
    var cardType = info.cardType || '';
    var sex = info.sex || '男';
    var address = info.address || '';
    var mobile = info.mobile || '';
    var email = info.email || '';
    var status = info.status || '';
    var id = info.id || '';
    var area = info.area || '';


    realName && $('.name').val(realName);
    sex && $('.sexbox .result').html(sex);
    idcard && $('.personid').val(idcard);
    area && $('.location').html(area);
    address && $('.Address').val(address);

}

function getAuthenticationInfo() {
    var name = $('.name').val() || '';
    var sex = $('.sexbox .result').text() || '';
    var personid = $('.personid').val() || '';
    var location = $('.location').html() || '';
    var Address = $('.Address').val() || '';

    if (!checkInfo(name, sex, personid, location, Address)) {
        return
    }
    readyUser(function (res) {
        sendInfo(name, sex, personid, location, Address, callback, res.result.userName)
    });

}

// req	personalPic	个人头像
// nickName	昵称	30
// realName	真实名称	30
// qq	qq	30
// webChat	微信	30
// idcard	身份证	30
// cardType	证件类型	30	0身份证1其他
// sex	性别	50	0男1女
// address	地址	3
// mobile	手机	30
// email	邮箱	50
// status	状态	3	0正常1失效

function sendInfo(name, sex, personid, location, Address, callback, username) {
    // var BASHURL = 'http://localhost:8080';
    $.ajax({
        type: 'POST',
        url: BASHURL + '/personal/updatePersonalInfo',
        data: {realName: name, sex: sex, idcard: personid, area: location, address: Address, loginName: username},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                new toast(data.pub.retMsg);
                callback(data.data);
                return
            }
            data.pub && new toast(data.pub.retMsg);
        }
    })
}

function callback() {

}

function checkInfo(name, sex, personid, location, Address) {
    return true;
}

function getSex() {
    var sex = [
        {name: '男', type: 0},
        {name: '女', type: 1}
    ];
    return sex;
}

// 性别选择框-----

(function ($) {
    function singleSelect(domNode, data) {
        this.data = data || {};
        this.domNode = domNode || '';
    }

    var contentStart = '<div class="single-select-layout">' +
        '<div class="single-select-box">' +
        '<div class="selected-name"><span class="result">请选择</span><span class=" item-right-icon" style="padding-top: 0.04rem;"></span></div>' +
        '<div class="select-list" style=" right:0;z-index:100;display: none" >';

    var contentEnd = '</div></div></div>';

    function makeContent() {
        var _data = singleSelect.data;
        var _Content = '';
        for (var i = 0; i < _data.length; i++) {
            var _item = _data[i];
            _Content += "<div class='select-item' data-key='" + _item.type + "'>" +
                _item.name +
                "</div>";
        }
        return _Content;
    }

    function setContent() {
        var _content = makeContent();
        var content = contentStart + _content + contentEnd;
        $(singleSelect.domNode).html(content);
    }

    function openSexSelect() {
        var oBtn = $(singleSelect.domNode + ' .single-select-box');
        var oBox = $(singleSelect.domNode + ' .select-list');
        oBtn.on('click', function (e) {
            $('.mask').length == 0 ? e.target.className !== 'select-item' ? $('body').append('<div class="mask"></div>') : $('.mask').remove() : $('.mask').remove();
            oBox.show();
        })
    }

    function itemSelect() {
        var oBox = $(singleSelect.domNode + ' .select-list');
        var oResult = $(singleSelect.domNode + ' .selected-name .result');
        $(document).on('click', '.select-item', function (e) {
            oBox.hide();
            var _this = $(this);
            var _html = _this.html();
            var type = _this.attr('data-key');
            oResult.html(_html).attr('data-key', type)
        })
    }

    $(document).on('click', '.mask', function () {
        var oSexBox = $('.select-list');
        $('.mask').remove();
        oSexBox.hide();
    });
    singleSelect.init = function () {
        setContent();
        openSexSelect();
        itemSelect();
    };
    $.singleSelect = singleSelect;
})(window.Zepto);

// function openSexSelect(){
//     var oSexBtn = $('.single-select-box');
//     var oSexBox = $('.select-list');
//     oSexBtn.on('click',function(e){
//         $('.mask').length == 0 ? e.target.className !== 'select-item' ? $('body').append('<div class="mask"></div>'):$('.mask').remove():$('.mask').remove();
//         oSexBox.show();
//
//     })
// }
// $(document).on('click','.mask',function(){
//     var oSexBox = $('.select-list');
//     $('.mask').remove();
//     oSexBox.hide();
// })
// function sexSelect(){
//     var oSexBox = $('.select-list');
//     var oSexResult = $(' .selected-name .sex');
//     $(document).on('click','.select-item',function(e){
//         oSexBox.hide();
//         var _this = $(this);
//         var name = _this.html();
//         var type = _this.attr('data-key');
//         console.log(name+":"+type);
//         oSexResult.html(name).attr('data-key',type)
//     })
// }
//
//
// function setSexs(content){
//     var oSexBox = $('.select-list');
//     oSexBox.html(content);
//     openSexSelect();
//     sexSelect();
// }
//
// function makeSexContent(sex){
//     var _sex = sex;
//     var _sexContent = '';
//     for(var i = 0 ; i < _sex.length ; i++){
//         var _item = _sex[i];
//         _sexContent += "<div class='select-item' data-key='"+_item.type+"'>"+
//             _item.name+
//             "</div>";
//     }
//     return _sexContent;
// }
// 性别选择框-----