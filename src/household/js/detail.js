init();
function init(){
    var censusno = GetQueryString('censusno');
    getList(censusno,function(d){
        $('.censusno').html(d.censusno);
        $('.handletime').html(d.handletime);
        $('.reasonsapplying').html(d.reasonsapplying);
        $('.govid').html(d.govid);
        $('.phone').html(d.phone);

    })
}
function getList(info,callback) {
    $.ajax({
        type:'POST',
        url:BASHURL+'/cr/getCrInfo',
        data:{censusno:info},
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