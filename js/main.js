$(function () {
    const vdo = $('#bgndVideo').YTPlayer({
        videoURL: 'yhxnYq3kVjI',
        containment: '.main_vi',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
        quality: 'highres',
        mute: true,
    });
    $('.main_vi .pause').on('click', function () {
        vdo.YTPPause();
    });
    $('.main_vi .play').on('click', function () {
        vdo.YTPPlay();
    });

    $('.story_slide').slick({
        arrows: false,
        fade: true,
        speed: 2000,
    });

    $('.main_story .arrows .left').on('click', function () {
        $('.story_slide').slick('slickPrev');
    });
    $('.main_story .arrows .right').on('click', function () {
        $('.story_slide').slick('slickNext');
    });

    $('.main_story .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.story_slide').slick('slickGoTo', idx);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    $('.story_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });
});