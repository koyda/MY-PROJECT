(function ($) {
    $.fn.dropList = function (option) {
        let setting = $.extend({
            map: {
                text: "{text}",
                value: "{value}",
                display: null,
            },
            onOpen: null,
            onClose: null,
            onSelect: null,
            onSearch: null,
            onDraw: null,
            data: null,
            searchTimeout: 600,
            placeholder: "select...",
            defaultDisplay: null,
            parent: null,
            default: true,
            hideSelect: true,
            modalMode: false,
            className: "",
            fixedParent: null
        }, option);
        // helper
        let helper = {};
        // dom
        let dom = {
            input: ".original-drop-input",
            display: ".ocs-drop-list-display",
            mainDrop: ".ocs-drop-list",
            selected: ".selected",
            mainList: ".content-list",
            item: ".content-list-item",
            content: ".drop-content",
            show: ".ocs-drop-show",
            btnCollap: ".collape-icon",
            searchContent: ".drop-content-search",
            ocsScrollStyleFixed: ".ocs-scroll-style"
        };
        return this.each(function () {
            let _t = $(this);
            _t.addClass(_s(dom.input));
            _t.data({
                all: setting.data ? [...setting.data] : []
            });
            var w = _t.outerWidth();
            var h = _t.outerHeight();
            // extend function
            var OriginalData = _t.data(setting.data);

            OriginalData.clear = function () {
                _t.next(dom.mainDrop).find(dom.display).html(`<div class="placeholder">${setting.placeholder}</div>`);
                _t.val("").change();
                _t.next(dom.mainDrop).find(dom.mainList).find(`${dom.item}${dom.selected}`).removeClass(_s(dom.selected));
                //if ($.isFunction(setting.onSelect)) setting.onSelect();
            }

            // select command
            OriginalData.select = function (d, callback) {
                let allData = _t.data().all;
                if (d && allData && allData.length > 0) {
                    let sameKey = [];
                    let firstData = allData[0];
                    // find comparable key
                    $.each(firstData, (i, v) => {
                        if (i in d) sameKey.push(i);
                    });
                    if (sameKey.length == 0) {
                        if ($.isFunction(callback)) {
                            callback(false);
                            return;
                        }
                    }
                    let countSelect = 0;
                    let tempdata = null;
                    _t.next(dom.mainDrop).find(dom.item).each(function () {
                        let $t = $(this);
                        let tData = $t.data().item;
                        let countWrong = 0;
                        sameKey.map(v => {
                            if (tData[v] != d[v]) {
                                ++countWrong;
                            }
                        });
                        if (countWrong == 0) {
                            $t.parent().children(dom.selected).removeClass(_s(dom.selected));
                            $t.addClass(_s(dom.selected));
                            ++countSelect;
                            tempdata = {
                                ...tData
                            };
                        }

                    });
                    if (countSelect > 0) {
                        if ($.isFunction(callback)) callback(true);
                        _t.next(dom.mainDrop).find(dom.display).html(replaceTemplate(tempdata, setting.map.display || setting.map.text));
                        _t.val(replaceTemplate(tempdata, setting.map.value)).change();
                        //if ($.isFunction(setting.onSelect)) setting.onSelect(tempdata);
                        return;
                    }
                }
                if ($.isFunction(callback)) callback(false);
            }
            // redraw data command
            OriginalData.redraw = function (d) {
                let allData = _t.data();
                setting.data = d || allData.all;
                allData.all = [...setting.data];
                drawContentItem(_t, setting);
                if ($.isFunction(setting.onDraw)) setting.onDraw(_t);
            }

            OriginalData.scrollTop = function () {
                $(dom.ocsScrollStyleFixed).scrollTop(0);
            }

            _t.data(OriginalData);
            draw(_t, setting, h, w);
            position(_t, setting);
            // window resize
            $(window).resize(function () {
                position(_t, setting);
            });
            if (setting.parent) {
                $(setting.parent).scroll(() => {
                    position(_t, setting);
                });
            } else {
                $(window).scroll(() => {
                    position(_t, setting);
                });
            }

            if ($.isFunction(setting.onDraw)) setting.onDraw(_t);
        });

        function collape(mainSelector, setting) {
            if (mainSelector.hasClass(_s(dom.show))) {
                if ($.isFunction(setting.onClose)) setting.onClose();
                mainSelector.toggleClass(_s(dom.show));
                position(mainSelector.prev(dom.input), setting);
            } else {
                if ($.isFunction(setting.onOpen)) setting.onOpen();
                mainSelector.toggleClass(_s(dom.show));
                position(mainSelector.prev(dom.input), setting);
            }
        }

        function drawContentItem(_selector, setting) {
            let $main = _selector.next(dom.mainDrop);
            let $display = $main.find(dom.display);
            let $contentList = $main.find(dom.mainList);
            // clear list
            $contentList.empty();
            if (setting.default) {
                // default select item
                let _contextListItem = $(`<div class="${_s(dom.item)} default"></div>`).html(`<div class="placeholder">${setting.placeholder}</div>`);
                _contextListItem.data({
                    item: {}
                });
                _contextListItem.on("click", function () {
                    let _this = $(this);

                    $display.html(`<div class="placeholder">${setting.defaultDisplay || setting.placeholder}</div>`);
                    $(_this).parent().children(dom.selected).removeClass(_s(dom.selected));
                    _contextListItem.addClass(_s(dom.selected));
                    if ($.isFunction(setting.onSelect)) {
                        setting.onSelect(_this.data().item);
                    }
                    if (setting.map.value) {
                        _this.parents(dom.mainDrop).prev(dom.input).val("").change();
                    }
                    if (setting.hideSelect) {
                        collape(_this.parents(dom.mainDrop), setting);
                    }
                });
                $contentList.append(_contextListItem);
            }

            // item
            if (setting.data != null && setting.data.length >= 0) {
                setting.data.map(d => {
                    let _itm = $(`<div class="${_s(dom.item)}"></div>`).html(replaceTemplate(d, setting.map.text));
                    _itm.data({
                        item: {
                            ...d
                        } || {}
                    });
                    _itm.on("click", function () {
                        let _this = $(this);

                        $display.html(replaceTemplate(d, setting.map.display || setting.map.text));
                        $(_this).parent().children(dom.selected).removeClass(_s(dom.selected));
                        _itm.addClass(_s(dom.selected));
                        if ($.isFunction(setting.onSelect)) {
                            setting.onSelect(d);
                        }
                        if (setting.hideSelect) {
                            collape(_this.parents(dom.mainDrop), setting);
                        }
                        _this.parents(dom.mainDrop).prev(dom.input).val(replaceTemplate(d, setting.map.value)).change();
                    });
                    $contentList.append(_itm);
                });
            }

        }

        function draw(_selector, setting, h, w) {
            _selector.next(dom.mainDrop).remove();

            let modalMode = setting.modalMode ? "modal-mode" : "";
            // main page
            let _main = $(`<div class="${_s(dom.mainDrop)} ${modalMode} ${setting.className}" style="min-height:${h}px"></div>`); // when click outside selector
            let langCode = localStorage.getItem("ocs-lang-code");
            let lang = new Language(langCode);
            let search = lang.translate("search");

            $(document).mouseup(function (e) {
                if (!_main.is(e.target) && _main.has(e.target).length === 0) {
                    _main.removeClass(_s(dom.show));
                    //on close
                    if ($.isFunction(setting.onClose)) setting.onClose();
                    //position(_selector);
                }
            });
            let _collape = $(`<div class="${_s(dom.btnCollap)}"></div>`);

            // collape click
            _collape.on("click", function () {
                collape(_main, setting);
            })

            // head display
            let _display = $(`<div class="${_s(dom.display)}">
                            <div class="placeholder">${setting.defaultDisplay || setting.placeholder}</div >
                        </div>`);

            // when click on display
            _display.on("click", function () {
                collape(_main, setting);
            })

            // drop content
            let _content = $(`<div class="${_s(dom.content)}"></div>`);

            // search box
            let _contentSearch = $(`<div class="${_s(dom.searchContent)}"></div>`);
            let _contentInputSearch = $(`<input type="text" placeholder=${search} />`);
            let _contentInputSearchIcon = $(`<span class="drop-content-search-icon">
                                    <i class="ri-search-line"></i>
                                </span>`);
            // event search
            let keydown = "";
            let searchTimeout = "";
            if ($.isFunction(setting.onSearch)) {
                _contentInputSearch.focusin(function () {
                    $(this).select();
                });

                _contentInputSearch.on("keydown", function (e) {
                    keydown = $(this).val();
                });
                _contentInputSearch.on("keyup", function (e) {
                    let val = $(this).val();
                    let key = e.keyCode || e.which;
                    clearTimeout(searchTimeout);
                    if (key == 13) {
                        setting.onSearch(val, _selector, $(this))
                    } else {
                        searchTimeout = setTimeout(() => {
                            setting.onSearch(val, _selector, $(this))
                        }, setting.searchTimeout);
                    }
                });
            }
            if ($.isFunction(setting.onSearch)) {
                _contentInputSearchIcon.on("click", function () {
                    clearTimeout(searchTimeout);
                    setting.onSearch(_contentInputSearch.val(), _selector, _contentInputSearch);
                })
            }
            let _contextList = $(`<div class="${_s(dom.mainList)} ${_s(dom.ocsScrollStyleFixed)}"></div>`);

            // handle appending
            if ($.isFunction(setting.onSearch)) {
                _contentSearch.append(_contentInputSearch).append(_contentInputSearchIcon);
                _content.append(_contentSearch);
            }
            drawContentItem(_selector, setting);
            _content.append(_contextList);
            _main.append(_collape).append(_display).append(_display).append(_content);
            _selector.after(_main);
            position(_selector, setting);
        }

        function position(_selector, setting) {
            let pos = _selector.next(".ocs-drop-list").offset();
            var top = pos.top;
            var left = pos.left;
            var w = _selector.next(dom.mainDrop).outerWidth();
            var h = _selector.next(dom.mainDrop).outerHeight();
            let windowH = window.innerHeight;
            let maxheight = windowH - (pos.top + h);
            let searchHeight = _selector.next(dom.mainDrop).find(dom.searchContent).outerHeight();
            let maxListHeight = maxheight - searchHeight - 5;
            let fixedtop = 0;
            if (setting.fixedParent) {
                fixedtop = _selector.parents(setting.fixedParent).offset().top;
            }
            if (_selector.next(dom.mainDrop).hasClass(_s(dom.show))) {
                _selector.next(dom.mainDrop).find(dom.content).css({
                    "top": `${(top + h + 5 - fixedtop)}px`,
                    "left": `${left}px`,
                    "width": `${w}px`,
                    "height": `auto`,
                    "max-height": `${maxheight}px`,
                    "margin-top": "auto"
                });
            }
            //_selector.next(dom.mainDrop).find(dom.btnCollap).css({ "height": `${h}px` });
            _selector.next(dom.mainDrop).find(dom.mainList).css({
                "max-height": `${maxListHeight}px`
            });
        }

        function replaceTemplate(data, template) {
            if (!template || template.length <= 0) return "";
            let arr = [];
            let tempName = "";
            template.split("").map(c => {
                if (c == "{") {
                    tempName = c;
                } else if (c == "}") {
                    if (tempName.length > 1) {
                        tempName += c;
                        arr.push(tempName);
                    }
                    tempName = "";
                } else if (tempName.length > 0) {
                    tempName += c;
                }
            });
            arr.map(s => {
                if (s.trim() != "") {

                    let objectName = s.replace(/{/g, "").replace(/}/, "");
                    let value = data ? data[objectName] : undefined;
                    let reg = new RegExp(s, 'g');
                    template = template.replace(reg, value);
                }
            });
            return template;
        }

        function _s(str) {
            if (!str || str.length <= 1) return str;
            let first = str.substr(0, 1);
            if (first == "." || first == "#") return str.substr(1, str.length - 1);
            return str;
        }
    }
}(jQuery));