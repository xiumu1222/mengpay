
$(function () {
    init();
});


function init(){
    // var token = '18457193215';
    readyUser(function (res) {
        getBillInfo(res.result.userName,callback)
    })

}
function getBillInfo(info,callback) {
    $.ajax({
        type:'POST',
        url:BASHURL+'/alipay/searchBill',
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

function callback(data) {

    var _html = '';
    for(var i=0;i<data.length;i++){
        var time = new Date(data[i].time)
        time = time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日';
        var type = data[i].type;
        _html += '<div class="item-list-box">' +
            '<div class="item">' +
            '<img class="item-img" src="./images/icon_h.png" alt="about">' +
            '<div class="item-left"><div class="billitem">'+data[i].subject+'</div><div class="date">'+time+'</div></div>' +
            '<div class="item-right">'+data[i].amount+'</div>' +
            '</div>' +
            '</div>'
    }
    $('.main').html(_html);
}







