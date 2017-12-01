$(function () {
    init();
});

function init(){
    var _carTypes = getCarTypes();
    var carTypes = new singleSelect('.clxx', _carTypes);
    carTypes.init(carTypesCallback);


    var _licencePlates = getLicencePlates();
    var licencePlates = new singleSelect('.cpzl', _licencePlates);
    licencePlates.init(licencePlatesCallback);

    $('.submit-button-box').on('click',function () {
        var type = $('.choosecartype  .name').text()||'';
        var plate = $('.licenceplate   .name').text()||'';
        var carcodeVal = $('.carcodeVal').val()||'';
        var caridVal = $('.caridVal').val()||'';

        if(!type || type == '请选择'){return new toast('请选择车型')}
        if(!plate ||plate == '请选择'){return new toast('请选择车牌种类')}
        if(!carcodeVal){return new toast('车牌号为空')}
        if(!caridVal){return new toast('车身架号为空')}

        $.ajax({
            type:'POST',
            url:BASHURL+'/life/getVehicleillegalinfo',
            datType: "JSON",
            contentType: "application/x-www-form-urlencoded",
            data:{code:carcodeVal,carId:caridVal,type:type},
            success:function(data){
                debugger;
                if(typeof data == "string") {
                    data = JSON.parse(data);
                }
                if(data.pub && data.pub.retCode == '00000'){
                    // callback(data.data);

                    location.href= "./index.html";
                    return
                }
                data.pub && new toast(data.pub.retMsg);
            }
        })

    })
    
}

$(document).on('click','.mask',function(){
    var oCarTypeBox = $('.choosecartype .select-list');
    $('.mask').remove();
    oCarTypeBox.hide();
});

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


function carTypesCallback() {

}

function licencePlatesCallback() {

}

// -----

$(document).on('click','.mask',function(){
    var oLicencePlateBox = $('.licenceplate .select-list');
    $('.mask').remove();
    oLicencePlateBox.hide();
})

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
