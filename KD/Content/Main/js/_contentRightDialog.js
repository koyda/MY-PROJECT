$(document).ready(function () {

    let btn = ".use_all_btn_close_js_right_dialog";
    let rightDialog = ".main-container-right-dialog";

    $(document).on('click', btn, function () {
        let $this = $(this);
        setTimeout(() => {
            $this.parents(rightDialog).removeClass('show');
        }, 50);
    });

    let backgroundDialog = ".main-container-right-dialog.false";
    $(document).on('click', backgroundDialog, function () {
        $(backgroundDialog).removeClass('show');
    });

    let content = ".main-content-dialog";
    $(document).on('click', content, function (e) {
        e.stopPropagation();
    });

});


var RightDialog = (function () {
    let backgroundDialog = ".main-container-right-dialog";
    let contentDialog = ".main-content-dialog";
    let htmlLoad = '<div class="main-loading-in-right-dialog"><div class="box-loader-in-right-dialog"></div></div>';
    function showLoadRightDialog() {
        $(backgroundDialog).each(function (e) {
            let $this = $(this);
            if ($this.hasClass('show')) {
                $this.find(contentDialog).append($(htmlLoad).hide().fadeIn(300));
            }
        });
    }
    function hideLoadRightDialog() {
        $(contentDialog).find('.main-loading-in-right-dialog').fadeOut(250);
        setTimeout(() => {
            $(contentDialog).find('.main-loading-in-right-dialog').remove();
        }, 250);
    }
    return {
        showLoadRightDialog: showLoadRightDialog,
        hideLoadRightDialog: hideLoadRightDialog
    }
})();