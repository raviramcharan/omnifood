$(window).scroll(function () {
    if ($(this).scrollTop() > $('nav').height()) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }
});

$('.js--scroll-to-plans').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
});

$('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
});

$('.nav-icon').click(function () {
    var nav = $('.main-nav');
    var icon = $('.nav-icon');

    nav.slideToggle(200);

    //     if (icon.hasClass('ion-navicon-round')) {
    //         icon.addClass('ion-close-round');
    //         icon.removeClass('ion-navicon-round');
    //     } else {
    //         icon.addClass('ion-navicon-round');
    //         icon.removeClass('ion-close-round');
    //     }        
});