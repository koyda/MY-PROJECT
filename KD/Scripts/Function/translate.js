function loadTraslate() {
    let langCode = localStorage.getItem("main-lang-code");
    langCode = langCode == "undefined" || langCode == null ? "kh" : langCode;
    let language = new Language(langCode);
    language.process('main-translate');
}
class Language {
    constructor(langCode) {
        let _lanCode = localStorage.getItem('main-lang-code');
        this._code = langCode || _lanCode;
        this.eventChangeLangauge();
        this.whenHoverOnDarkMode();
        this.eventBtnViewProfile();
    }
    get code() { return this._code; }
    process(attr) {
        let xhrFile = new XMLHttpRequest();

        xhrFile.open("GET", `/Language/langs/${this._code}.json`, false);
        xhrFile.onreadystatechange = function () {
            if (xhrFile.readyState === 4) {
                if (xhrFile.status === 200 || xhrFile.status == 0) {
                    let LngObject = JSON.parse(xhrFile.responseText);
                    let allDom = document.getElementsByTagName("*");
                    let input = ['input', 'textarea'];
                    let btnTypes = ['button', 'submit'];
                    let unknown = this.lng == 'kh' ? 'មិនស្គាល់' : 'Unknown';

                    for (let i = 0; i < allDom.length; i++) {
                        let elem = allDom[i];
                        let key = elem.getAttribute(attr);

                        if (key != null) {
                            if (input.includes(elem.tagName.toLowerCase())) {
                                let _type = elem.getAttribute('type')

                                if (btnTypes.includes(_type)) {
                                    elem.value = LngObject[key] === undefined ? unknown : LngObject[key];
                                } else {
                                    elem.placeholder = LngObject[key] === undefined ? unknown : LngObject[key];
                                }
                            } else
                                elem.innerHTML = LngObject[key] === undefined ? unknown : LngObject[key];
                        }
                    }
                }
            }
        };
        xhrFile.send();
    }

    // get single language by key
    translate(key) {
        let _value;
        let xhrFile = new XMLHttpRequest();

        xhrFile.open("GET", `/Language/langs/${this._code}.json`, false);
        xhrFile.onreadystatechange = function () {
            if (xhrFile.readyState === 4) {
                if (xhrFile.status === 200 || xhrFile.status == 0) {
                    var LngObject = JSON.parse(xhrFile.responseText);
                    var unknown = this._code == 'kh' ? 'មិនស្គាល់' : 'Unknown';
                    _value = LngObject[key] === undefined ? unknown : LngObject[key];
                }
            }
        };
        xhrFile.send();
        return _value;
    }
    eventChangeLangauge() {
        let btnTranslateLangauge = '#btn_translate_languag';
        let contentBtnTranslate = '.main-content-translate';
        let dialogTranslate = '.dialog-translate';
        let show = 'show';

        let langCode = localStorage.getItem('main-lang-code') || 'kh';

        let btnItemLanguag = '.main-dialog-translate .nav-languag .image-flag';
        let active = 'acitve-nav-languag';
        let btnItemLangauge = '.main-dialog-translate .nav-languag';


        $(btnItemLanguag).removeClass(active);

        $(`.main-dialog-translate .nav-languag[main-lang-code="${langCode}"]`).addClass(active);
        $(btnTranslateLangauge).click(function () {
            $(this).parent(contentBtnTranslate).toggleClass(show);
        });
        $(document).on('mouseup', (e) => {
            if (!$(dialogTranslate).is(e.target) && $(dialogTranslate).has(e.target).length == 0 && !$(btnTranslateLangauge).is(e.target) && $(btnTranslateLangauge).has(e.target).length == 0) {
                $(contentBtnTranslate).removeClass(show);
            }
        });
        $(document).on('click', btnItemLangauge, function () {
            let _this = $(this);
            let _lang = _this.attr('main-lang-code');
            console.log(_lang)
            localStorage.setItem('main-lang-code', _lang);
            window.location.reload();
        })
    }
    whenHoverOnDarkMode() {
        let btn_main_dark_mode = "#btn_main_dark_mode";
        $(btn_main_dark_mode).hover(() => {
            setTimeout(() => {
                $(btn_main_dark_mode).find('i').removeClass('ri-sun-line').addClass('ri-moon-line');
            }, 120);
        });
        $(btn_main_dark_mode).mouseleave(() => {
            setTimeout(() => {
                $(btn_main_dark_mode).find('i').removeClass('ri-moon-line').addClass('ri-sun-line');
            }, 120);
        });
    }
    eventBtnViewProfile() {
        let btnProfile = ".main-content-profile #btn_profile";
        let contentProfile = ".main-content-profile";
        let dialogProfile = ".main-content-profile #dialog-profile";

        $(btnProfile).click((e) => {
            let $this = $(e.currentTarget);
            $this.parent(contentProfile).toggleClass('show');
        });
        $(document).on('mouseup', (e) => {
            if (!$(contentProfile).is(e.target) && $(dialogProfile).has(e.target).length == 0 && !$(contentProfile).is(e.target) && $(contentProfile).has(e.target).length == 0) {
                $(contentProfile).removeClass('show');
            }
        });
    }
}