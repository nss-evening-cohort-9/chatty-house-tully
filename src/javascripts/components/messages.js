import messagesData from '../helpers/data/messageData';
import util from '../helpers/util';

let messages = [];


const domStringBuilder = (messageArray) => {
  let domString = '';
  messageArray.forEach((message) => {
    domString += '<div class="card" style="width: 18rem;">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${message.user}</h5>`;
    domString += `<p class="card-text">${message.message}</p>`;
    domString += `<class="card-link">${message.time}</a>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
  console.error(messages);
};

const makeMessage = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById('messager').value;
  if (e.key === 'Enter') {
    const newMessage = {
      user: 9,
      id: 'Plies',
      message: inputValue,
      time: 'timeStamp',
    };
    messages.push(newMessage);
    domStringBuilder(messages);
    document.getElementById('messager').value = '';
  }
};

const initEvent = () => {
  const input = document.getElementById('messager');
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
