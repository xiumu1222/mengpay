var DEBUGGER = !!GetQueryString('debugger');

function serchApp(info,callback){
    var baseUrl = 'http://localhost:8080';
    var _info = info||'';
    $.ajax({
        method:'POST',
        url:baseUrl+'/base/searchApp',
        data:{appName:info},
        success:function(data){
            if(typeof data == "string") {
                data = JSON.parse(data);
            }
            if(data.pub && data.pub.retcode == '00000'){
                callback(data.data);
                return
            }
            data.pub && alert(data.pub.retmsg);
        }
    })
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}



// var applist = [
//     {
//         appname: '幼儿园',
//         descript: '描述',
//         appid: '1',
//         url: '/nurseryschool/searchschool.html',
//         imgurl: './images/function_01.png'
//     },
//     {
//         appname: '交通违章',
//         descript: '描述',
//         appid: '2',
//         url: '/peccancypay/PeccancyQuery.html',
//         imgurl: './images/function_02.png'
//     },
//     {
//         appname: '户籍预约',
//         descript: '描述',
//         appid: '3',
//         url: '/household/register.html',
//         imgurl: './images/function_03.png'
//     },
//     {
//         appname: '实名快递',
//         descript: '描述',
//         appid: '4',
//         url: '/express/searchcom.html',
//         imgurl: './images/function_04.png'
//     },
//     {
//         appname: '散装汽油购买',
//         descript: '描述',
//         appid: '5',
//         url: '/buikgas/searchcom.html',
//         imgurl: './images/function_05.png'
//     },
//     {
//         appname: '行政罚款no',
//         descript: '描述',
//         appid: '6',
//         url: '',
//         imgurl: './images/function_06.png'
//     },
//     {
//         appname: '出入境查询no',
//         descript: '描述',
//         appid: '7',
//         url: '',
//         imgurl: './images/function_07.png'
//     },
//     {
//         appname: '车管所no',
//         descript: '描述',
//         appid: '8',
//         url: '',
//         imgurl: './images/function_08.png'
//     },
//     {
//         appname: '水费',
//         descript: '描述',
//         appid: '9',
//         url: '/water/index.html',
//         imgurl: './images/function_09.png'
//     },
//     {
//         appname: '燃气',
//         descript: '描述',
//         appid: '10',
//         url: '/gas/index.html',
//         imgurl: './images/function_10.png'
//     },
//     {
//         appname: '手机充值',
//         descript: '描述',
//         appid: '11',
//         url: '/phoneprepaid/index.html',
//         imgurl: './images/function_11.png'
//     },
//     {
//         appname: '物业费',
//         descript: '描述',
//         appid: '12',
//         url: '/propertyfee/index.html',
//         imgurl: './images/function_12.png'
//     },
//     {
//         appname: '宽带费',
//         descript: '描述',
//         appid: '13',
//         url: '/broadband/index.html',
//         imgurl: './images/function_13.png'
//     },
//     {
//         appname: '有线电视',
//         descript: '描述',
//         appid: '14',
//         url: '/CableTV/index.html',
//         imgurl: './images/function_14.png'
//     },
//     {
//         appname: '汽车票no',
//         descript: '描述',
//         appid: '15',
//         url: '',
//         imgurl: './images/function_15.png'
//     },
//     {
//         appname: '更多no',
//         descript: '描述',
//         appid: '999',
//         url: '',
//         imgurl: './images/function_16.jpg'
//     }
// ];



init();
//初始化函数
function init(){
    serchApp('',setAppListContent)
    $('.search-input').on('input',function(e){
        var _thisval = $(this).val();
        _thisval.length > 3 && serchApp(_thisval,setAppListContent)
    })
}

//将应用列表html插入文档
function setAppListContent (applist){
    var aAppListBox = $('.app-list-box');
    var appListContent = makeAppListContent(applist);
    if(!appListContent){
        console.log('无app数据');
    }
    aAppListBox.html(appListContent)
}
//跳转二级页面
function callAndroidLink(path){
    if(path == '/dist'|| path == '/distundefined'){alert('我还没有准备好');return}
    if(DEBUGGER){
        location.href=path;
        return;
    }
    console.log("跳转：" + 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}');
    location.href = 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"'+path+'", "isShowHeader":"1"}';
}
//构造应用列表html
function makeAppListContent(applist){
    var _applist = applist || [];
    var _appLength = _applist.length;
    var appListContent = '';

    if(_appLength == 0) {
        appListContent ='<div class="noapp" style="font-size: 0.32rem;color: #545454;height: 1.68rem;line-height: 1.68rem;text-align: center;"><span style="font-weight: bold;">抱歉！</span>没有搜索到相关应用</div>';
        return appListContent;
    }


    for(var i = 0; i < _appLength; i++){
        var _appItem = _applist[i];
        if(!_appItem){
            console.log('第'+ i +'条数据为空:'+ _appItem);
            continue;
        }
        if(!checkAppItem(_appItem)){
            console.log('第'+ i +'条数据有缺失：'+_appItem)
        }
        appListContent += '<div onclick=callAndroidLink("/dist'+ _appItem.url +'") class="app-item" data-key="'+ _appItem.id +'">'+
            '<div class="app-img">'+
            '<img src="./images/'+ _appItem.imgurl +'"/>'+
            '</div>'+
            '<div class="app-link">'+
            '<span>'+ _appItem.appName +'</span>'+
            '</div>'+
            '</div>';
    }
    return appListContent;
}
//检测应用列表item是否缺少内容
function checkAppItem (appItem) {
    var _appItem = appItem;
    var _url = _appItem.url || '';
    var _appid = _appItem.id || 0;
    var _imgurl = _appItem.imgurl || '';
    var _appname = _appItem.appName || '';
    if(!!_url && !!_appid && !!_imgurl && !!_appname){
        return true;
    }
    return false;
}

