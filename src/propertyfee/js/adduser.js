init();

function init(){

    var _comp = getComp();
    var comp = new singleSelect('.xiaoqu',_comp);
    comp.init();

    var _type = getType();
    var type = new singleSelect('.loudong',_type);
    type.init();


    $('.submit-button-box').on('click',buttonCallback)

}


function getType() {
    var _type = [];
    for (var i=1;i<21;i++) {
        _type.push({name:i,type:i})
    }
    return _type;
}

function getComp() {
    var _comp = [
        {name:'龙光小区',type:1},
        {name:'西朝阳小区',type:2},
        {name:'景苑小区',type:3},
        {name:'鑫苑小区',type:4},
        {name:'怡苑小区',type:5},
        {name:'龙凤小区',type:6},
        {name:'聚源小区',type:7},
        {name:'凤凰小区',type:8},
        {name:'龙首小区',type:9}
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