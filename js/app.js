$(function() {
    $(window).scroll(function(e) {
        var top = $(window).scrollTop(),
            nav = $('nav.navbar');
        if (top >= 30) {
            if (!nav.hasClass('scrolled')) nav.addClass('scrolled');
        } else {
            //remove class
            if (nav.hasClass('scrolled')) nav.removeClass('scrolled');
        }
    });
});
