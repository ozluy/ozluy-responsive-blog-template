
$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        //mode: 'vertical',
        useCSS: true,
        infiniteLoop: true,
        //speed: 4000,
        auto: true,
        controls: false,
        touchEnabled: false,
        pager: false,

    });

    //Contact Form Validator
    $(".contact-form").validate({
        rules: {
            fullname: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: "required",


        },
        messages: {
            fullname: "Please enter full name!",
            phone: "Please enter phone!",
            email: {
                required: "Please enter email!",
                email: "Please enter a valid email address!",
            },
            subject: "Please enter subject!",
            message: "Please enter message!"
        }

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
$('#menu-icon-wrapper2').click(function () {
    if ($('.navbar-links').hasClass('navbar-links-opened')) {
        $('.navbar-links').removeClass('navbar-links-opened');
    }
    else {
        $('.navbar-links').addClass('navbar-links-opened');
    }
})


