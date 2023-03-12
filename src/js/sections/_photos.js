import Tab from '../functions/tabs';
import Accordeon from '../functions/accordeon';
if (document.querySelector('.photos')) {
  if (window.innerWidth >= 768) {
    new Tab('.photos').renderTab();
  }
  new Accordeon('.photos').renderAccordeon();
}
