init();

function init(){

    var _comp = getComp();
    var comp = new singleSelect('.comp',_comp);
    comp.init();

    $('.submit-button-box').on('click',buttonCallback)

}



function getComp() {
    var _comp = [
        {name:'中国联通',type:1},
        {name:'中国电信',type:2},
        {name:'华硕',type:3},
        {name:'孟州市广电网络有限责任公司',type:4}
    ]
    return _comp;
}

function buttonCallback(){
    // new toast('没通')
}

// function getUserInfo(info,callback) {
//     $.ajax({
//         type:'POST',
//         url:BASHURL+'/personal/searchPersonalInfo',
//         data:{loginName:info},
//         success:function(data){
//             if(typeof data == "string") {
//                 data = JSON.parse(data);
//             }
//             if(data.pub && data.pub.retCode == '00000'){
//                 callback(data.data);
//                 return
//             }
//             data.pub && new toast(data.pub.retMsg);
//         }
//     })
// }