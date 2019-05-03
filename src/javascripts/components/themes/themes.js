import $ from 'jquery';
import './themes.scss';

let lastTheme = 'dark';

const customify = () => {
  if ($('body').hasClass('dark')) {
    lastTheme = 'dark';
    $('body').removeClass('dark');
    console.error('customify removed dark');
  }
  if ($('body').hasClass('light')) {
    lastTheme = 'light';
    $('body').removeClass('light');
    console.error('customify removed light');
  }

  $('body').addClass('custom');
  console.error('customify added custom');
  console.error(lastTheme);
};

const darkify = () => {
  if ($('body').hasClass('light')) {
    lastTheme = 'light';
    $('body').removeClass('light');
    console.error('darkify removed light');
  }
  if ($('body').hasClass('custom')) {
    $('body').removeClass('custom');
    console.error('darkify removed custom');
  }

  $('body').addClass('dark');
  console.error('darkify added dark');
  console.error(lastTheme);
};

const lightify = () => {
  if ($('body').hasClass('dark')) {
    lastTheme = 'dark';
    $('body').removeClass('dark');
    console.error('lightify removed dark');
  }
  if ($('body').hasClass('custom')) {
    $('body').removeClass('custom');
    console.error('lightify removed custom');
  }

  $('body').addClass('light');
  console.error('lightify added light');
  console.error(lastTheme);
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
  $('#cancel').click(() => {
    $('body').removeClass();
    console.error(lastTheme);
    $('body').addClass(lastTheme);
  });
};

export default { listeners };
