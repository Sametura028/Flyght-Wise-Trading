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
const numberElements = document.querySelectorAll('.counter');
const duration = 1000; // Animasyon süresi (ms)

if (numberElements) {
    let startTime;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        numberElements.forEach(function (numberElement) {
            const targetNumber = parseInt(numberElement.dataset.number);
            const currentValue = Math.round(targetNumber * progress);
            numberElement.innerHTML = currentValue;
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

$('.slider').slick({
    arrows: true
}
);