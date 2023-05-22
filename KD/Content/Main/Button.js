////export class Button {
$(document).ready(() => {
    $(document).on("mouseover", ".main-tooltip", function (e) {
        let _this = $(this);
        let _text = _this.attr("title");
        let _offset = _this.offset();
        let _width = _this.outerWidth();
        let _domTooltip = $('<div class="nav-main-tooltip"</div>');
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
        $(".nav-main-tooltip").remove();
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
        .on("mouseleave click", ".main-tooltip", function () {
            clearTimeout(self.tooltipTimeout);
            $(".nav-main-tooltip").remove();
        });
});