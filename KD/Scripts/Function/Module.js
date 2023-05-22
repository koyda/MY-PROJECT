Number.prototype.currency = function (sign, append) {
    sign = isNotEmpty(sign) ? sign : "";
    if (append != true)
        return (sign + this.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })).trim();
    return (this.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + sign).trim();
}
Number.prototype.toPosibleFixed = function (digit) {
    digit = module.isNotEmpty(digit) ? parseInt(digit) : 2;
    return (this.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: digit })).trim();
}
String.prototype.currency = function (sign, prepend) {
    var num = parseFloat(this);
    sign = module.isNotEmpty(sign) ? sign : "";
    if (prepend === true)
        return (sign + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })).trim();
    return (num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + sign).trim();
}
String.prototype.selectorName = function () {
    if (!module.isNotEmpty(this)) return "";
    let f = this.substr(0, 1);
    return f == "." || f == "#" ? this.substr(1) : this;
}
Array.prototype.sumProperty = function (Property) {
    if (Property) {
        return this.reduce((a, b) => a + b[Property] || 0, 0);
    }
    return 0;
}

String.prototype.toFixedNumber = function (fixLength) {
    fixLength = module.isNotEmpty(fixLength) ? fixLength : 2;
    if (module.isNotEmpty(this)) {
        return parseFloat(parseFloat(this).toFixed(fixLength));
    }
    return 0;
}
Number.prototype.toFixedNumber = function (fixLength) {
    fixLength = module.isNotEmpty(fixLength) ? fixLength : 2;
    if (module.isNotEmpty(this)) {
        return parseFloat(this.toFixed(fixLength));
    }
    return 0;
}

