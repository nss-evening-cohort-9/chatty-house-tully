import util from '../helpers/util';

const users = [
  { id: 'user1', name: 'Plies' },
  { id: 'user2', name: 'Lysa' },
  { id: 'user3', name: 'Blackfish' },
  { id: 'user4', name: 'Edmure' },
  { id: 'user5', name: 'Catelyn' },
];

const userStringBuilder = () => {
  let domString = '';
  users.forEach((user) => {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input" type="radio" name="user" value="" id="${user.id}">`;
    domString += `<label class="form-check-label" for="${user.id}">`;
    domString += `${user.name}`;
    domString += '</label>';
    domString += '</div>';
  });
  util.printToDom('users', domString);
  document.getElementById('user1').checked = 'checked';
};

export default { userStringBuilder };
