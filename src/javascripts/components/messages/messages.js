import $ from 'jquery';
import messagesData from '../../helpers/data/messageData';
import util from '../../helpers/util';
import './messages.scss';
// import { listeners } from 'cluster';


let messages = [];
const moment = require('moment');

const deleteMessage = (e) => {
  const buttonId = e.target.id;
  messages.forEach((message, index) => {
    if (buttonId === message.id.toString()) {
      if ($('input[name="user"]:checked').val() === message.user) {
        messages.splice(index, 1);
      } else {
        $('#deleteModal').modal();
      }
    }
  });
};


const domStringBuilder = (messageArray) => {
  let domString = '';
  messageArray.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${message.user}</h5>`;
    domString += `<p class="card-text">${message.message}</p>`;
    domString += `<button type="button" class="btn btn-outline-danger deleteButton float-right" id="${message.id}">Delete</button>`;
    domString += `<p class="timestamp">${message.time}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('msg', domString);
  $('.deleteButton').click((e) => {
    deleteMessage(e);
    domStringBuilder(messages);
  });
};

const messageLimit = () => {
  if (messages.length > 20) {
    messages.shift();
  }
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
      time: moment().format('MMMM Do YYYY, h:mm a'),
    };
    messages.push(newMessage);
    messageLimit();
    domStringBuilder(messages);
    document.getElementById('textInput').value = '';
    counter += 1;
    $('#clear').removeAttr('disabled');
  }
};

const clearMessages = () => {
  messages = [];
  domStringBuilder(messages);
  $('#clear').attr('disabled', 'true');
};


// determine if enter key has been pressed
// get input value
// put the input value in the array
// use push or unshift
// Print to the DOM

const messagesListeners = () => {
  $('#textInput').keypress(makeMessage);
  $('#clear').click(clearMessages);
};

const getData = () => {
  messagesData.getMessagesData()
    .then((response) => {
      const newMessageArray = response.data.messages;
      messages = newMessageArray;
      domStringBuilder(messages);
      messagesListeners();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  getData,
  makeMessage,
};
