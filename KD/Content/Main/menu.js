export class MainControllerMenu {
    constructor() {
        this.eventColapsedMenu();
        this.eventHoverOnMenu();
        this.eventActiveMenu();
    }

    eventColapsedMenu() {
        let dataIsCollapsed = localStorage.getItem('main-is-collapsed') || 'false';
        let $btnCollapsedAndClose = $('.btn_collaps_menu_js');
        let $btnCollapsSystem = $(".btn_collaps_menu_js");
        let _navBar = $('.main-container-left-menu');
        let _winWidth = $(window).outerWidth();
        let maxLayout = '<img src="/Content/Assets/icon/maxLayout.png" />';
        let minLayout = '<img src="/Content/Assets/icon/minLayout.png" />';

        dataIsCollapsed == 'true' ? _navBar.addClass('is-collapsed') : _navBar.removeClass('is-collapsed');
        dataIsCollapsed == 'true' ? $btnCollapsSystem.find('.main-icon').html(minLayout) : $btnCollapsSystem.find('.main-icon').html(maxLayout);

        if (_winWidth <= 768) _navBar.addClass('is-collapsed');

        $btnCollapsedAndClose.on('click', function () {

            if (_navBar.hasClass('is-collapsed')) {
                _navBar.removeClass('is-collapsed');
                _navBar.addClass('is-not-collapsed-with-animation');
                localStorage.setItem('main-is-collapsed', 'false');
                $btnCollapsSystem.find('.main-icon').html(maxLayout);
            } else {
                setTimeout(() => {
                    _navBar.addClass('is-collapsed');
                    localStorage.setItem('main-is-collapsed', 'true');
                }, 250);
                _navBar.addClass('is-collapsed-with-animation');
                $btnCollapsSystem.find('.main-icon').html(minLayout);
            }

            setTimeout(() => {
                _navBar.removeClass('is-collapsed-with-animation');
                _navBar.removeClass('is-not-collapsed-with-animation');
            }, 250);

        });
    }
    eventHoverOnMenu() {
        $('[main-tooltip-menu]').on('mouseover', function (e) {
            let _this = $(this);
            let _parent = $('.main-container-left-menu');
            if (_parent.hasClass('is-collapsed')) {
                let _height = _this.outerHeight();
                let _width = _this.outerWidth();
                let _top = _this.offset().top;
                let _title = _this.children('.main-title').text().trim();
                let _tooltipElm = $(`<div class="main-tooltip-menu">${ _title }</div>`);

                $('.main-tooltip-menu').remove();
                $('body').append(_tooltipElm);

                let _tooltipHeight = _tooltipElm.outerHeight();

                _height = _height / 2;
                _tooltipHeight = _tooltipHeight / 2;
                _tooltipElm.css({
                    left: `${ _width + 14 }px`,
                    top: `${ (_top + (_height - _tooltipHeight)) }px`
                });
            }
        }).on('mouseleave', function () {
            $('.main-tooltip-menu').remove();
        });
    }
    eventActiveMenu() {
        let $menu = ".main_btn_menu_left_menu_js";
        let menuActive = 'main-menu-active';
        $($menu).on('click', function () {

            let $this = $(this);
            $($menu).removeClass(menuActive);
            $this.addClass(menuActive);

            let currentUrlMenu = $this.attr('href');
            let currentUrl = window.location.origin;
            let newUrl = currentUrl + currentUrlMenu;
            setTimeout(() => { window.location.assign(newUrl) }, 250);

        });
    }
}
$(document).ready(function () {
    new MainControllerMenu();
});
