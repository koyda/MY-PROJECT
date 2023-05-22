//S MAIN ACTIVE MENU LEFT
(function (window, $) {
    // dom string 
    let domcontentMenu = '.main-wrapper .main-container-menu-left-menu';
    let domBtnLink = '.main-btn-menu-left-menu';
    let domactive = 'router-link-active';
    let domTextMenu = '.main-title';

    $.fn.mainActiveMenu = function () {
        let $this = $(this);
        $this.addClass(domactive);
        let text = $this.children(domTextMenu).text().trim();
        document.title = `D AUDIO - ${text}`;
    }
})($(window), jQuery);
//E MAIN ACTIVE MENU LEFT