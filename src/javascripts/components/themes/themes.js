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

const listeners = () => {
  const largeTextBtn = $('#large');
  if (largeTextBtn.attr('checked')) {
    // add class
  } else {
    // remove class
  }
  $('#light').click(lightify);
  $('#dark').click(darkify);
  $('#submit').click(customify);
};

export default { listeners };
