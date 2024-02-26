/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

/**
 * Read (GET)
 */

// function fetchBooks() {
//   return fetch("/books").then((res) => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`/books/${bookId}`).then((res) => res.json());
// }

axios.defaults.baseURL = 'https://65dce223e7edadead7ed0bb2.mockapi.io/';

function fetchBooks(){
  return axios.get('/books').then(response => console.log(response.data));
}

function fetchBookById(id) {
  return axios.get(`/books/${id}`).then(response => console.log(response.data))
}

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

/**
 * Create (POST)
 */

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
// }

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


// function addNewBook(data){
//   axios.post('/books', data).then(response => console.log(response.data))
// }

// addNewBook({
//   name: 'ttt',
//   author: 'aaa'
// })

// /**
//  * Update (PUT/PATCH)
//  */

// function updateBookById(update, bookId) {
//   const options = {
//     метод: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`/books/${bookId}`, options).then((res) => res.json());
// }

// // updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// // updateBookById({ rating: 1 }, 18);
// // updateBookById({ rating: 4, author: "Манго" }, 17);

// function updateBookById(update, bookId){
//   axios.put(`/books/${bookId}`, update).then(response => console.log(response.data))
// }

// updateBookById({author: 'qqqq'}, 26)


// /**
//  * Delete (DELETE)
//  */

// function removeBook(bookId) {
//   const options = {
//     method: "DELETE",
//   };

//   return fetch(`/books/${bookId}`, options).then((res) => res.json());
// }

function removeBook(bookId){
  axios.delete(`/books/${bookId}`).then(response => console.log(response.data))
}

removeBook(15);
removeBook(14);
