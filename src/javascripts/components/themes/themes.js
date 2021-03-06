import $ from 'jquery';
import './themes.scss';

const customify = () => {
  $('body').removeClass();
  $('body').addClass('custom');
};

const darkify = () => {
  $('body').removeClass();
  $('body').addClass('dark');
};

const lightify = () => {
  $('body').removeClass();
  $('body').addClass('light');
};

const largeText = () => {
  $('#msg').toggleClass('large');
};

const listeners = () => {
  $('#light').click(lightify);
  $('#dark').click(darkify);
  $('#submit').click(customify);
  $('#large').click(largeText);
};

export default { listeners };
