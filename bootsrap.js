var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

// Initialize the scroll position to be half the width of a card
var scrollPosition = cardWidth / 2;

// Next button click event handler
$('.carousel-control-next').on('click', function () {
    // Calculate the new scroll position
    scrollPosition += cardWidth;

    // Animate the carousel scroll
    $('.carousel-inner').animate({
        scrollLeft: scrollPosition
    }, 600);
});

// Prev button click event handler
$('.carousel-control-prev').on('click', function () {
    // Calculate the new scroll position
    scrollPosition -= cardWidth;

    // Ensure the scroll position doesn't go below 0
    if (scrollPosition < cardWidth / 2) {
        scrollPosition = cardWidth / 2;
    }

    // Animate the carousel scroll
    $('.carousel-inner').animate({
        scrollLeft: scrollPosition
    }, 600);
});