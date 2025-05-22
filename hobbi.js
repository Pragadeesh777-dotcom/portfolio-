$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (elementTop < scrollTop + windowHeight - 100) {
                $(this).addClass('show');
            }
        });
    });
});