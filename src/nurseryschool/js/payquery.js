$(function () {
    var kid = GetQueryString('kid');
    var name = GetQueryString('name');
    $('#name').html(name);
    var typeList = [
        {name: '保育费', type: 0},
        {name: '零食费', type: 1},
        {name: '课本费', type: 2},
        {name: '玩具费', type: 3}
    ];
    var type = new singleSelect('#type', typeList);
    type.init(typeCallback);

    var time = new singleSelect('#time', getTimeList());
    time.init(typeCallback);

    $('.submit-button-box').on('click', function () {
        var _this = $(this);
        var sid = $('#sid').val();
        var type = $('#type .result').text();
        var typeval =$('#type .result').attr('data-key');
        var time = $('#time .result').text();
        if (!sid || sid == '请选择') {
            return new toast('请输入学号');
        } else if (!REG.NUM_EN_REX.test(sid)){
            return new toast('学号只允许输入数字和字母');
        }
        if (!type || type == '请选择') {
            return new toast('请选择缴费类型');
        }
        if (!time || time == '请选择') {
            return new toast('请选择缴纳月份');
        }
        var url = './paydetail.html?';
        url += '&kid=' + kid;
        url += '&name=' + name;
        url += '&sid=' + sid;
        url += '&type=' + type;
        url += '&typeval=' + typeval;
        url += '&time=' + time;

        window.location.href = url;

    });


});


function typeCallback() {

}

//获取前后六个月时间数组
function getTimeList() {
    var timeList = [];
    for (var i = 6; i > -6; i--) {
        var oneMonth = {};
        var time = moment().subtract(i, 'months').format('YYYY-MM');
        oneMonth.name = time;
        oneMonth.type = i;
        timeList.push(oneMonth);
    }
    return timeList
}