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
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    margin: 24,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        dots: false,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        dots: true,
        center: true
      },
    },
  });
});
