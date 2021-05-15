$(document).ready(function () {
    $("a").each(function (obj) {
        var img = new Image();
        img.src = $(obj).attr("href");
    })
    $("h2").click(function (e) {
        $(this).toggleClass("minus");
        $(this).next().toggle();
        $('img').attr('src', "");
        e.preventDefault();
    });
    $("a").click(function (e) {
        e.preventDefault();
        $('img').attr('src', $(this).attr("href"));
    });
});