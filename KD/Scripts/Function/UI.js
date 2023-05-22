
var UI = (function () {
    function showLoad() {
        $(".main-container-loading").fadeIn(300);
    }
    function hideLoad() {
        $(".main-container-loading").fadeOut(300);
    }
    let defaultImageV = '/Content/Assets/Images/noimage-v.jpg';
    let defaultImageH = '/Content/Assets/Images/noimage-h.jpg';
    //// Confirm Dialog =========================================================================
    function askSave(obj, fnSave, fnCancel) {
        var icon = "fa fa-question-circle-o";
        var title = "Confirm";
        var content = "Do you want to save?";
        var buttons = {
            cancel: {
                text: "<i class='fa fa-times-circle'></i> Cancel",
                btnClass: "btn-default",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: "<i class='fa fa-check-circle'></i> Save",
                btnClass: "btn-blue",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave('Save');
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let type = "green";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
    }

    function askConfirm(obj, fnSave, fnCancel) {
        var icon = "fa fa-question-circle-o";
        var title = "Confirm";
        var content = "Do you want to continue?";
        var buttons = {
            cancel: {
                text: "<i class='fa fa-times-circle'></i> Cancel",
                btnClass: "btn-default",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: "<i class='fa fa-check'></i> Ok",
                btnClass: "btn-primary",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave("Save");
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }

        let type = "orange";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });

    }

    function askDelete(obj, fnSave, fnCancel) {
        var icon = "";
        var title = "បញ្ជាក់";
        var content = "តើអ្នកចង់លុបមេនទេ?";
        var buttons = {
            cancel: {
                text: "បោះបង់",
                btnClass: "main_action_ripple color-blue",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: "យល់ព្រម",
                btnClass: "main_action_ripple color-red",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave("save");
                    }
                }
            },

        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
        });
    }
    function askUpdate(obj, fnSave, fnCancel) {
        var icon = "";
        var title = "Confirm";
        var content = "Do you want to update?";
        var buttons = {
            cancel: {
                text: "បោះបង់",
                btnClass: "main_action_ripple color-nomarl",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: "យល់ព្រម",
                btnClass: "main_action_ripple color-green",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave("save");
                    }
                }
            },

        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let type = "";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
    }


    function askPrint(obj, fnSave, fnCancel) {
        var icon = "fa fa-print";
        var title = "Print";
        var content = "Do you want to Print?";
        var buttons = {
            cancel: {
                text: "<i class='fa fa-times-circle'></i> Cancel",
                btnClass: "btn-default",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: '<i class="fa fa-print"></i> Print Now',
                btnClass: "btn-blue",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave('Save');
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }

        let type = "green";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
    }



    function askReset(obj, fnSave, fnCancel) {
        var icon = "fa fa-question-circle-o";
        var title = "RESET";
        var content = "Do you want to reset?";
        var buttons = {
            save: {
                text: "RESET NOW",
                btnClass: "btn-red",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave("Save");
                    }
                }
            },
            cancel: {
                text: "<i class='fa fa-times-circle'></i> Cancel",
                btnClass: "btn-default",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },

        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }

        let type = "orange";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });

    }

    function askClose(obj, fnSave, fnCancel) {
        var icon = "";
        var title = "CLOSE";
        var content = "Do you want to close?";
        var buttons = {
            cancel: {
                text: "បោះបង់",
                btnClass: "main_action_ripple color-nomarl",
                keys: ['esc'],
                action: function () {
                    if (module.isNotEmpty(fnCancel)) {
                        fnCancel("cancel");
                    }
                }
            },
            save: {
                text: "យល់ព្រម",
                btnClass: "main_action_ripple color-red",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave("save");
                    }
                }
            },

        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }

        let type = "orange";
        let theme = "material";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });

    }




    function alert(obj, fnSave) {
        let langCode = localStorage.getItem("ocs-lang-code") == undefined ? 'km' : localStorage.getItem("ocs-lang-code");
        let lang = new Language(langCode);
        var icon = "fa fa-check";
        var title = `<text class="titile-message">Title<text>`;
        var content = `<text ocs-data-tag="text_content">Content</text>`;
        var buttons = {
            OK: {
                text: 'យល់ព្រម',
                btnClass: "main_action_ripple color-orange",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave('Ok');
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let type = "orange";
        let theme = "modern";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
        setTimeout(() => {
            lang.process('ocs-data-tag');
        }, 500);
    }
    function alertWarning(obj, fnSave) {
        var icon = "fa fa-exclamation-triangle";
        var title = "Warning";
        var content = "Alert something here?";
        var buttons = {
            OK: {
                text: "Close",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave('Ok');
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let type = "orange";
        let theme = "modern";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
    }

    function alertError(obj, fnSave) {
        var icon = "fa fa-remove";
        var title = "Error";
        var content = "Alert something here?";
        var buttons = {
            OK: {
                text: "Close",
                keys: ['enter'],
                action: function () {
                    if (module.isNotEmpty(fnSave)) {
                        fnSave('Ok');
                    }
                }
            }
        }
        if (module.isNotEmpty(obj)) {
            if (module.isNotEmpty(obj.icon)) {
                icon = obj.icon
            }
            if (module.isNotEmpty(obj.title)) {
                title = obj.title
            }
            if (module.isNotEmpty(obj.content)) {
                content = obj.content
            }
            if (module.isNotEmpty(obj.buttons)) {
                buttons = obj.buttons
            }
        }
        let type = "red";
        let theme = "modern";
        $.confirm({
            icon: icon,
            title: title,
            content: content,
            buttons: buttons,
            theme: theme,
            type: type
        });
    }


    //// Tooltip =========================================================================

    function initTooltip(selector) {
        selector.tooltip({ delay: { show: 1200, hide: 100 } });
    }
    //// Remove PreventClick =========================================================================
    function removePreventClick() {
        $(".prevent-click").removeClass("prevent-click");
    }
    // form =====================================================================================
    function resetForm($form) {
        if (module.isNotEmpty($form)) {
            $form.removeData('unobtrusiveValidation');
            $form.removeData('validator');
            $.validator.unobtrusive.parse($form);
            $form.find('.input-validation-error').addClass("valid").removeClass("input-validation-error");
            $form.find('.field-validation-error').addClass("field-validation-valid").removeClass("field-validation-error").empty();
            $form.find('.validation-summary-errors').removeClass("validation-summary-errors").addClass("validation-summary-valid");
            $form[0].reset();
            $form.find("select").niceSelect("update");
        }
    }

    function drawDropList(elem, data) {
        $(elem).find("option:first").nextAll("option").remove();
        if (data.length > 0) {
            $.each(data, function (ind, val) {
                $(elem).append($('<option></option>').val(val.Value).text(val.Text));
            });
        }
        $(elem).niceSelect('update');
    }
    // AddNiceSelectTo =====================================================================================
    function dataTableNiceSelect(table) {
        $(table).parents(".dataTables_wrapper").find("select").addClass("select_record");
        $(table).parents(".dataTables_wrapper").find("select").niceSelect();
        $(table).parents(".dataTables_wrapper").on('click', ".select_record", function () {
            $(this).toggleClass("opened");
        });
        $(document).on('click', function (e) {
            var selectRecord = $(table).parents(".dataTables_wrapper").find(".select_record");
            if (!(selectRecord.is(e.target) || selectRecord.children().is(e.target))) {
                selectRecord.removeClass("opened");
            }
        });
    }

    // datatable
    function defaultDataTable() {
        return {
            destroy: true,
            paging: false,
            ordering: false,
            info: false,
            searching: false,
            responsive: true,
        }
    }

    // snack bar
    function mySnackBar(obj) {
        let newObj = module.isNotEmpty(obj) == true ? obj : {};
        if (!module.isNotEmpty(newObj.message)) {
            newObj.message = "Your message.";
        }

        if (module.isNotEmpty(newObj.timeout)) {
            newObj.timeout = 10000;
        }

        new SnackBar(newObj);
    }


    // invoke form validation
    function invokeValidation(domForm) {
        if (module.isNotEmpty(domForm)) {
            $.validator.unobtrusive.parse(domForm);
        }
    }

    function addReadOnly($parent) {
        if (module.isNotEmpty($parent)) {
            let $selector = $parent.find("[disabled]");
            $selector.prop("readonly", true);
            $selector.attr("data-remove-disable", "yes");
            $selector.prop("disabled", false);
        }
    }

    function removeReadOnly($parent) {
        if (module.isNotEmpty($parent)) {
            let $selector = $parent.find("[data-remove-disable='yes']");
            $selector.prop("disabled", true);
            $selector.removeAttr("data-remove-disable");
            $selector.prop("readonly", false);
        }
    }

    // init funciton ==========================
    function init(callBack) {
        if (callBack) {
            callBack();
        }
    }
    function loadLanguage() {
        var translate = new Translate();
        var langCode = localStorage.getItem("ocs-lang-code");
        langCode = langCode == undefined ? "km" : langCode;
        translate.init("ocs-data-tag", langCode);
        translate.process();
    }
    function readImage(file, elementImage) {
        if (file.files && file.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(elementImage).attr('src', e.target.result);
            }
            reader.readAsDataURL(file.files[0]);
        }
    }
    function showProcessSave($dom) {
        let iconSave = "ri-save-3-line";
        let iconLoad = "ri-loader-line main-icon-loading main-bold";
        if (module.isNotEmpty($dom)) {
            $($dom).addClass('pointer-event-none').find('i').removeClass(iconSave).addClass(iconLoad);
        }
    }
    function successSave($dom) {
        let iconCheck = "ri-check-line main-bold icon-check";
        let iconLoad = "ri-loader-line main-icon-loading";
        if (module.isNotEmpty($dom)) {
            $($dom).addClass('pointer-event-none').find('i').removeClass(iconLoad).addClass(iconCheck);
            $($dom).find('.title-button').html('ជោគជ័យ');
            setTimeout(() => {
                defaulSave($dom);
            }, 1000);
        }
    }
    function defaulSave($dom) {
        let iconSave = "ri-save-3-line";
        let iconCheck = "ri-check-line main-bold icon-check";
        if (module.isNotEmpty($dom)) {
            $($dom).removeClass('pointer-event-none').find('i').removeClass(iconCheck).addClass(iconSave);
            $($dom).find('.title-button').html('រក្សាទុក');
        }
    }



    return {
        showLoad: showLoad,
        hideLoad: hideLoad,
        init: init,
        // loader
        showLoad: showLoad,
        hideLoad: hideLoad,
        // tooltip
        initTooltip: initTooltip,
        //Prevent Click
        removePreventClick: removePreventClick,
        // Confirm Dialog
        askSave: askSave,
        askConfirm: askConfirm,
        askUpdate: askUpdate,
        askDelete: askDelete,
        askPrint: askPrint,
        askReset: askReset,
        askClose: askClose,
        alert: alert,
        alertWarning: alertWarning,
        alertError: alertError,
        // form
        invokeValidation: invokeValidation,
        resetForm: resetForm,
        drawDropList: drawDropList,
        dataTableNiceSelect: dataTableNiceSelect,
        removeReadOnly: removeReadOnly,
        addReadOnly: addReadOnly,
        // datatable
        defaultDataTable: defaultDataTable,
        snackBar: mySnackBar,
        // default image
        defaultImageV: defaultImageV,
        defaultImageH: defaultImageH,
        loadLanguage: loadLanguage,
        readImage: readImage,
        // action btn when save and update
        showProcessSave: showProcessSave,
        successSave: successSave
    }
})();