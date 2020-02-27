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


// ------------ CATALOG TABS SWITCH ------------
$('ul.catalog_tabs_wrapper').on('click', 'li:not(.catalog_tab_active)', function () {
    $(this)
        .addClass('catalog_tab_active')
        .siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_items_wrapper')
        .removeClass('catalog_active')
        .eq($(this).index()).addClass('catalog_active');
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

