const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Отримує користувачів з API та повертає масив об'єктів.
export async function getUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Помилка HTTP: ${response.status}`);
  }

  // response.json() виконує парсинг JSON.
  return await response.json();
}
