
$(function () {
    init();
})



//跳转二级页面
function callAndroidLink(path){
    if(!path || path == ''|| path == 'undefined'){return}
    if(DEBUGGER){
        location.href=path;
        return;
    }
    console.log("跳转：" + 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}');
    location.href = 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}';
}


function init(){
    $('.toolnav-layout').show();
    readyUser(function (res) {
        getUserInfo(res.result.userName,setUserInfo)
    });
}

function getUserInfo(info,callback) {
    $.ajax({
        type:'POST',
        url:BASHURL+'/personal/searchPersonalInfo',
        data:{loginName:info},
        success:function(data){
            if(typeof data == "string") {
                data = JSON.parse(data);
            }
            if(data.pub && data.pub.retCode == '00000'){
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
function setUserInfo(info){
    var personalPic = info.personalPic||'';
    var nickName = info.nickName||'';
    var realName = info.realName||'';
    var qq = info.qq||'';
    var webChat = info.webChat||'';
    var idcard = info.idcard||'';
    var cardType = info.cardType||'';
    var sex = info.sex||'';
    var address = info.address||'';
    var mobile = info.mobile||'';
    var email = info.email||'';
    var status = info.status||'';

    personalPic && $('.personalPic').attr('src',personalPic);
    nickName && $('.nickName').html(nickName);
}
