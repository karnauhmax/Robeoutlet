class Accordeon {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.items = this.selector.querySelectorAll('.accordeon__item');
  }

  renderAccordeon() {
    this.selector.addEventListener('click', e => {
      const target = e.target;
      const item = target.closest('.accordeon__item');

      if (item) {
        const questionContent = item.querySelector('.accordeon__item-body');
        const contentHeight = questionContent.scrollHeight;

        console.log(this.items);

        this.items.forEach(currentItem => {
          if (
            currentItem !== item &&
            currentItem.classList.contains('active')
          ) {
            currentItem.classList.remove('active');
            currentItem.querySelector('.accordeon__item-body').style.maxHeight =
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

export default Accordeon;
