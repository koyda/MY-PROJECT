let ModalDialog = (function () {
    function showDialog($selector) {
        if ($selector) {
            $selector.addClass('show-dialog');
        }
    }
    function hideDialog($selector) {
        if ($selector) {
            $selector.addClass('hide-dialog');
            setTimeout(() => {
                $selector.removeClass('show-dialog');
                $selector.removeClass('hide-dialog');
            }, 300);
        }
    }
    return {
        showDialog: showDialog,
        hideDialog: hideDialog
    };
})();