/**
 * Синтаксис async/await
 * try...catch
 */

// const fetchTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// };

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


async function fetchTodos(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok){
    throw new Error('Problem!!!')
  }

  const data = await response.json();

  return data;
}

// console.log(fetchTodos());
fetchTodos()
  .then(data => console.log(data))
  .catch(error => console.log('New error', error.message));

