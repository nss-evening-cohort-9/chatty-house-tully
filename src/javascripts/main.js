import 'bootstrap';
import '../styles/main.scss';
import message from './components/messages/messages';
import users from './components/users';
import themes from './components/themes/themes';

console.error('setup is working');

const init = () => {
  message.getData();
  users.userStringBuilder();
  themes.listeners();
};

init();
