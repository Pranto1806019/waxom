$(function () {

    //video play
    $('.venobox').venobox();
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    $('.blog-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: 0,

        responsive: [
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
                
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                
              }
            },
            
            
          ]

    });
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.navbar').addClass('bg');
        }
        else {
            $('.navbar').removeClass('bg');
        }


    });


});