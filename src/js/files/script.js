// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import ClipboardJS from 'clipboard';
import $ from "jquery";


const instance = flsModules.tippy(document.querySelector('#refferal-link'));
instance.setProps({
    onHidden(ins) {ins.setContent('Copy');},
});

const clipboard = new ClipboardJS('#refferal-link');

document.querySelector('#refferal-link')?.addEventListener('click', function(e) {
    e.preventDefault();

    clipboard.on('success', function(e) {
        instance.setContent('link successfully copied!');

        e.clearSelection();
    });
})

$('.header__community a').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('.toast').slideToggle();
    $('body').toggleClass('_toast');
})

$('body').on('click', ()=> {

    if($(this).has('_toast')) {
        $('.toast').slideUp(); 
    }

    $(this).removeClass('_toast');
});

$('.toast').on('click', (e)=> {
    e.stopPropagation();
})

//Radio
$.each($('.payment-system__item'), function(index, val) {
    if($(this).find('input').prop('checked')==true){
        $(this).addClass('_check');
    }
});
$('.payment-system__item').on('click', function(event) {
    $(this).parents('.payment-system__switch').find('.payment-system__item').removeClass('_check');
    $(this).parents('.payment-system__switch').find('.payment-system__item input').prop('checked',false);
    $(this).toggleClass('_check');
    $(this).find('input').prop('checked', true);

    return false;
});

$('.alerts__btn').on('click', function() {
    $('.alerts__btn').removeClass('_active');
    $(this).toggleClass('_active');
})



$('.bonuses__title').each(function(indx, element){
    if( $(element).attr('aria-expanded') === 'true') {
        $(element).toggleClass('_tabOpen');
        $($(element).attr('data-bs-target')).slideDown();
    }
});

$('.bonuses__title').on('click', function() {
    $('.bonuses__title').removeClass('_tabOpen');
    $(this).addClass('_tabOpen');

    $('.bonus-desc').slideUp();
    $($(this).attr('data-bs-target')).slideDown();

});

if(document.querySelector('#dateFrom')) {

    const start = flsModules.datepicker('#dateFrom', {
        id: 1,
        formatter: (input, date, instance) => {
           const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
           const value = date.toLocaleDateString('en-UK', options)
           input.value = value
       }
    });
   const end = flsModules.datepicker('#dateTo', { 
       id: 1,
       formatter: (input, date, instance) => {
           const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
           const value = date.toLocaleDateString('en-UK', options)
           input.value = value
       }
    });
}


 $('.info-bord__btn').on('click', function() {
    flsModules.popup.open('#popup');
 })

document.addEventListener("afterPopupOpen", function (e) {
    $('body').css("padding-right", "0px");
});

$('.tickets__btn').on('click', function() {
    $('.tickets__btn').removeClass('_active');
    $(this).addClass('_active');
});


$('.settings-switch__btn').each(function(indx, element){
    if( $(element).attr('aria-expanded') === 'true') {
        $(element).toggleClass('_active');
        $($(element).attr('data-bs-target')).slideDown();
    }
});

$('.settings-switch__btn').on('click', function() {
    $('.settings-switch__btn').removeClass('_tabOpen');
    $(this).addClass('_tabOpen');

    $('.settings__card').slideUp();
    $($(this).attr('data-bs-target')).slideDown();
});

$('.change-password__input').on('click', function(event) {
    event.stopPropagation();
})

$('.change-password__control').on('click', function() {
    console.log('click');
    let inp = $(this).children("input");

    if (inp.attr("type") === "password") {
        inp.attr("type", "text");
        $(this).addClass('_visible');
    } else {
        inp.attr("type", "password");
        $(this).removeClass('_visible');
    }

})

$('.tickets__controls button').on('click', function() {
    flsModules.popup.open('#chat');
})