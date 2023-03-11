// if (document.querySelector('.faq')) {
//   const questions = document.querySelectorAll('.faq__item');

//   questions.forEach(question => {
//     question.addEventListener('click', e => {
//       const self = e.currentTarget;
//       const questionContent = self.querySelector('.faq__item-body');
//       const contentHeight = questionContent.scrollHeight;

//       questionContent.style.maxHeight = contentHeight + 'px';
//       question.classList.toggle('active');

//       if (!self.classList.contains('active')) {
//         questionContent.style.maxHeight = null;
//       }
//     });
//   });
// }

if (document.querySelector('.faq')) {
  const faq = document.querySelector('.faq');
  const items = faq.querySelectorAll('.faq__item');
  faq.addEventListener('click', e => {
    const target = e.target;
    const item = target.closest('.faq__item');

    if (item) {
      const questionContent = item.querySelector('.faq__item-body');
      const contentHeight = questionContent.scrollHeight;

      items.forEach(currentItem => {
        if (currentItem !== item && currentItem.classList.contains('active')) {
          currentItem.classList.remove('active');
          currentItem.querySelector('.faq__item-body').style.maxHeight = null;
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
