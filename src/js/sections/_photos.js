import Tab from '../functions/tabs';
import Accordeon from '../functions/accordeon';
if (document.querySelector('.photos')) {
  new Tab('.photos').renderTab();
  new Accordeon('.photos').renderAccordeon();
}
