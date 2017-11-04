var applist = [
    {
        appname: '第一个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第二个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第三个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    },
    {
        appname: '第四个应用',
        descript: '描述',
        appid: '1',
        url: 'www.baidu.com',
        imgurl: './images/function_01.png'
    }
];

init();
//初始化函数
function init(){
    setAppListContent ();
}

//将应用列表html插入文档
function setAppListContent (){
    var aAppListBox = $('.app-list-box');
    var appListContent = makeAppListContent(applist);
    if(!appListContent){
       console.log('无app数据');
    }
    aAppListBox.html(appListContent)
}
//构造应用列表html
function makeAppListContent(applist){
    var _applist = applist || [];
    var _appLength = _applist.length;
    if(_appLength == 0) {
        console.log("applist is 空");
        return false;
    }
    var appListContent = '';

    for(var i = 0; i < _appLength; i++){
        var _appItem = _applist[i];
        if(!_appItem){
            console.log('第'+ i +'条数据为空:'+ _appItem);
            continue;
        }
        if(!checkAppItem(_appItem)){
            console.log('第'+ i +'条数据有缺失：'+_appItem)
        }
        appListContent += '<div class="app-item" data-key="'+ _appItem.appid +'">'+
                '<div class="app-img">'+
                '<img src="'+ _appItem.imgurl +'"/>'+
                '</div>'+
                '<div class="app-link">'+
                '<span>'+ _appItem.appname +'</span>'+
                '</div>'+
                '</div>';
    }
    return appListContent;
}
//检测应用列表item是否缺少内容
function checkAppItem (appItem) {
    var _appItem = appItem;
    var _appid = _appItem.appid || 0;
    var _imgurl = _appItem.imgurl || '';
    var _appname = _appItem.appname || '';
    if(!!_appid && !!_imgurl && !!_appname){
        return true;
    }
    return false;
}

