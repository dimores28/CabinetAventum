// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import ClipboardJS from 'clipboard';


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