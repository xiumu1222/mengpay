function serchApp(info, callback) {
    // var applist = {"data":[{"id":1,"appName":"燃气缴费","url":"/gas/index.html","status":"1","imgurl":"icon_fuelgas.png","searchKey":"燃气缴费,rqjf,ranqijiaofei"},{"id":2,"appName":"水务缴费","url":"/water/index.html","status":"1","imgurl":"icon_water.png","searchKey":"水务缴费,swjf,shuiwujiaofei"},{"id":3,"appName":"户籍预约","url":"/household/register.html","status":"1","imgurl":"icon_register.png","searchKey":"户籍预约,hjyy,hujiyuyue"},{"id":4,"appName":"散装汽油登记","url":"/buikgas/buikgas.html","status":"1","imgurl":"icon_bulkgas.png","searchKey":"散装汽油登记,szqydj,sanzhuangqiyoudengji"},{"id":5,"appName":"幼儿园缴费","url":"/nurseryschool/searchschool.html","status":"1","imgurl":"icon_nurseryschool.png","searchKey":"幼儿园缴费,yeyjf,youeryuanjiaofei"},{"id":6,"appName":"行政处罚","url":"","status":"1","imgurl":"icon_administration.png","searchKey":"行政处罚,xzcf,xinzhenchufa"},{"id":7,"appName":"出入境业务","url":"","status":"1","imgurl":"icon_border.png","searchKey":"出入境业务,crjyw,churujingyewu"},{"id":8,"appName":"宽带续费","url":"/broadband/index.html","status":"1","imgurl":"icon_broadband.png","searchKey":"宽带续费,kdxf,kuandaixufei"},{"id":9,"appName":"车主服务","status":"1","imgurl":"icon_car.png","searchKey":"车主服务,czfw,chezhufuwu"},{"id":10,"appName":"实名快递","url":"/express/searchcom.html","status":"1","imgurl":"icon_express.png","searchKey":"实名快递,smkd,shimingkuaidi"},{"id":11,"appName":"违章查询","url":"/peccancypay/PeccancyQuery.html","status":"1","imgurl":"icon_peccancy.png","searchKey":"违章查询,wzcx,weizhangchaxun"},{"id":12,"appName":"手机充值","url":"/phoneprepaid/index.html","status":"1","imgurl":"icon_phone.png","searchKey":"手机充值,sjcz,shoujichongzhi"},{"id":13,"appName":"物业缴费","url":"/propertyfee/index.html","status":"1","imgurl":"icon_property.png","searchKey":"物业缴费,wyjf,wuyejiaofei"},{"id":14,"appName":"车票购买","status":"1","imgurl":"icon_ticket.png","searchKey":"车票购买,cpgm,chepiaogoumai"},{"id":15,"appName":"有线电视缴费","url":"/CableTV/index.html","status":"1","imgurl":"icon_tv.png","searchKey":"有线电视缴费,yxds,youxiandianshi"}],"pub":{"retMsg":"查询成功","retCode":"00000"}};
    // callback(applist.data);
    // return;

    var _info = info || '';
    $.ajax({
        type: 'get',
        url: BASHURL + '/base/searchApp',
        datType: "JSON",
        contentType: "application/x-www-form-urlencoded",
        data: {searchKey: info},
        success: function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            if (data.pub && data.pub.retCode == '00000') {
                callback(data.data);
                return
            }else {
                callback([]);
            }
            // data.pub && new toast(data.pub.retMsg);
        }
    })
}

//初始化函数
function init() {
    DEBUGGER && $('.toolnav-layout').show();
    serchApp('', setAppListContent);
    $('.search-input').on('input', function (e) {
        var _thisval = $(this).val();
        // _thisval.length > 3 && serchApp(_thisval, setAppListContent)
        serchApp(_thisval, setAppListContent)
    })
}

//将应用列表html插入文档
function setAppListContent(applist) {
    var aAppListBox = $('.app-list-box');
    var appListContent = makeAppListContent(applist);
    if (!appListContent) {
        console.log('无app数据');
    }
    aAppListBox.html(appListContent)
}
//跳转二级页面
function callAndroidLink(path) {
    if (!path || path == '' || path == 'undefined') {
        return
    }
    if (DEBUGGER) {
        location.href = path;
        return;
    }
    console.log("跳转：" + 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"' + path + '", "isShowHeader":"1"}');
    location.href = 'MengAppJSBridge://js_bridge_normal_function:4003/gotoDetailView?{"webRequestPath":"' + path + '", "isShowHeader":"1"}';
}
function callscan() {
    jsapi.app.startScan({isJustParamCallBack: 0}, function (res) {})
}
//构造应用列表html
function makeAppListContent(applist) {
    var _applist = applist || [];
    var _appLength = _applist.length;
    var appListContent = '';

    if (_appLength == 0) {
        appListContent = '<div class="noapp" style="font-size: 0.32rem;color: #545454;height: 1.68rem;line-height: 1.68rem;text-align: center;"><span style="font-weight: bold;">抱歉！</span>没有搜索到相关应用</div>';
        return appListContent;
    }


    for (var i = 0; i < _appLength; i++) {
        var _appItem = _applist[i];
        if (!_appItem) {
            console.log('第' + i + '条数据为空:' + _appItem);
            continue;
        }
        if (!checkAppItem(_appItem)) {
            console.log('第' + i + '条数据有缺失：' + _appItem)
        }
        appListContent += '<div onclick=callAndroidLink("' + _appItem.url + '") class="app-item" data-key="' + _appItem.id + '">' +
            '<div class="app-img">' +
            '<img src="./images/' + _appItem.imgurl + '"/>' +
            '</div>' +
            '<div class="app-link">' +
            '<span>' + _appItem.appName + '</span>' +
            '</div>' +
            '</div>';
    }

    return appListContent;
}
//检测应用列表item是否缺少内容
function checkAppItem(appItem) {
    var _appItem = appItem;
    var _url = _appItem.url || '';
    var _appid = _appItem.id || 0;
    var _imgurl = _appItem.imgurl || '';
    var _appname = _appItem.appName || '';
    if (!!_url && !!_appid && !!_imgurl && !!_appname) {
        return true;
    }
    return false;
}

$(function () {
    init();
    jsapi.app.getUserInfo({}, function (res) {});
    // jsapi.app.logoutAndBackToLoginView({}, function (res) {
    //     new toast(JSON.stringify(res));
    // });
});