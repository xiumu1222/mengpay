$(function () {
    var id = GetQueryString('id');
    $('#nummber').val(id);
    getInfo(init);
    //表单提交
    $('.submit-button-box').on('click',function () {
        var comp = $('.comp .result').text();
        var nummber = $('#nummber').val();
        var yourname = $('#yourname').val();
        var card_no = $('#card_no').val();
        var money = $('#money').val();
        //校验快递公司
        if(!comp || comp=='请选择'){
            return new toast('请选择快递公司');
        }
        //校验单号
        if(!nummber || nummber=='请选择'){
            return new toast('请输入单号');
        }else if(!REG.NUM_EN_REX.test(nummber)){
            return new toast('单号只许输入数字和字母');
        }
        //校验姓名
        if(!yourname ||yourname=='请选择'){
            return new toast('请输入姓名');
        }else if(!REG.CH_REX.test(yourname)){
            return new toast('姓名请输入2-4个汉字');
        }
        //身份证号码校验
        if(!card_no || card_no=='请选择'){
            return new toast('请输入身份证');
        }else if(isCardID(card_no)!=true){
            return new toast(isCardID(card_no));
        }
        //金额校验
        if(!money || money=='请选择'){
            return new toast('请输入金额');
        }
        
        pay();

    })
});


function init(data) {

    var _comp = getComp(data);
    var comp = new singleSelect('.comp', _comp);
    comp.init();
    var width = document.body.clientWidth - 80;
    $('.select-item').css('width', width + 'px')
    $('.submit-button-box').on('click', buttonCallback)

}


function getComp(data) {
    console.log(data)
    var _comp = [];
    for (var i = 0; i < data.length; i++) {
        _comp.push({name: data[i].companyname + '(' + data[i].companyaddress + ')', type: data[i].id})
    }
    return _comp;
}

function buttonCallback() {
    // new toast('没通')
}

function getInfo(callback) {
    $.ajax({
        type: 'POST',
        url: BASHURL + '/express/searchExpress',
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                callback(data.data);
                return
            }
            data.pub && new toast(data.pub.retMsg);
        }
    })
}


function pay(){
	var url=BASHURL+"/alipay/topay";
    $('#subject').val($('#name').html());
    $('#totalAmount').val($('#money').val());
    $('#orderno').val($('#nummber').val());
    $('#descript').val($('#yourname').val()+$('#nummber').val());
	 document.form1.action=url;     
     document.form1.submit(); 
}
