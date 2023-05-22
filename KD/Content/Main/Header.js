// export class Header {
//     constructor() {
//         this.eventChangeLangauge();
//         this.whenHoverOnDarkMode();
//         this.eventBtnViewProfile();
//     }
//     eventChangeLangauge() {
//         let btnTranslateLangauge = '#btn_translate_languag';
//         let contentBtnTranslate = '.main-content-translate';
//         let dialogTranslate = '.dialog-translate';
//         let show = 'show';

//         let langCode = localStorage.getItem('ocs-lang-code') || 'km';
//         let btnItemLanguag = '.main-dialog-translate .nav-languag .image-flag';
//         let active = 'acitve-nav-languag';
//         let btnItemLangauge = '.main-dialog-translate .nav-languag';


//         $(btnItemLanguag).removeClass(active);

//         $(`.main-dialog-translate .nav-languag[data-lang="${langCode}"]`).addClass(active);
//         $(btnTranslateLangauge).click(function () {
//             $(this).parent(contentBtnTranslate).toggleClass(show);
//         });
//         $(document).on('mouseup', (e) => {
//             if (!$(dialogTranslate).is(e.target) && $(dialogTranslate).has(e.target).length == 0 && !$(btnTranslateLangauge).is(e.target) && $(btnTranslateLangauge).has(e.target).length == 0) {
//                 $(contentBtnTranslate).removeClass(show);
//             }
//         });
//         $(document).on('click', btnItemLangauge, function () {
//             let _this = $(this);
//             let _lang = _this.attr('data-lang');
//             localStorage.setItem('ocs-lang-code', _lang);
//             window.location.reload();
//         })
//     }
//     whenHoverOnDarkMode() {
//         let btn_main_dark_mode = "#btn_main_dark_mode";
//         $(btn_main_dark_mode).hover(() => {
//             setTimeout(() => {
//                 $(btn_main_dark_mode).find('i').removeClass('ri-sun-line').addClass('ri-moon-line');
//             },120);
//         });
//         $(btn_main_dark_mode).mouseleave(() => {
//             setTimeout(() => {
//                 $(btn_main_dark_mode).find('i').removeClass('ri-moon-line').addClass('ri-sun-line');
//             }, 120);
//         });
//     }
//     eventBtnViewProfile() {
//         let btnProfile = ".main-content-profile #btn_profile";
//         let contentProfile = ".main-content-profile";
//         let dialogProfile = ".main-content-profile #dialog-profile";

//         $(btnProfile).click((e) => {
//             let $this = $(e.currentTarget);
//             $this.parent(contentProfile).toggleClass('show');
//         });
//         $(document).on('mouseup', (e) => {
//             if (!$(contentProfile).is(e.target) && $(dialogProfile).has(e.target).length == 0 && !$(contentProfile).is(e.target) && $(contentProfile).has(e.target).length == 0) {
//                 $(contentProfile).removeClass('show');
//             }
//         });
//     }
// }
// $(document).ready(function () {
//     new Header();
// });