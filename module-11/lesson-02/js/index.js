/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

/**
 * Read (GET)
 */

const apiUrl = "https://65d63786f6967ba8e3bdba79.mockapi.io/api/v1/";

function fetchBooks() {
  return fetch(apiUrl + 'books')
    .then((res) => res.json())
}

function fetchBookById(bookId) {
  return fetch(`${apiUrl}books/${bookId}`)
    .then((res) => res.json())
}

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

/**
 * Create (POST)
 */

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  }

  // console.log(book);

  return fetch(apiUrl + 'books', options).then(res => res.json())
}

// addBook({
//   title: "Тестова книга з CSS",
//   author: "Я",
//   genres: ["CSS"],
//   Rating: 9,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

// addBook({
//   title: "Тестова книга з HTML",
//   author: "Я",
//   genres: ["HTML"],
//   Rating: 7,
// }).then((book) => {
//   console.log("Прийшла відповідь від бекенда можна малювати");
//   console.log(book);
// });

/**
 * Update (PUT/PATCH)
 */

function updateBookById(update, bookId) {
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(update)
  }


  return fetch(`${apiUrl}books/${bookId}`, options).then(response => response.json())
}

// updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Манго" }, 17);

/**
 * Delete (DELETE)
 */

// function removeBook(bookId) {
//   const config = {
//     method: 'DELETE'
//   }

//   return fetch(`${apiUrl}books/${bookId}`, config).then(res => res.json())

// }

// removeBook(15);
// removeBook(14);
