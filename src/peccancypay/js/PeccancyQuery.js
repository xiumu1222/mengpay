init()

function init(){
    var _carTypes = getCarTypes();
    var _carTypescontent = makeCarTypeContent(_carTypes);
    setCartype(_carTypescontent);

    var _licencePlates = getLicencePlates();
    var __licencePlatescontent = makeLicencePlatesContent(_licencePlates);
    setLicencePlates(__licencePlatescontent);

}

function openCarTypeSelect(){
    var oCarTypeBtn = $('.choosecartype');
    var oCarTypeBox = $('.choosecartype .select-list');
    oCarTypeBtn.on('click',function(e){
        $('.mask').length == 0 ? e.target.className !== 'select-item' ? $('body').append('<div class="mask"></div>'):$('.mask').remove():$('.mask').remove();
        oCarTypeBox.show();

    })
}
$(document).on('click','.mask',function(){
    var oCarTypeBox = $('.choosecartype .select-list');
    $('.mask').remove();
    oCarTypeBox.hide();
})
function carTypeSelect(){
    var oCarTypeBox = $('.choosecartype .select-list');
    var oCarTypeResult = $('.choosecartype .selected-name .name');
    $(document).on('click','.choosecartype .select-item',function(e){
        oCarTypeBox.hide();
        var _this = $(this);
        var name = _this.html();
        var type = _this.attr('data-key');
        console.log(name+":"+type);
        oCarTypeResult.html(name).attr('data-key',type)
    })
}

function getCarTypes(){
    var carTypes=[
        {name: '微型车', type: '0'},
        {name: '紧凑型车', type: '1'},
        {name: '小型车', type: '2'},
        {name: '中型车', type: '3'},
        {name: '中大型汽车', type: '4'},
        {name: '豪华车', type: '5'},
    ];
    return carTypes;
}

function setCartype(content){
    var oCarTypeBox = $('.choosecartype .select-list');
    oCarTypeBox.html(content);
    openCarTypeSelect();
    carTypeSelect();
}

function makeCarTypeContent(carTypes){
    var _carTypes = carTypes;
    if(!_carTypes&& (_carTypes instanceof Array) && _carTypes.length == 0){
        console.log("无车辆类型");
        _carTypes = [{name:'无',type:99}]
    }
    var _carTyprContent = '';
    for(var i = 0 ; i < _carTypes.length ; i++){
        var _item = _carTypes[i];
        if(!checkCarType(_item)){
            continue;
        }
        _carTyprContent += "<div class='select-item' data-key='"+_item.type+"'>"+
            _item.name+
                "</div>";
    }
    return _carTyprContent;
}

function checkCarType(item){
    var _item = item;
    var _name = _item.name || '';
    var _type = _item.type || '';
    if(!_name && !_type){
        return false;
    }
    return true;
}

// -----

function openLicencePlateSelect(){
    var oLicencePlateBtn = $('.licenceplate .single-select-box');
    var oLicencePlateBox = $('.licenceplate .select-list');
    oLicencePlateBtn.on('click',function(e){
        $('.mask').length == 0 ? e.target.className !== 'select-item' ? $('body').append('<div class="mask"></div>'):$('.mask').remove():$('.mask').remove();
        oLicencePlateBox.show();

    })
}
$(document).on('click','.mask',function(){
    var oLicencePlateBox = $('.licenceplate .select-list');
    $('.mask').remove();
    oLicencePlateBox.hide();
})
function licencePlateSelect(){
    var oLicencePlateBox = $('.licenceplate .select-list');
    var oLicencePlateResult = $('.licenceplate .selected-name .name');
    $(document).on('click','.licenceplate .select-item',function(e){
        oLicencePlateBox.hide();
        var _this = $(this);
        var name = _this.html();
        var type = _this.attr('data-key');
        console.log(name+":"+type);
        oLicencePlateResult.html(name).attr('data-key',type)
    })
}

function getLicencePlates(){
    var licencePlates=[
        {name: '浙A', type: 'ya'},
        {name: '浙B', type: 'ya'},
        {name: '浙C', type: 'ya'},
        {name: '浙D', type: 'ya'},
        {name: '浙E', type: 'ya'},
        {name: '浙F', type: 'ya'},
        {name: '浙G', type: 'ya'}
    ];
    return licencePlates;
}

function setLicencePlates(content){
    var oLicencePlatesBox = $('.licenceplate .select-list');
    oLicencePlatesBox.html(content);
    openLicencePlateSelect();
    licencePlateSelect();
}

function makeLicencePlatesContent(licencePlates){
    var _licencePlates = licencePlates;
    if(!_licencePlates&& (_licencePlates instanceof Array) && _licencePlates.length == 0){
        console.log("无车牌类型");
        _licencePlates = [{name:'无',type:99}]
    }
    var _licencePlatesContent = '';
    for(var i = 0 ; i < _licencePlates.length ; i++){
        var _item = _licencePlates[i];
        if(!checklicencePlates(_item)){
            continue;
        }
        _licencePlatesContent += "<div class='select-item' data-key='"+_item.type+"'>"+
            _item.name+
            "</div>";
    }
    return _licencePlatesContent;
}

function checklicencePlates(item){
    var _item = item;
    var _name = _item.name || '';
    var _type = _item.type || '';
    if(!_name && !_type){
        return false;
    }
    return true;
}