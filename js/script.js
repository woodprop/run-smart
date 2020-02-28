let mailer = 1;
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


// ------------ MODAL WINDOWS ------------

$('[data-modal=consultation]').on('click', function () {
    $('.modal').css('display', 'flex').hide().fadeIn();
    $('.modal_window_consultation').fadeIn();
});

$('.catalog_item_btn').each(function (i) {
    $(this).on('click', function () {
        $('.modal').css('display', 'flex').hide().fadeIn();
        $('.modal_window_order').fadeIn();
        $('.modal_window_order .modal_window_subtitle').text($('.catalog_item_title').eq(i).text());
    })
});

$('.modal_window_close-btn').on('click', function () {
    $('.modal_window').fadeOut();
    $('.modal').fadeOut();
});


// ------------ FORM PHONE MASK ------------

$('input[name=phone]').mask("+7 (999) 999-9999");


// ------------ FORM VALIDATION ------------

function validateForm(form) {
    $(form).validate({
        rules: {
            name: 'required',
            phone: 'required',
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Введите имя",
            phone: "Введите телефон",
            email: {
                required: "Введите e-mail",
                email: "Адрес должен быть формата: name@domain.ru"
            }
        }
    });
}

validateForm('.consultation .contact_form');
validateForm('.modal_window_consultation .contact_form');
validateForm('.modal_window_order .contact_form');


// ------------ SEND MAIL ------------

function sendMail(selector) {
    let formValidator = $(selector).validate();
    $(selector).submit(function (form) {
        form.preventDefault();
        if (formValidator.form()) {
            // AJAX requesr here
            $(this).find('input').val('');
            $('.modal_window').hide();
            $('.contact_form').trigger('reset');
            if (selector.indexOf('modal') == -1) {
                $('.modal').css('display', 'flex').hide().fadeIn();
            }
            $('.modal_window_success').fadeIn();
        }
    })
}

sendMail('.consultation .contact_form');
sendMail('.modal_window_consultation .contact_form');
sendMail('.modal_window_order .contact_form');

