$(document).ready(function () {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText:['PREV', 'NEXT'],
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
