export class View {
    constructor() {
        this.pagination = pagination;
    }
    initTable() {
        $('#table').DataTable({
            responsive: true,
            paging: false,
            searching: false,
            destroy: true,
            info: false,
            drawCallback: function () {
                let api = this.api();

                setTimeout(() => {
                    api.columns.adjust();
                    api.responsive.recalc();
                }, 50);
            },
            columns: [
                {
                    data: null,
                    className: "all",
                    render: function (data) {
                        return data.Name;
                    }
                },
                {
                    data: null,
                    nameClass: "min-width",
                    render: function (data) {
                        return `<div class="main-nav-status-table"><div class="main-box-status ${data.Status == "1" ? "enable" : "disable"}">${data.Status == "1" ? '<i class="ri-checkbox-circle-fill"></i>' : '<i class="ri-close-circle-fill"></i>'}</div></div>`;
                    }
                },
                {
                    data: null,
                    nameClass: "min-width",
                    render: function (data) {
                        return data.UserCreate;
                    }
                },
                {
                    data: null,
                    className: "min-width",
                    render: function (data) {
                        return data.DateCreate;
                    }
                },
                {
                    data: null,
                    nameClass: "min-width",
                    render: function (data) {
                        return data.UserUpdate;
                    }
                },
                {
                    data: null,
                    className: "min-width",
                    render: function (data) {
                        return data.DateUpdate;
                    }
                },
                {
                    data: null,
                    className: "all min-width",
                    orderable: false,
                    render: (data) => {
                        return `<div class="nav-a-t-btn">
                                            <button class ="main_action_ripple a-t-btn color-view main-tooltip"   main-color-ripple="rgba(0, 188, 212, 0.1)" data-toggle="tooltip" title="លម្អិត" id="btn_view"><i class="ri-eye-line"></i></button>
                                            <button class ="main_action_ripple a-t-btn color-update main-tooltip" main-color-ripple="rgba(139, 195, 75, 0.1)"   data-toggle="tooltip" title="កែប្រែ"​ id="btn_update"><i class="ri-pencil-fill"></i></button>
                                            <button class ="main_action_ripple a-t-btn color-delete main-tooltip" main-color-ripple="rgba(255, 116, 116, 0.1)"   data-toggle="tooltip" title="លុប" id="btn_delete"><i class="ri-delete-bin-3-line"></i></button>
                                </div>`;
                    }
                },
            ],
        });
    }
    responsiveTable() {
        let table = $('#table');
        let api = table.DataTable();
        setTimeout(() => {
            api.columns.adjust();
            api.responsive.recalc();
        }, 200);
    }
    drawTable(data) {
        let dataTable = $('#table').DataTable();
        dataTable.clear();
        dataTable.rows.add(data);
        dataTable.order([2, 'disc']).draw();
        this.responsiveTable();
    }
    addEventBtnReload(fn) {
        $('#btn_reload').click(() => {
            fn();
        });
    }
    initPagination(obj) {
        pagination.draw($("#pagination"), obj);
    }
    evnetPagination(fn) {
        pagination.init($("#pagination"), (obj) => {
            fn(obj.page);
        });
    }
    initFilterRecord(fn) {
        filter.initFilterRecord('#list_filter_record', (record) => {
            fn();
        });
    }
    initFilterSearch(fn) {
        filter.initFilterSearch('#btn_main_search', (value) => {
            fn(value);
        });
    }
    // s create
    initDropList({ search, select }) {
        return $("#nationlity_drop_list").dropList({
            map: {
                map: {
                    text: `<div class="drop-list-content drop-list-content-column"><span class="drop-list-name-text">{${isKm ? "Name" : "NameEnglish"}}</span></div>`,
                    value: "{Id}",
                    display: `<div class='drop-list-content'><span class='drop-list-name-text'>{${isKm ? "Name" : "NameEnglish"}}</span></div>`,
                },
                onSelect: (d) => {
                    if ($.isFunction(select)) select(d);
                },
                data: null,
                placeholder: 'សូមជ្រើសរើស',
                onSearch: (s) => {
                    if ($.isFunction(search)) search(s);
                },
                modalMode: true,
                className: '',
                fixedParent: ""
            }
        });
    }
    addEventAddCreate() {
        $('#btn_add_new').click(() => {
            $("#modal_create").addClass('show');
        });
    }
    addEventCloseModalCreate() {
        $('.btn_close_modal_create').click(() => {
            ModalDialog.hideDialog($('#modal_dialog_create'));
        });
    }
    // e create
    addEventView(fn) {
        $(document).on('click', '#btn_view', () => {
            fn();
        });
    }
    addEventBackpage(fn) {
        $(document).on('click', '#btn_back_page', () => {
            setTimeout(() => { fn() }, 150);
        });
    }
    addEventUpdate(fn) {
        $(document).on('click', '#btn_update', () => {
            // $("#modal_update").addClass('show');
            fn();
        });
    }
    addEventDelete(fn) {
        $(document).on('click', '#btn_delete', () => {
            fn();
        });
    }
    addEventSave(fn) {
        $(document).on('click', '#btn_save_products', () => {
            fn();
        });
        $(document).on('click', '#btn_save_update_products', () => {
            fn();
        });
    }

}