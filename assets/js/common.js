
$(document).ready(function () {
    $('.bxslider').bxSlider({
        //mode: 'fade',
        mode: 'vertical',
        useCSS: true,
        infiniteLoop: true,
        //speed: 4000,
        auto: true,
        controls: false,
        easing: 'ease',
        touchEnabled:false,
        pager: false
        //onSliderLoad: function () {
        //    //$("#slider-wrapper").fadeIn();
        //    //$(".bx-slider-loader").hide();
        //}
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
    


}

