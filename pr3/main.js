import { getUsers } from './api.js';
import { filterByCity, sortByName } from './utils.js';

const usersList = document.querySelector('#usersList');
const status = document.querySelector('#status');
const reloadButton = document.querySelector('#reloadButton');

function renderUsers(users) {
  usersList.innerHTML = '';

  if (users.length === 0) {
    usersList.innerHTML = '<li>Користувачів не знайдено.</li>';
    return;
  }

  users.forEach(user => {
    const item = document.createElement('li');
    item.innerHTML = `
      <strong>${user.name}</strong> (${user.username})<br>
      <span class="muted">Email: ${user.email}</span><br>
      <span class="muted">Місто: ${user.address.city}</span>
    `;
    usersList.append(item);
  });
}

async function loadUsers() {
  status.textContent = 'Завантаження даних...';
  usersList.innerHTML = '';

  try {
    const users = await getUsers();
    const filteredUsers = filterByCity(users, 'Gwenborough');
    const sortedUsers = sortByName(filteredUsers);

    renderUsers(sortedUsers);
    status.textContent = `Завантажено користувачів: ${sortedUsers.length}`;
  } catch (error) {
    console.error('Помилка завантаження:', error);
    status.textContent = `Не вдалося отримати дані: ${error.message}`;
  }
}

reloadButton.addEventListener('click', loadUsers);
loadUsers();
