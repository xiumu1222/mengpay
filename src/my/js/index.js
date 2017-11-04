//跳转二级页面
function callAndroidLink(path){
    console.log("跳转：" + 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}');
    location.href = 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}';
}

init();
function init(){
    var token = '';
    getUserInfo(token,function (e) {
        console.log(e)
    })
}
function getUserInfo(info,callback) {
    var baseUrl = 'http://localhost:8080';
    $.ajax({
        method:'POST',
        url:baseUrl+'/personal/searchPersonalInfo',
        data:{loginName:info},
        success:function(data){
            if(typeof data == "string") {
                data = JSON.parse(data);
            }
            if(data.pub && data.pub.retcode == '00000'){
                callback(data.data);
                return
            }
            data.pub && alert(data.pub.retmsg);
        }
    })
}
