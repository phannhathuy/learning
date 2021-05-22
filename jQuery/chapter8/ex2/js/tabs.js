$(document).ready(function () {
    $('.tab-list').each(function () {
        var $tab = $(this).find('li.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href'));
        $(this).on('click', '.tab-control', function (e) {
            e.preventDefault();
            if (this.hash && !$(this).is('active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');

                $panel = $(this.hash).addClass('active');
                $tab = $(this).parent().addClass('active');
            }
        })
    })
});