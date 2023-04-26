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
    $('.toast').slideToggle();
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