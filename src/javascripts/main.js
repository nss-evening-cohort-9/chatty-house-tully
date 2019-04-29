import 'bootstrap';
import '../styles/main.scss';
import message from './components/messages';

console.error('setup is working');

const init = () => {
  message.getData();
};

init();