var module = (function () {
    // string date format
    var stringDateTimeFormat = {
        dateFormat: 'MMMM DD, YYYY',
        timeFormat: 'HH:mm:ss',
        timeFormatA: 'LT',
        dateTimeFormat1: 'MMMM DD, YYYY HH:mm',
        dateTimeFormat: 'MMMM DD, YYYY HH:mm:ss',
        datePickerFormat: 'F d, Y',
        timePickerFormat: 'H:i:00',
        dateTimePickerFormat: 'F d, Y H:i:00',
        serverDateFormat: 'YYYYMMDD',
        serverDateTimeFormat: 'YYYYMMDDHHmmss',
        svDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        formatDatePassServer: "MM/DD/YYYY",
        html5DateFormat: "YYYY-MM-DD",
    };
    let dataType = {
        number: "number",
        text: "text",
        currency: "currency",
        date: "date",
    }

    function valueByType({ value, type, digit, sign }) {
        if (isNotEmpty(value)) {
            if (!isNotEmpty(type)) return value;
            if (type == dataType.number) {
                return value.toFixedNumber(digit);
            } else if (type == dataType.currency) {
                return value.currency(sign);
            } else if (type == dataType.date) {
                return dateToDisplayDate(value);
            } else {
                return value;
            }
        }
    }
    // default authentication header
    function getAjaxHeader() {
        return { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
    }
    function getUrl(urlString) {
        if (isNotEmpty(urlString)) {
            // check is it has Protocol
            if (urlString.substring(0, 4).toLowerCase() == 'http') return urlString;
            // remove back slash in case it begin with it
            if (urlString.substring(0, 1) == "/") {
                urlString = urlString.substring(1, urlString.length);
            }
            let __api = ApiUrl;
            // remove back slash from the end of root api url
            if (isNotEmpty(__api) && __api.substring(__api.length - 1, 1) == "/") {
                __api = __api.substring(0, __api.length - 1);
            }
            return `${__api}/${urlString}`;
        }
        return "";     

    }
    // ajax get html
    function GetHtml(obj) {
        if (obj) {
            var newObj = obj;
            newObj.method = "GET";
            newObj.headers = { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
            newObj.contentType = "application/json";
            newObj.xhrFields = { withCredentials: true };
            $.ajax(newObj);
        }
    }
    // ajax get data
    function GetData(obj) {
        if (obj) {
            var newObj = obj;
            newObj.url = getUrl(obj.url);
            newObj.method = "GET";
            newObj.headers = { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
            newObj.contentType = "application/json";
            //newObj.xhrFields = { withCredentials: true };
            return $.ajax(newObj);
        }
    }

    // ajax post data
    function PostData(obj) {
        if (obj) {
            var newObj = obj;
            newObj.url = getUrl(obj.url);
            newObj.method = "POST";
            newObj.headers = { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
            newObj.contentType = "application/json";
            newObj.dataType = "JSON";
            newObj.data = JSON.stringify(obj.data);
            //  newObj.xhrFields = { withCredentials: true };
            return $.ajax(newObj);
        }
    }
    // ajax update data
    function PutData(obj) {
        if (obj) {
            var newObj = obj;
            newObj.url = getUrl(obj.url);
            newObj.method = "PUT";
            newObj.headers = { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
            newObj.contentType = "application/json";
            newObj.dataType = "JSON";
            newObj.data = JSON.stringify(obj.data);
            //newObj.xhrFields = { withCredentials: true };
            $.ajax(newObj);
        }
    }
    // ajax remove data
    function DeleteData(obj) {
        if (obj) {
            var newObj = obj;
            newObj.url = getUrl(obj.url);
            newObj.method = "DELETE";
            newObj.headers = { "Authorization": `Bearer ${dataStore.token}`, "oc_device_id": `${dataStore.deviceId}`, "oc_database": `${dataStore.database}` };
            newObj.contentType = "application/json";
            //newObj.xhrFields = { withCredentials: true };
            $.ajax(newObj);
        }
    }

    // convert date to display datetime
    function dateToDisplayDatetime(date) {
        var newDate = moment(date);
        if (newDate.isValid()) {
            return newDate.format(stringDateTimeFormat.dateTimeFormat);
        } else {
            return "";
        }
    }
    // convert date to diplay date
    function dateToDisplayDate(date) {
        var newDate = moment(date);
        if (newDate.isValid()) {
            return newDate.format(stringDateTimeFormat.dateFormat);
        } else {
            return "";
        }
    }

    // convert long date to diplay datetime
    function longDateToDisplayDatetime(date) {
        var newDate = moment(date, stringDateTimeFormat.serverDateTimeFormat);
        if (newDate.isValid() && date != 0) {
            return newDate.format(stringDateTimeFormat.dateTimeFormat);
        } else {
            return "";
        }
    }
    // convert datetime to string
    function getDateTimeAsString() {
        return moment().format(stringDateTimeFormat.serverDateTimeFormat);
    }

    // check is not empty
    function isNotEmpty(str) {
        if (typeof (str) == "function") {
            return true;
        } else if (str == null) {
            return false;
        } else if (str == undefined) {
            return false;
        } else if (typeof (str) == "string") {
            return str.length == 0 || str == "" || str.trim() == "" ? false : true;
        } else {
            return str.length == 0 || $.isEmptyObject(str) ? false : true;
        }
    }
    // convert array form data to object
    function arrayFormDataToObject(arrayObject) {
        if (Array.isArray(arrayObject)) {
            var obj = {};
            arrayObject.forEach(function (value, index) {
                obj[value.name] = value.value;
            });
            return obj;
        }
        return null;
    }

    function isNullToEmpty(data) {
        return data == null || data == undefined ? "" : data;
    }

    function init() {
        SnackBarSelector.on("click", ".oc-snack-bar", function () {
            $(this).remove();
        });
    }

    function language() {
        let lang = localStorage["ocs-lang-code"];
        return !isNotEmpty(lang) ? "km" : lang;
    }

    function getFormData($form) {
        if (!isNotEmpty($form)) return;
        let original = $form.serializeArray();
        return arrayFormDataToObject(original);
    }
    function ocsNumberOrder() {
        var langCode = localStorage.getItem("ocs-lang-code");

        langCode = langCode == undefined ? "km" : langCode;
        $('.ocs-no').empty();
        let html = langCode == 'km' ? `<text>លរ</text>` : `<text>N</text><sup>o</sup>`;
        $('.ocs-no').append(html);
    }

    function gefaultDatatable() {
        return {
            destroy: true,
            paging: false,
            ordering: false,
            info: false,
            searching: false,
            responsive: true,
            drawCallback: function () {
                let api = this.api();
                setTimeout(() => {
                    api.columns.adjust().responsive.recalc();
                }, 50);
            }
        }
    }

    return {
        init: init,
        // datetime
        getDateTimeFormat: stringDateTimeFormat,
        format: stringDateTimeFormat,
        dateToDisplayDatetime: dateToDisplayDatetime,
        longDateToDisplayDatetime: longDateToDisplayDatetime,
        dateToDisplayDate: dateToDisplayDate,
        getDateTimeAsString: getDateTimeAsString,
        // string
        isNotEmpty: isNotEmpty,
        isNullToEmpty: isNullToEmpty,
        // array and object
        arrayFormDataToObject: arrayFormDataToObject,
        // Ajax Function
        GetData: GetData,
        PostData: PostData,
        PutData: PutData,
        DeleteData: DeleteData,
        GetHtml: GetHtml,
        getAjaxHeader: getAjaxHeader,
        GetUrl: getUrl,
        // language
        language: language,
        // form
        getFormData: getFormData,
        ocsNumberOrder: ocsNumberOrder,
        dataType: dataType,
        valueByType: valueByType,
        gefaultDatatable: gefaultDatatable
    }
})();