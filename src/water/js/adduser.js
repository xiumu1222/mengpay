init();

function init(){

    var _comp = getComp();
    var comp = new singleSelect('.comp',_comp);
    comp.init();

    var _type = getType();
    var type = new singleSelect('.type',_type);
    type.init();


    $('.submit-button-box').on('click',buttonCallback)

}


function getType() {
    var _type = [
        {name:'预存',type:0},
        {name:'应缴',type:1}
    ]
    return _type;
}

function getComp() {
    var _comp = [
        {name:'孟州市水利局',type:1},
        {name:'孟州市自来水公司',type:2}
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