var applist = [
    {
        appname: '幼儿园',
        descript: '描述',
        appid: '1',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_01.png'
    },
    {
        appname: '交通违章',
        descript: '描述',
        appid: '2',
        url: '/peccancypay/index.html',
        imgurl: './images/function_02.png'
    },
    {
        appname: '户籍预约',
        descript: '描述',
        appid: '3',
        url: '/household/detail.html',
        imgurl: './images/function_03.png'
    },
    {
        appname: '实名快递',
        descript: '描述',
        appid: '4',
        url: '/express/express.html',
        imgurl: './images/function_04.png'
    },
    {
        appname: '散装汽油购买',
        descript: '描述',
        appid: '5',
        url: '/buikgas/buikgas.html',
        imgurl: './images/function_05.png'
    },
    {
        appname: '行政罚款',
        descript: '描述',
        appid: '6',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_06.png'
    },
    {
        appname: '出入境查询',
        descript: '描述',
        appid: '7',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_07.png'
    },
    {
        appname: '车管所',
        descript: '描述',
        appid: '8',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_08.png'
    },
    {
        appname: '水费',
        descript: '描述',
        appid: '9',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_09.png'
    },
    {
        appname: '燃气',
        descript: '描述',
        appid: '10',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_10.png'
    },
    {
        appname: '手机充值',
        descript: '描述',
        appid: '11',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_11.png'
    },
    {
        appname: '物业费',
        descript: '描述',
        appid: '12',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_12.png'
    },
    {
        appname: '宽带费',
        descript: '描述',
        appid: '13',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_13.png'
    },
    {
        appname: '有线电视',
        descript: '描述',
        appid: '14',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_14.png'
    },
    {
        appname: '汽车票',
        descript: '描述',
        appid: '15',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_15.png'
    },
    {
        appname: '更多',
        descript: '描述',
        appid: '999',
        url: '/nurseryschool/SearchSchool.html',
        imgurl: './images/function_16.jpg'
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
//跳转二级页面
function callAndroidLink(path){
    console.log("跳转：" + 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}');
    location.href = 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}';
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
        appListContent += '<div onclick=callAndroidLink("'+ _appItem.url +'") class="app-item" data-key="'+ _appItem.appid +'">'+
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
    var _url = _appItem.url || '';
    var _appid = _appItem.appid || 0;
    var _imgurl = _appItem.imgurl || '';
    var _appname = _appItem.appname || '';
    if(!!_url && !!_appid && !!_imgurl && !!_appname){
        return true;
    }
    return false;
}

