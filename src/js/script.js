$(window).scroll(function(){

    let st = $(this).scrollTop();

    $('.parallax').css({
        'transform' : 'translate(0%,'+ st/7 +'%)'
    });

});