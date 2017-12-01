init()
function init(){
    var now = '187123123';
    var info =getInfo();
    var content = makeContent(info,now);
    setContent(content);
    $(document).on('click','.main .item-list-box',function(){
        $('.item-list-box .item-right-check').addClass('hide');
        $(this).find('.item-right-check').removeClass('hide');
    })
}


// 获取用户列表并显示---
function getInfo() {
    var Info = [
        {userid:'187123123',imgurl:'./images/img_Avatar.png'},
        {userid:'121323123',imgurl:'./images/img_Avatar.png'}
    ];
    return Info
}
function makeContent(Info,now){
    var content = '';
    for(var i=0;i<Info.length;i++){
        var nowuser = Info[i].userid == now ? '':"hide";
        content += '<div class="item-list-box">'+
            '<div class="item">'+
            '<div class="item-left"><img src="'+Info[i].imgurl+'" alt="my"><span>'+Info[i].userid+'</span></div>' +
            '<div class="item-right"><span class=" item-right-check '+nowuser+'"></span></div>' +
            ' </div>' +
            ' </div>'
    }
    return  content;
}
function setContent(content){
    $('.main').html(content)
}