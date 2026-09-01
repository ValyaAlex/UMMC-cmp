const swiperteam = new Swiper(".team__cards", {
  direction: "horizontal",
  loop: true,
  initialSlide: 3,
  centeredSlides: true,
  slidesPerView: 1.1,
  spaceBetween: 8,
  autoplay: false,
  speed: 2000,
  pagination: false,

  navigation: {
    nextEl: ".swiper-next-team",
    prevEl: ".swiper-prev-team",
  },

  breakpoints: {
    690: {
      slidesPerView: 2.6,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.7,
    },

    1440: {
      slidesPerView: 5.7,
      spaceBetween: 32,
    },

    1700: {
      slidesPerView: 7,
      spaceBetween: 32,
    },
  },
});

const swiperteamChildren = new Swiper(".team-children__cards", {
  direction: "horizontal",
  loop: true,
  initialSlide: 3,
  centeredSlides: true,
  slidesPerView: 1.1,
  spaceBetween: 8,
  autoplay: false,
  speed: 2000,
  pagination: false,

  navigation: {
    nextEl: ".swiper-next-teamChild",
    prevEl: ".swiper-prev-teamChild",
  },

  breakpoints: {
    690: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.7,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5.7,
      spaceBetween: 32,
    },

    1700: {
      slidesPerView: 7,
      spaceBetween: 32,
    },
  },
});

const swiperHere = new Swiper(".here__cards", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 8,
  speed: 2000,

  navigation: {
    nextEl: ".swiper-next-here",
    prevEl: ".swiper-prev-here",
  },

  breakpoints: {
    690: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

if (window.innerWidth < 1025) {
  const swiperReviews = new Swiper(".swiper-reviews", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 8,
    autoplay: false,
    speed: 2000,
    pagination: false,

    navigation: {
      nextEl: ".swiper-next-reviews",
      prevEl: ".swiper-prev-reviews",
    },

    breakpoints: {
      720: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 32,
      }
    },
  });
}

const swiperAlgorithm = new Swiper(".swiper-algorithm", {
  direction: "horizontal",
  slidesPerView: 1.1,
  spaceBetween: 8,
  autoplay: false,
  speed: 2000,
  pagination: false,
  autoHeight: true
});
