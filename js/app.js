//$(document).foundation();

$('.main-sidebar__menu-item a').click(function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 600, 'swing', function () {
        window.location.hash = target;
    });
});
