import Tab from '../functions/tabs';

if (document.querySelector('.guide')) {
  new Tab('.guide').renderTab();

  const guide = document.querySelector('.guide');

  guide.addEventListener('click', e => {
    if (e.target.closest('.tabs__btn')) {
      const btnData = e.target.dataset.tabsPath;
      const self = e.currentTarget;

      self.querySelector('.guide-slider__prev').dataset.swiperTestPrev =
        btnData;
      self.querySelector('.guide-slider__next').dataset.swiperTestNext =
        btnData;
    }
  });
}
