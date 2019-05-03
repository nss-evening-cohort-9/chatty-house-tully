import $ from 'jquery';

let primary;
let secondary;

function updateColor(event) {
  if (event.target.id === 'primary') {
    primary = event.target.value;
  } else if (event.target.id === 'secondary') {
    secondary = event.target.value;
  }
}

const submit = () => {
  $('#customSheet').remove();
  $(`<style type="text/css" id="customSheet"> .custom { background-color: ${primary} } .custom .card { background-color: ${secondary} }</style>`).appendTo('head');
  $('#customThemeModal').modal('toggle');
};

function startup() {
  $('#primary').change(updateColor);
  $('#secondary').change(updateColor);
  $('#submit').click(submit);
}

export default { startup };
