// $('.slimmenu').slimmenu({
//     resizeWidth: '991',
//     collapserTitle: '',
//     animSpeed: 'medium',
//     indentChildren: true,
//     childrenIndenter: '&raquo;'
// });

// Add class to header when scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".headersec").addClass("fixed");
        $(".stickyCall").addClass("stckyClScrolled");
    } else {
        $(".headersec").removeClass("fixed");
        $(".stickyCall").removeClass("stckyClScrolled");
    }
});

$(function () {
    $('.lazy').Lazy();
});

// Banner Slider
$(document).ready(function () {
    var owl = $('.testiCarrousel .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        items: 3,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    })
})
