$(function () {
    $('.takePhoto').on('click',function () {
        jsapi.app.takePhoto({},function () {

        });
    });

    $('.galleryPicChoise').on('click',function () {
        jsapi.app.galleryPicChoise({},function () {

        });
    });

});