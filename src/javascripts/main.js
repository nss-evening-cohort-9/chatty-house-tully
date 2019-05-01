import 'bootstrap';
import '../styles/main.scss';
import custom from './components/custom/custom';
import message from './components/messages/messages';
import users from './components/users';
import themes from './components/themes/themes';

const init = () => {
  custom.startup();
  message.getData();
  users.userStringBuilder();
  message.initEvent();
  themes.listeners();
};

init();
