const slider = tns({
    container: '.slider_viewport',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    autoplay: false,
    autoHeight: false,
    loop: true,
    rewind: false,
    speed: 500,
});

document.querySelector('.slider_prev_btn').addEventListener('click', function () {
    slider.goTo('prev')
});
document.querySelector('.slider_next_btn').addEventListener('click', function () {
    slider.goTo('next')
});