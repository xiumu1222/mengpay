init();
function init(){
    var token = '18457193215';

    readyUser(function (res) {
        getList(res.result.userName,function(d){
            console.log(d)
            var _html = '';
            for(var i=0;i<d.length;i++){
                _html +='<a href="./detail.html?censusno='+d[i].censusno+'"><div class="item">' +
                    '<div class="item-left">户口登记 预约号：'+(d[i].censusno||'')+'<span>地点：'+d[i].govid+'</span></div>' +
                    '<div class="item-right"><span class=" item-right-icon"></span></div>' +
                    '</div></a>'
            }
            $('.item-list-box').html(_html);
        })
    })

}
function getList(info,callback) {
    $.ajax({
        type:'POST',
        url:BASHURL+'/cr/searchCr',
        data:{loginname:info},
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