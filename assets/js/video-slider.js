let responsive = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]

$('#reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="prev-arrow"><img src="./assets/img/arrow-btn.svg" alt="there is no appropriate image"></div>',
    nextArrow: '<div class="next-arrow"><img src="./assets/img/arrow-btn.svg" alt="there is no appropriate image"></div>',
    responsive: responsive
});

$('#doctors').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="prev-arrow"><img src="./assets/img/arrow-btn.svg" alt="there is no appropriate image"></div>',
    nextArrow: '<div class="next-arrow"><img src="./assets/img/arrow-btn.svg" alt="there is no appropriate image"></div>',
    responsive: responsive
});