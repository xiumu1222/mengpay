$(function () {
    var id = GetQueryString('id');
    var gasstationname = GetQueryString('gasstationname');
    $('#gasstationname').html(gasstationname);


    $('.submit-button-box').on('click', function () {
        var yourname = $('#yourname').val();
        var card_no = $('#card_no').val();
        var money = $('#money').val();
        //金额校验
        if (!money || money == '请选择') {
            return new toast('请输入金额');
        }else if(!REG.MONEY_REG.test(money)){
            return new toast('金额请输入最多2位小数的数字');
        }
        //校验姓名
        if (!yourname || yourname == '请选择') {
            return new toast('请输入姓名');
        } else if (!REG.CH_REX.test(yourname)) {
            return new toast('姓名请输入2-4个汉字');
        }
        //身份证号码校验
        if (!card_no || card_no == '请选择') {
            return new toast('请输入身份证');
        } else if (isCardID(card_no) != true) {
            return new toast(isCardID(card_no));
        }
        pay();
    })
})


function pay(){
	var url=BASHURL+"/alipay/topay";
    $('#subject').val($('#gasstationname').html());
    $('#totalAmount').val($('#money').val());
    $('#orderno').val($('#card_no').val());
    $('#descript').val($('#yourname').val()+$('#card_no').val());
	 document.form1.action=url;     
     document.form1.submit(); 
}