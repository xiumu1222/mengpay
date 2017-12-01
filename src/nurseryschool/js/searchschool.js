init()
function init() {
    var info = ''
    getYEYList(info, callback)
    $('.search-input').on('input', function (e) {
        var _thisval = $(this).val();
        getYEYList(_thisval, callback)
    })
}
function callback(data) {
    var _html = '';

    for (var i = 0; i < data.length; i++) {
        var url= './payquery.html';
        url+='?';
        url+='kid='+ data[i].id;
        url+='&name='+data[i].name;
        _html += ' <div class="item" data-id="' + data[i].id + '"><a href="'+url+'">' + data[i].name + '</a></div>'
    }
    $('.item-list').html(_html);
}
function getYEYList(info, callback) {

    $.ajax({
        type: 'post',
        url: BASHURL + '/kg/searchKg',
        data: {name: info},
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