import $ from 'jquery';
import messagesData from '../../helpers/data/messageData';
import util from '../../helpers/util';
import './messages.scss';


let messages = [];


const domStringBuilder = (messageArray) => {
  let domString = '';
  messageArray.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${message.user}</h5>`;
    domString += `<p class="card-text">${message.message}</p>`;
    domString += `<class="card-link">${message.time}</a>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msg', domString);
};

let counter = 6;

const makeMessage = (e) => {
  const inputValue = document.getElementById('textInput').value;
  if (e.key === 'Enter') {
    const myName = $('input[name="user"]:checked').val();
    const newMessage = {
      user: myName,
      id: counter,
      message: inputValue,
      time: '2014-09-08T08:02:17-06:00',
    };
    messages.push(newMessage);
    domStringBuilder(messages);
    document.getElementById('textInput').value = '';
    counter += 1;
  }
};

const initEvent = () => {
  const input = document.getElementById('textInput');
  input.addEventListener('keyup', makeMessage);
};

// determine if enter key has been pressed
// get input value
// put the input value in the array
// use push or unshift
// Print to the DOM

const getData = () => {
  messagesData.getMessagesData()
    .then((response) => {
      const newMessageArray = response.data.messages;
      messages = newMessageArray;
      domStringBuilder(messages);
    })
    .catch((error) => {
      console.error(error);
    });
};


export default { getData, makeMessage, initEvent };
