import $ from 'jquery';
import './themes.scss';

// const lightify = () => {

// };

const darkify = () => {
  if ($('body').hasClass('light')) {
    $('body').removeClass('light');
  }
  if ($('body').hasClass('custom')) {
    $('body').removeClass('custom');
  }

  $('body').addClass('dark');
};

const lightify = () => {
  if ($('body').hasClass('dark')) {
    $('body').removeClass('dark');
  }
  if ($('body').hasClass('custom')) {
    $('body').removeClass('custom');
  }

  $('body').addClass('light');
};


const listeners = () => {
  $('#light').click(() => {
    lightify();
  });
  $('#dark').click(() => {
    darkify();
  });
};

export default { listeners };
