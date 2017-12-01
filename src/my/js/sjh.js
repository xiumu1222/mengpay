init();
function init(){
    var token = '18457193215';
    getUserInfo(token,setUserInfo);
}
function getUserInfo(info,callback) {

    $.ajax({
        type:'POST',
        url:BASHURL+'/personal/searchPersonalInfo',
        // data:{loginName:info},
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
// mobile	手机
function setUserInfo(info){
    var mobile = info.mobile||'';
    mobile && $('.item-right').html(mobile);
}

