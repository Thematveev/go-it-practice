/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({a, b, c, d}) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const params = {
  a: 10,
  b: 15,
  c: 10,
  d: 15
}


const perimeter = calculateHousePerimeter(params);
console.log(`Периметр будинку: ${perimeter}`);
