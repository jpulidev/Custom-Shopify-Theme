// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Keyboard,
  Mousewheel,
  Thumbs,
  FreeMode,
} from "swiper";

// configure Swiper to use modules
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Keyboard,
  Mousewheel,
  Thumbs,
  FreeMode,
]);

document.addEventListener("DOMContentLoaded", function (event) {
  var swiperInstance = [];
  let swiperElements = document.getElementsByClassName("hero-slideshow");
  initializeHeroSlider(swiperElements, swiperInstance);

  var scrollerInstance = [];
  let scrollerContainer = document.querySelectorAll(
    "[data-section-type='collection-list']"
  );
  initializeScrollers(scrollerContainer, scrollerInstance);

  var productGallery = [];
  let productGalleryEl = document.querySelectorAll(".product-gallery");
  productGallerySwiper(productGalleryEl, productGallery);
});

function initializeHeroSlider(els, swipers) {
  Array.from(els).forEach((swiper, i) => {
    let swiperId = swiper.id;
    if (swiper.dataset.swiperAutoplay == "true") {
      swipers[i] = new Swiper("#" + swiperId, {
        direction: String(swiper.dataset.swiperDirection),
        pagination: {
          el: String(swiper.dataset.swiperPaginationEl),
          type: String(swiper.dataset.swiperPaginationType),
          clickable: swiper.dataset.swiperPaginationClickable,
        },
        autoplay: {
          delay: Number(swiper.dataset.swiperAutoplayDelay),
        },
        effect: String(swiper.dataset.swiperEffect),
        fadeEffect: {
          crossFade: true,
        },
      });
    } else {
      swipers[i] = new Swiper("#" + swiperId, {
        direction: String(swiper.dataset.swiperDirection),
        pagination: {
          el: String(swiper.dataset.swiperPaginationEl),
          type: String(swiper.dataset.swiperPaginationType),
          clickable: swiper.dataset.swiperPaginationClickable,
        },
        autoplay: swiper.dataset.swiperAutoplay,
        effect: String(swiper.dataset.swiperEffect),
        fadeEffect: {
          crossFade: true,
        },
      });
    }
  });
}

function initializeScrollers(els, scrollers) {
  Array.from(els).forEach((swiper, i) => {
    let el = swiper.querySelector(".scroll");
    let swiperId = el.id;
    scrollers[i] = new Swiper("#" + swiperId, {
      direction: "horizontal",
      autoplay: false,
      allowTouchMove: true,
      simulateTouch: true,
      spaceBetween: 30,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
      },
    });
  });
}

// Product Gallery functions
function productGallerySwiper(els, slider) {
  let thumbnailSlider = [];
  Array.from(els).forEach((swiper, i) => {
    let el = swiper.querySelector(".swiper");
    let swiperId = el.id;

    if (swiper.classList.contains("product-gallery--with-thumbnails")) {
      let swiperThumbs = swiper.querySelector(".scroller__inner");
      thumbnailSlider[i] = new Swiper(swiperThumbs, {
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: true,
        simulateTouch: true,
      });

      slider[i] = new Swiper("#" + swiperId, {
        autoplay: false,
        autoheight: true,
        slidesPerView: 1,
        draggable: true,
        thumbs: {
          swiper: thumbnailSlider[i],
        },
      });
    } else {
      slider[i] = new Swiper("#" + swiperId, {
        autoplay: false,
        slidesPerView: 1,
        draggable: true,
      });
    }
  });
}
