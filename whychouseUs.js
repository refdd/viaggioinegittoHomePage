document.addEventListener("DOMContentLoaded", function () {
  new Splide("#whyChouseUs", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
        // arrows: true,
      },
      autoScroll: {
        speed: 1,
      },

      // autoScroll: {
      //   speed: 1,
      // },
    },
    arrows: false,
    pagination: false,
  }).mount();
});
