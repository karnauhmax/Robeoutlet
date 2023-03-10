import Swiper, { Navigation, Pagination } from 'swiper';

if (document.querySelector('.partners__slider')) {
  const partnersSlider = new Swiper('.partners__slider', {
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 17
      },
      768: {
        slidesPerView: 4
      },

      992: {
        slidesPerView: 4.5,
        spaceBetween: 55
      },

      1600: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }
  });
}
