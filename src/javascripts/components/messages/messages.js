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
