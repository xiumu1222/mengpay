init();
function init(){
    getList(function(data){
        console.log(data)
        var _html = '';
        for(var i=0;i<data.length;i++){
            var url= './buikgas.html';
            url+='?';
            url+='id='+ data[i].id;
            url+='&gasstationname='+data[i].gasstationname;
            _html += '<div class="item" data-id="'+data[i].id+'"><a href="'+url+'">'+data[i].gasstationname+'</a></div>'
        }
        $('.item-list').html(_html);
    })
}
function getList(callback) {
    $.ajax({
        type:'post',
        url:BASHURL+'/gasoline/searchGasStation',
        data:{},
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