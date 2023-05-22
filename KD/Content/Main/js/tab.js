$(document).ready(function () {
    let btnSwicthTab = ".main-btn-switch-tab";
    let $firstContentActive = ".main-btn-switch-tab.active";
    $($firstContentActive).each(function (e) {
        let $this = $(this);
        $($this.attr('main-tab-target')).fadeIn(300);
    });
    $(document).on('click', btnSwicthTab, function (e) {
        let $this = $(this);
        $(btnSwicthTab).removeClass('active');
        $this.addClass('active');
        let $contentView = $($this.attr('main-tab-target'));
        $('.main-tab-pane').fadeOut(0);
        $contentView.fadeIn(300);
    });
});