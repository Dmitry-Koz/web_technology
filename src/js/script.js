$(window).scroll(function(){

    let st = $(this).scrollTop();

    $('.parallax').css({
        'transform' : 'translate(0%,'+ st/7 +'%)'
    });

    if ($('.header').offset().top >= $('.pwa').offset().top - 300){
        $('.header').css({
            'transform' : 'translateY(0)'
        })
    }else{
        $('.header').css({
            'transform' : 'translateY(-300px)'
        })
    }
});


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

$('.contain-start').on('click', function(){
    $(this).addClass('active');
});