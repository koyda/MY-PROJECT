$(document).ready(() => {
    // file  data:image/png;base64,
    (function () {
        $.fn.fileChange = function (handler) {
            this.change(function () {
                let file = this.files[0];
                let reader = new FileReader();
                let byteArr = [];
                let binary = '';

                reader.readAsArrayBuffer(file);
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        let arrayBuffer = evt.target.result;
                        let array = new Uint8Array(arrayBuffer);

                        for (var i = 0; i < array.length; i++) {
                            byteArr.push(array[i]);
                            binary += String.fromCharCode(array[i]);
                        }

                        handler({
                            base64: `${btoa(binary)}`,
                            byteArray: byteArr,
                            file: file,
                        });
                    }
                }
            });
        }
    })();

    // ==================== v2 Dropdown Dialog ===============
    (function () {
        let _dialogDom = $('.v2-dropdown-dialog');
        let _btnDom = $('.v2-dropdown-dialog i.button');

        // click toggle dialog
        $(document).on('click', '.v2-dropdown-dialog i.button', function (e) {
            e.stopPropagation();

            let _this = $(this);
            let _parent = _this.parents('.v2-dropdown-dialog');

            _parent.toggleClass('show');
        });

        $(document).on('mouseleave', '.v2-dropdown-dialog', function (e) {
            $(this).removeClass('show');
        });

        // hide dialog
        $(document).on('click', e => {
            if (!_btnDom.is(e.target) &&
                !_dialogDom.is(e.target) &&
                _dialogDom.has(e.target).length == 0)
                _dialogDom.removeClass('show');
        });
    })();

    // ==================== Header Top Dialog ===============
    (function () {
        let _dialogDom = $('.hdr-dialog-group');
        let _btnDom = $('.hdr-dialog-group i.button');

        // click toggle dialog
        _btnDom.on('click', function () {
            let _this = $(this);
            let _parent = _this.parents('.hdr-dialog-group');

            _parent.toggleClass('show');
        });

        // hide dialog
        $(document).on('click', e => {
            if (!_btnDom.is(e.target) && !_dialogDom.is(e.target) && _dialogDom.has(e.target).length == 0) {
                _dialogDom.removeClass('show');
            }
        });
    })();

    // ==================== Dialog Change Lange ===============
    (function () {
        //let _langCode = localStorage.getItem('ocs-lang-code') || 'km';
        //let _dialogDom = $('.hdr-top-change-lang');
        //let _btnDom = $('.hdr-top-change-lang i.button');
        //let _btnItemDom = $('.hdr-top-change-lang ul.dialog li.item');


        //_btnItemDom.removeClass('active');
        //$(`.hdr-top-change-lang ul.dialog li.item[data-lang="${_langCode}"]`).addClass('active');




        //// click toggle dialog
        //_btnDom.on('click', function () {
        //    let _this = $(this);
        //    let _parent = _this.parents('.hdr-top-change-lang');

        //    _parent.toggleClass('show');
        //});

        //// hide dialog
        //$(document).on('click', e => {
        //    if (!_btnDom.is(e.target) && !_dialogDom.is(e.target) && _dialogDom.has(e.target).length == 0) {
        //        _dialogDom.removeClass('show');
        //    }
        //});

        //// click on butto change lang
        //_btnItemDom.on('click', function () {
        //    let _this = $(this);
        //    let _parent = _this.parents('.hdr-top-change-lang');
        //    let _lang = _this.attr('data-lang');

        //    localStorage.setItem('ocs-lang-code', _lang);
        //    window.location.reload();
        //});
    })();

    // ====================== Nav Menu ========================
    (function () {
        let _navIsCollapsed = localStorage.getItem('ocs-nav-is-collapsed') || 'false';
        let _btnHum = $('.ocs-hums, .nav-exit-nav-menu, .v2-mobile-backdrop');
        let _navBar = $('div.ocs-nav-bar');
        let _navBarBtnLink = $('[main-tooltip-menu]');
        let _winWidth = $(window).outerWidth();
        let _isCollapsedClassStr = 'is-collapsed';

        // init nav menu
        //_navIsCollapsed == 'true' ? _navBar.addClass(_isCollapsedClassStr) : _navBar.removeClass(_isCollapsedClassStr);

        //if (_winWidth <= 768) _navBar.addClass(_isCollapsedClassStr);

        // Toggle menu
        //_btnHum.on('click', function () {
        //    _navBar.toggleClass(_isCollapsedClassStr);
            
        //    localStorage.setItem('ocs-nav-is-collapsed', _navBar.hasClass(_isCollapsedClassStr));

        //    // trigger event resize window screen
        //    setTimeout(() => $(window).resize(), 60);
        //});

        // button link mouse hover
        //_navBarBtnLink.on('mouseover', function (e) {
        //    let _this = $(this);
        //    let _parent = _this.parents('.ocs-nav-bar');


        //    if (_parent.hasClass(_isCollapsedClassStr)) {
        //        let _height = _this.outerHeight();
        //        let _width = _this.outerWidth();
        //        let _top = _this.offset().top;
        //        let _title = _this.children('.nv-title').text().trim();
        //        let _tooltipElm = $(`<div class="ocs-nav-tooltip" style="display:none;">${_title}</div>`);

        //        $('.ocs-nav-tooltip').remove();
        //        $('body').append(_tooltipElm);

        //        let _tooltipHeight = _tooltipElm.outerHeight();

        //        _height = _height / 2;
        //        _tooltipHeight = _tooltipHeight / 2;
        //        _tooltipElm.css({
        //            left: `${_width + 10}px`,
        //            top: `${(_top + (_height - _tooltipHeight))}px`,
        //            display: 'block',
        //        });
        //    }
        //}).on('mouseleave', function () {
        //    $('.ocs-nav-tooltip').remove();
        //});

        // active menu
        $.fn.ocsActiveMenu = function () {
            let lang = new Language(localStorage.getItem("ocs-lang-code") || "km");
            let _this = $(this);
            let _parent = _this.parents('.nav-menu-group');
            let _text = _this.children('.main-title').attr("ocs-data-tag");
            _parent.show().siblings().remove();
            _this.addClass('nv-active');

            let splitChar = '-';
            if (document.title.indexOf("|") >= 0) splitChar = "|";
            let currTitles = document.title.split(splitChar);
            document.title = `${lang.translate(_text)}${currTitles.length > 1 ? ' ' + splitChar + ' ' + currTitles[1].trim() : ''}`;
        }
    })();

    // ======================== show clinic name ========================
    function showClinicName() {
        let _langCode = localStorage.getItem('ocs-lang-code') || 'km';
        let _getName = localStorage.getItem('ocs-clinic-name') || '';
        let _arr = _getName.split(',');
        let _name = (_arr[0] || '').trim();
        let _nameEn = (_arr[1] || '').trim();

        _getName = _langCode == 'km'
            ? _name || _nameEn
            : _nameEn || _name

        $('.OCSCLINICNAME').text(_getName);
    }

    showClinicName();

    // ======================== Tooltip =====================================
    (function () {
        $(document)
            .on("mouseover", ".v2-tooltip", function (e) {
                let _this = $(this);
                let _text = _this.attr("title");
                let _offset = _this.offset();
                let _width = _this.outerWidth();
                let _domTooltip = $('<div class="v2-tooltip-elm"</div>');
                let _top = 0;
                let _left = 0;

                if (typeof _text !== typeof undefined && _text !== false) {
                    _this.removeAttr("title");
                    _this.attr("tmp-title", _text);
                } else {
                    _text = _this.attr("tmp-title");
                }

                _domTooltip.text(_text);

                clearTimeout(self.tooltipTimeout);
                $(".v2-tooltip-elm").remove();
                $("body").append(_domTooltip);

                let _tooltipWidth = _domTooltip.outerWidth();
                let _tooltipHeight = _domTooltip.outerHeight();

                _top = _offset.top - (_tooltipHeight + 6);
                _left = _offset.left - (_tooltipWidth / 2) + (_width / 2);

                _domTooltip.css({
                    top: `${_top}px`,
                    left: `${_left}px`,
                    display: "none"
                });

                self.tooltipTimeout = setTimeout(() => _domTooltip.css("display", ""), 500);
            })
            .on("mouseleave click", ".v2-tooltip", function () {
                clearTimeout(self.tooltipTimeout);
                $(".v2-tooltip-elm").remove();
            });
    })();

    // ==================== filter dialog ============================
    $(document).on('click', '.btn-toggle', function (e) {
        let _this = $(this);
        let _parent = _this.parents('.v2-filter-dialog');

        _parent.toggleClass('show');
    });

    // ========================= click on doc ====================================
    $(document).on('click', function (e) {

        // Filter dialog
        if (
            !$('.v2-filter-dialog .dialog').is(e.target) &&
            $('.v2-filter-dialog .dialog').has(e.target).length == 0 &&
            !$('.v2-filter-dialog .btn-toggle').is(e.target) &&
            $('.v2-filter-dialog .btn-toggle').has(e.target).length == 0
        ) {
            if (!$('.v2-filter-dialog').hasClass('false')) $('.v2-filter-dialog').removeClass('show');
        }
    });

    (function () {
        let _duration = 250;
        let _isCollapse = false;

        $(document).on('click', 'button.collapse-panel', function (e) {
            e.stopPropagation();
            e.preventDefault();

            if (_isCollapse) return;
            let _this = $(this);
            let _parent = _this.parents('.v2-panel');
            let _header = _parent.children('.header');
            let _inner = _parent.children('.body, .footer');
            let _headerHeight = _header.outerHeight();
            let _tmpHeight = _parent.attr('tmp-height');
            let _icon = _this.children('i');

            _isCollapse = true;

            _parent.toggleClass('collapsed');

            if (_parent.hasClass('collapsed')) {
                _parent.attr('tmp-height', _parent.outerHeight()).animate({ height: `${_headerHeight - 1}px` }, _duration);
                _icon.css({ 'transform': 'scale(-1)' });
                _inner.animate({ opacity: 0 }, _duration);
            } else {
                _parent.animate({ height: `${_tmpHeight}px` }, _duration).removeAttr('tmp-height');
                _icon.css({ 'transform': 'scale(1)' });
                _inner.animate({ opacity: 1 }, _duration);
            }

            setTimeout(() => {
                _isCollapse = false;
            }, _duration);
        });
    })();

    // ======================= Ripple =================================
    (function () {
        $(document).on('mousedown', '.v2-ripple', function (e) {
            let _this = $(this);
            let _offset = _this.offset();
            let _mOffset = { top: e.pageY, left: e.pageX };
            let _width = _this.outerWidth();
            let _height = _this.outerHeight();
            let _radius = _this.css('border-radius');
            let _body = $('body');
            let _elm = $('<div class="v2-ripple-elm"></div>');
            let _wave = $('<div class="v2-ripple-item"></div>');
            let _waveElm = $('.v2-ripple-item');
            let _rippleElm = $('.v2-ripple-elm');
            let _size;

            _size = _width <= _height ? _height * 2.5 : _width * 2.5;

            _rippleElm.remove();
            _elm.css({
                position: 'fixed',
                top: `${_offset.top}px`,
                left: `${_offset.left}px`,
                background: 'transparent',
                width: `${_width}px`,
                height: `${_height}px`,
                overflow: 'hidden',
                'border-radius': `${_radius}`,
                'pointer-events': 'none',
            });

            _wave.css({
                position: 'absolute',
                top: `${_mOffset.top - _offset.top}px`,
                left: `${_mOffset.left - _offset.left}px`,
                width: `10px`,
                height: `10px`,
                background: '#ffffff50',
                'border-radius': `50%`,
                transform: 'translate(-50%, -50%)',
                opacity: 1,
            });

            _elm.append(_wave);
            _body.append(_elm);



            _wave.animate({
                width: `${_size}px`,
                height: `${_size}px`,
                opacity: 1,
            }, 350);

            setTimeout(() => {
                _wave.animate({ opacity: 0 }, 250);
                setTimeout(() => { _elm.remove() }, 1250);
            }, 150);
        });
    })();

    // =================== image view ============================
    (function () {
        $.fn.imageView = function (status) {
            let _this = $(this);

            if (status.toLowerCase() == 'show') {
                _this.addClass('show');
            } else {
                _this.removeClass('show');
            }

            for (let i = 0; i < _this.length; i++) {
                let _elm = $(this.get(i));

                if (_elm.hasClass('show')) {
                    let _count = _elm.children('.imgv-count');
                    let _items = _elm.children('ul.body').children('li.item');
                    let _itemShow = _elm.children('ul.body').children('li.item.active');

                    if (_items.length <= 0) {
                        _elm.removeClass('show');
                        alert('no image found!');
                        return;
                    }

                    if (_items.length <= 1) {
                        _elm.children('.header').children('div').children('.prev').hide();
                        _elm.children('.header').children('div').children('.next').hide();
                        _count.hide();
                    } else {
                        _elm.children('.header').children('div').children('.prev').show();
                        _elm.children('.header').children('div').children('.next').show();
                        _count.show();
                    }

                    let _currentItemCount = _itemShow.index() + 1;

                    if (!_itemShow.length && _items.length) {
                        _items.first().addClass('active');
                        _currentItemCount = 1;
                    }

                    _count.text(`${_currentItemCount}/${_items.length}`);
                }
            }
        };

        //close
        $('.v2-image-view').on('click', '.header .close', function (e) {
            $(this).parents('.v2-image-view').imageView('hide');
        })

        //prev
        $('.v2-image-view').on('click', '.header .prev', function (e) {
            let _this = $(this);
            let _parent = _this.parents('.v2-image-view');
            let _item = _parent.children('ul.body').children('li.item');
            let _itemShow = _parent.children('ul.body').children('li.item.active');
            let _currentItem = _itemShow.index() - 1;
            let _nexItem = $(_item.get(_currentItem >= _item.length ? 0 : _currentItem));
            let _count = _parent.children('.imgv-count');

            _item.not(_nexItem).removeClass('active');
            _nexItem.addClass('active');

            let _getCurrItem = _parent.children('ul.body').children('li.item.active').index() + 1;

            _count.text(`${_getCurrItem}/${_item.length}`);
        })

        //next
        $('.v2-image-view').on('click', '.header .next', function (e) {
            let _this = $(this);
            let _parent = _this.parents('.v2-image-view');
            let _item = _parent.children('ul.body').children('li.item');
            let _itemShow = _parent.children('ul.body').children('li.item.active');
            let _currentItem = _itemShow.index() + 1;
            let _nexItem = $(_item.get(_currentItem >= _item.length ? 0 : _currentItem));
            let _count = _parent.children('.imgv-count');

            _item.not(_nexItem).removeClass('active');
            _nexItem.addClass('active');

            let _getCurrItem = _parent.children('ul.body').children('li.item.active').index() + 1;

            _count.text(`${_getCurrItem}/${_item.length}`);
        })
    })();

    // =============== Right dialog =====================
    (function () {
        $(document).on('click', '.v2-right-modal', function (e) {
            let _this = $(this);
            let _target = e.target.className.split(' ');

            if (_target.includes('v2-right-modal') && !_target.includes('false'))
                _this.removeClass('show');

            if (_target.includes('v2-btn-close')) _this.removeClass('show');
        });
    })();

    // ============== User Dialog ======================
    (function () {
        $('.v2-user-group > .button').on('click', function (e) {
            let _this = $(this);
            let _parent = _this.parents('.v2-user-group');

            _parent.toggleClass('show');
        });

        $(this).on('click', function (e) {
            let _target = e.target;

            if (!$('.v2-user-group > .button').is(_target) &&
                $('.v2-user-group > .button').has(_target).length == 0 &&
                !$('.v2-user-group > .v2-dialog').is(_target) &&
                $('.v2-user-group > .v2-dialog').has(_target).length == 0) {
                $('.v2-user-group').removeClass('show');
            }
        });
    })();

    $.fn.animateNumber = function (options) {
        let settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options);

        const thisElement = $(this);

        $({ count: settings.start }).animate(
            { count: settings.end },
            {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                    let mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                    //console.log('start1', mathCount);
                },
                complete: settings.complete
            });

        //console.log('start2', settings.complete);
    };
});

// v2loader
(function () {
    $.fn.v2Loader = function (isShow) {
        for (let i = 0; i < this.length; i++) {
            let _elm = $(this[i]);

            if (isShow.toLowerCase() == 'show') {
                _elm.append('<div class="v2-loader"></div>');
            } else {
                _elm.children('.v2-loader').remove();
            }
        }
    }
})()
