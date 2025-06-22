$(document).ready(function () {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["PREV", "NEXT"],
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
  // project slider
  $("#project-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    margin: 24,
    responsive: {
      0: {},
      768: {},
      1140: {
        items: 2,
        center: true
      },
    },
  });
});
