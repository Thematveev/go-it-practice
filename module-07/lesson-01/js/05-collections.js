/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

options.forEach(element => {
  const a = document.createElement('div');
  a.textContent = element.label;
  a.style.backgroundColor = element.color;
  a.style.color = 'white';

  colorPickerContainerEl.append(a);
})

