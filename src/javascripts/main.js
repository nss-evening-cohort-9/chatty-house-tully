import 'bootstrap';
import '../styles/main.scss';
import message from './components/messages';
import users from './components/users';

console.error('setup is working');

const init = () => {
  message.getData();
  users.userStringBuilder();
};

init();
