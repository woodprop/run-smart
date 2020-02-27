// ------------ SLIDER ------------
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

// ------------ CATALOG ITEM SWITCH ------------
function switchDetails(item) {
    $(item).each(function (i) {
        $(this).on('click', function (link) {
            link.preventDefault();
            $('.catalog_item_data').eq(i).toggleClass('catalog_item_active');
            $('.catalog_item_details').eq(i).toggleClass('catalog_item_active');
        })
    });
}

switchDetails('.catalog_item_data');
switchDetails('.catalog_item_details');

