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
});