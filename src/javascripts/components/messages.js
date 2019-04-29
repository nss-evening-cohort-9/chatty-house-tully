import messagesData from '../helpers/data/messageData';
import util from '../helpers/util';

let messages = [];


const domStringBuilder = (messageArray) => {
  let domString = '';
  messageArray.forEach((message) => {
    domString += '<div class="card" style="width: 18rem;">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${message.user}</h5>`;
    domString += '<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>';
    domString += `<p class="card-text">${message.message}</p>`;
    domString += `<a href="#" class="card-link">${message.time}</a>`;
    domString += '<a href="#" class="card-link">Another link</a>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
};

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


export default { getData };
