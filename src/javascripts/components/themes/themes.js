import $ from 'jquery';
import './themes.scss';


const customify = () => {
  if ($('body').hasClass('dark')) {
    $('body').removeClass('dark');
  }
  if ($('body').hasClass('light')) {
    $('body').removeClass('light');
  }

  $('body').addClass('custom');
};

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
  $('#cancel').click(() => {
    lightify();
  });
  $('#light').click(() => {
    lightify();
  });
  $('#dark').click(() => {
    darkify();
  });
  $('#custom').click(() => {
    customify();
  });
};

export default { listeners };
