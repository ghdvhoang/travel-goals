$(document).ready(function () {
  $("#destinations").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  });
});
