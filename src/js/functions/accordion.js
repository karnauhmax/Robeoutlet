class Accordion {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.items = this.selector.querySelectorAll('.accordion__item');
  }

  renderaccordionDefault() {
    this.selector.addEventListener('click', e => {
      const target = e.target;
      const item = target.closest('.accordion__item');

      if (item) {
        const questionContent = item.querySelector('.accordion__item-body');
        const contentHeight = questionContent.scrollHeight;

        console.log(this.items);

        this.items.forEach(currentItem => {
          if (
            currentItem !== item &&
            currentItem.classList.contains('active')
          ) {
            currentItem.classList.remove('active');
            currentItem.querySelector('.accordion__item-body').style.maxHeight =
              null;
          }
        });

        if (item.classList.contains('active')) {
          item.classList.remove('active');
          questionContent.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionContent.style.maxHeight = `${contentHeight}px`;
        }
      }
    });
  }

  renderaccordionWithHead() {
    this.selector.addEventListener('click', e => {
      const target = e.target;
      const item = target.closest('.accordion__item');
      const head = target.closest('.accordion__item-head');

      if (head) {
        console.log(1);
        const questionContent = item.querySelector('.accordion__item-body');
        const contentHeight = questionContent.scrollHeight;

        console.log(this.items);

        this.items.forEach(currentItem => {
          if (
            currentItem !== item &&
            currentItem.classList.contains('active')
          ) {
            currentItem.classList.remove('active');
            currentItem.querySelector('.accordion__item-body').style.maxHeight =
              null;
          }
        });

        if (item.classList.contains('active')) {
          item.classList.remove('active');
          questionContent.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionContent.style.maxHeight = `${contentHeight}px`;
        }
      }
    });
  }
}

export default Accordion;
