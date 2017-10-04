$(function() {
    $('.link').on('click', function(e) {
        $('.bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});