
$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        //mode: 'vertical',
        useCSS: true,
        infiniteLoop: true,
        //speed: 4000,
        auto: true,
        controls: false,
        easing: 'ease',
        touchEnabled: false,
        pager: true,

    });



});

$(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
        $('.bg-nav').addClass('nav-hovered');
    }
    else {
        $('.bg-nav').removeClass('nav-hovered');
    }
});


//showMobileMunu 
$('#menu-icon-wrapper').click(function () {
    if ($('.navbar-links').hasClass('navbar-links-opened')) {
        $('.navbar-links').removeClass('navbar-links-opened');
    }
    else {
        $('.navbar-links').addClass('navbar-links-opened');
    }
})




