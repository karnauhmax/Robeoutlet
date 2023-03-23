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

if (document.querySelector('.guide')) {
  const videoSlider = new Swiper('.guide__videos', {
    modules: [Navigation],
    slidesPerView: 2,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.guide-slider-next',
      prevEl: '.guide-slider-prev'
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.2
      },

      768: {
        spaceBetween: 30,
        slidesPerView: 2
      }
    }
  });

  const brochureSlider = new Swiper('.guide__brochures', {
    modules: [Navigation],
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.guide-slider-next',
      prevEl: '.guide-slider-prev'
    },

    on: {
      observerUpdate: function () {
        console.log(1);
      }
    }
  });
}
