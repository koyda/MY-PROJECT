let paginationStore = (function () {
    return {
        page: 1,
        total: 1,
        record: 10,
    }
})();

let paginationView = (function () {
    function Pagination(obj) {
        if (obj) {
            let page = !obj.page ? 1 : parseFloat(obj.page);
            let record = !obj.record ? 10 : parseFloat(obj.record);
            let total = !obj.total ? 0 : parseFloat(obj.total);
            let totalPage = total == 0 ? 1 : Math.ceil(total / record);
            let pre = page <= 1 ? 1 : page - 1;
            let next = page < totalPage ? page + 1 : totalPage;
            let first = 1; let last = totalPage;
            let nav = $("<div class='main-nav-pagination'></div>");

            if (total <= record) return '';

            if (page <= 1) {
                nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page main-icon disabled main-tooltip" title="ដំបូង"><a>‹‹</a></div>
                           <div class="main_max_screen_cursor_pointer main-btn-page main-icon disabled main-tooltip" title="ថយក្រោយ"><a>‹</a></div>`);
            } else {
                nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page main-icon main-tooltip" title="ដំបូង"><a val="1">‹‹</a></div>
                <div class="main_max_screen_cursor_pointer main-btn-page main-icon main-tooltip" title="ថយក្រោយ"><a val="${ pre }">‹</a></div>`);
            }
            for (var i = page - 2; i <= page + 2; i++) {
                if (i > 0 && i <= totalPage) {
                    if (i == page) {
                        nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page active"><a>${ i }</a></div>`);
                    } else {
                        nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page"><a val="${ i }">${ i }</a></div>`);
                    }
                }
            }
            if (page >= totalPage) {
                nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page main-icon disabled main-tooltip" title="បន្ទាប់"><a>›</a></div>
                            <div class="main_max_screen_cursor_pointer main-btn-page main-icon disabled main-tooltip" title="ចុងក្រោយ"><a>››</a></div>`);
            } else {
                nav.append(`<div class="main_max_screen_cursor_pointer main-btn-page main-icon main-tooltip" title="បន្ទាប់"><a val="${ next }">›</a></div>
                        <div class="main_max_screen_cursor_pointer main-btn-page main-icon main-tooltip" title="ចុងក្រោយ"><a val="${ totalPage }">››</a></div>`);
            }

            return nav;
        }
    }

    return {
        getPagination: Pagination
    }

})();

let pagination = (function () {
    function init($selector, callBackfn) {
        if ($selector) {
            $selector.on("click", ".main-btn-page", function () {
                if ($(this).find('a').attr("val")) {
                    paginationStore.page = parseFloat($(this).find('a').attr("val"));
                    if (callBackfn) callBackfn({ page: $(this).find('a').attr("val"), record: paginationStore.record });
                }
            });
        }
    }
    function draw($selector, obj) {
        if (obj && $selector) {
            paginationStore.page = obj.page;
            paginationStore.record = obj.record;
            paginationStore.total = obj.total;
            $selector.html(paginationView.getPagination(obj));
        }
    }
    return {
        init: init,
        draw: draw

    }
})();

