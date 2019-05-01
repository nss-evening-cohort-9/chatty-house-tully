import $ from 'jquery';

let primarySelector;
let secondarySelector;
let primary;
let secondary;

function updateAll(event) {
  if (event.target.id === 'primary') {
    primary = event.target.value;
  } else if (event.target.id === 'secondary') {
    secondary = event.target.value;
  }
}

const submit = () => {
  $('#customSheet').remove();
  $(`<style type="text/css" id="customSheet">.custom { background-color: ${primary} } .custom .card { background-color: ${secondary} }</style>`).appendTo('head');
};

function startup() {
  primarySelector = $('#primary');
  primarySelector.change(updateAll);
  primarySelector.select();
  secondarySelector = $('#secondary');
  secondarySelector.change(updateAll);
  secondarySelector.select();
  $('#submit').click(submit);
}

export default { startup };
