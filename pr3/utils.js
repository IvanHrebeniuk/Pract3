// Фільтрує користувачів за назвою міста.
export function filterByCity(users, city) {
  return users.filter(user =>
    user.address.city.toLowerCase() === city.toLowerCase()
  );
}

// Сортує користувачів за ім'ям в алфавітному порядку.
export function sortByName(users) {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}
