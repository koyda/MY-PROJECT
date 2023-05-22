
class FilterChip {
    constructor() {
        this.initFilterChip();
    }
    initFilterChip() {
        let main = '.btn-filter-chip';
        let _mainFilterChip = ".nav-filter-chip";
        let _content = '.nav-dialog-filter-chip';
        let _iconClose = '.ocs-action-btn-close-chip';
        let _btnClose = '.btn-close-dialog-chip';
        let isShow = true;
        $(main).on('click', (e) => {
            let $this = $(e.currentTarget);
            $this.parents(_mainFilterChip).addClass('show');
            if (isShow) {
                $this.parents(_mainFilterChip).addClass('show');
                isShow = false;
            } else {
                $this.parents(_mainFilterChip).removeClass('show');
                isShow = true;
            }
        });
        $(document).on('mouseup', (e) => {
            if (!$(_content).is(e.target) && $(_content).has(e.target).length == 0 && !$(main).is(e.target) && $(main).has(e.target).length == 0) {
                $(_mainFilterChip).removeClass('show');
                isShow = true;
            }
        });
        $(_iconClose).click(() => {
            $(_mainFilterChip).removeClass('show');
            isShow = true;
        });
        $(_btnClose).click(() => {
            setTimeout(() => {
                $(_mainFilterChip).removeClass('show');
                isShow = true;
            }, 100);
        });
    }
}
$(document).ready(() => {
    new FilterChip();
});
