$('.lines').click(function (event) {
    event.stopPropagation();
    $('#line-2').toggleClass('d-none');
    $('#line-1').toggleClass('line-1');
    $('#line-3').toggleClass('line-3');
    $('.burger').toggleClass('open');
    $('.overlay').toggleClass('backgr');
});

$('.overlay').click(function () {
    if ($('.burger').hasClass('open')) {
        $('#line-2').toggleClass('d-none');
        $('#line-1').toggleClass('line-1');
        $('#line-3').toggleClass('line-3');
        $('.burger').toggleClass('open');
        $('.overlay').toggleClass('backgr');
    }
});
