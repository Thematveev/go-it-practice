// function foo() {
//   console.log("foo -> this", this);
// }

// foo(); // Який this ???

/**
 * -------------------------
 */
// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis(); // Який this ???  -> book

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ??? -> window / undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ??? -> undefined

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(stone => stone.name === stoneName)
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600



// const student = {
//   username: 'Alex',
  
//   stats: {
//     positive: 4,
//     negative: 8,

//     printThis(){
//       console.log(this);
//     }

//   },

  

// }

// student.stats.printThis()