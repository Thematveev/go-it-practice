/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 * - name
 * - message
 * - stack
 * - Блок catch без об'єкта помилки
 */


// console.log('Start')
// let q = {};
// try {
//     throw new Error('this is error!')
// }
// catch (error){
//     console.log('No method!', error.message)
// }

// console.log('Start')



// function getPokemons(){
//     const url = 'https://pokeapi.co/api/v2/pokemon/ditto123';
//     return fetch(url).then(response => {
//         if (!response.ok){
//             throw new Error('Some error in request. Check url!');
//         }

//         return response.json();
//     })
// }

// getPokemons().then(data => console.log(data)).catch(error => console.log('Check url!'));