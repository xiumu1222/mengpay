$(function () {
    //&id=2&name=蓝天双语艺术幼儿园&sid=asdfasdf&type=保育费&time=2017-05
    var kid = GetQueryString('kid');
    var name = GetQueryString('name');
    var sid = GetQueryString('sid');
    var type = GetQueryString('type');
    var typeval = GetQueryString('typeval');
    var time = GetQueryString('time');

    $('#name').html(name);
    $('#sid').html(sid);
    $('#ftype').html(type);
    $('#time').html(time);

    $.ajax({
        type: 'post',
        url: BASHURL + '/kg/searchKgfee',
        datType: "JSON",
        contentType: "application/x-www-form-urlencoded",
        data: {"kid": kid, "name": name, "sid": sid, "type": typeval, "time": time},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                $('#fee').html(data.data.fee);
                $('#cname').html(data.data.cname);
                $('#sname').html(data.data.sname);
                return
            } else {
                new toast(data.pub.retMsg);
            }
        }
    })


})

function pay(){
	var url=BASHURL+"/alipay/topay";
    $('#subject').val($('#name').html());
    $('#totalAmount').val($('#fee').html());
    $('#orderno').val($('#sid').html());
    $('#descript').val($('#yourname').html()+$('#ftype').html());
	 document.form1.action=url;     
     document.form1.submit(); 



}