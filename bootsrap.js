
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000, // 2000ms = 2s
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});
