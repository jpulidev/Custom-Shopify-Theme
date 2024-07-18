import Swiper from 'swiper';
import 'swiper/css';

window.onload = (event) => {
  var reviews = document.querySelectorAll('.reviews .swiper');

  if (reviews) {
    reviews.forEach((swiper) => {
      var reviewSwiper = new Swiper('#' + swiper.id, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          600: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      })
    });
  }
}