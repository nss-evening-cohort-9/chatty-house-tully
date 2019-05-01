import $ from 'jquery';

let colorWell;

function updateAll(event) {
  document.querySelectorAll('p').forEach((p) => {
    const paragraphs = p;
    paragraphs.style.color = event.target.value;
  });
}

function startup() {
  colorWell = $('#primary');
  colorWell.change(updateAll);
  colorWell.select();
}

export default { startup };
