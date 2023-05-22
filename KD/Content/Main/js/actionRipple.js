$(document).ready(function () {
    $(document).on('mousedown', '.main_action_ripple', function (e) {
        let _this = $(this);
        let _color = _this.attr('main-color-ripple');
        let _size = _this.outerWidth() > _this.outerHeight() ? _this.outerWidth() : _this.outerHeight();
        _size = _size * 1.5;
        let _sizeOf = parseInt('-' + _size / 2);
        let _posX = _this.offset().left;
        let _posY = _this.offset().top;
        let _targetX = e.pageX - _posX;
        let _targetY = e.pageY - _posY;
        if (!_targetX || !_targetY) {
            _targetX = e.originalEvent.touches[0].pageX - _posX;
            _targetY = e.originalEvent.touches[0].pageY - _posY;
        }
        _this.append(`<span class="ripple-inner-black"></span>`);
        _this.find('.ripple-inner-black').last().css({
            'top': _targetY + 'px',
            'left': _targetX + 'px',
            'width': _size + 'px',
            'height': _size + 'px',
            'margin-top': _sizeOf + 'px',
            'margin-left': _sizeOf + 'px',
            'background': _color
        });
        setTimeout(() => {
            _this.find('.ripple-inner-black').first().remove();
        }, 300);
    });
});