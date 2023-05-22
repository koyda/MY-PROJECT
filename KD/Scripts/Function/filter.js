var filter = (function () {
    function initFilterRecord(dom, callBack) {
        let _btnSelectRecord = dom + ' .btn-record-display';
        let _recordDisplay = dom + ' .btn-record-display .text-record-display';
        let _recordCloneDisplay = dom + ' .record-clone-display';
        let _contentSelectItemSelect = dom + ' .content-item-select';
        let _mainSelectRecord = dom;
        let _item = dom + ' .content-item-select .item';
        let isShow = true;
        $(_btnSelectRecord).on('click', () => {
            $(_mainSelectRecord).addClass('show');
            if (isShow) {
                $(_mainSelectRecord).addClass('show');
                isShow = false;
            } else {
                $(_mainSelectRecord).removeClass('show');
                isShow = true;
            }
        });
        $(document).on('mouseup', (e) => {
            if (!$(_btnSelectRecord).is(e.target) && $(_btnSelectRecord).has(e.target).length == 0 && !$(_contentSelectItemSelect).is(e.target) && $(_contentSelectItemSelect).has(e.target).length == 0) {
                $(_mainSelectRecord).removeClass('show');
                isShow = true;
            }
        });
        $(document).on('click', _item, (e) => {
            let $this = $(e.currentTarget);
            let valueItem = $this.text().trim();
            $(_recordDisplay).text(valueItem);
            $(_recordCloneDisplay).val(valueItem);
            $(_mainSelectRecord).removeClass('show');
            isShow = true;
            if (callBack) callBack(valueItem);
        });
    }
    function initFilterSearch(dom, valueSearch) {
        let time = null;
        let iconSearch = dom + ' ' + '.icon-search';
        let inputSearch = dom + ' ' + '.form-control-search';
        let iconClear = dom + ' ' + '.nav-btn-clear-search';
        $(document).on('input', inputSearch, (e) => {
            let $this = $(e.currentTarget);
            let value = $this.val();
            clearTimeout(time);
            time = setTimeout(() => { valueSearch(value) }, 600);
            if (value != '') {
                $(iconClear).css({ "transform": "scale(1)", "opacity": "1" });
            } else {
                $(iconClear).css({ "transform": "scale(0)", "opacity": "0" });
            }
        });
        $(document).on('click', iconSearch, () => {
            let value = $(inputSearch).val();
            clearTimeout(time);
            if (value != '') valueSearch(value);
        });
        $(document).on('click', iconClear, () => {
            $(inputSearch).val('');
            clearTimeout(time);
            $(iconClear).css({ "transform": "scale(0)", "opacity": "0" });
            valueSearch('');
        });
        $(document).on('keypress', (e) => {
            if (e.which == '13') {
                let value = $(inputSearch).val();
                clearTimeout(time);
                valueSearch(value);
            }
        });
    }
    return {
        initFilterRecord: initFilterRecord,
        initFilterSearch: initFilterSearch
    };
})();