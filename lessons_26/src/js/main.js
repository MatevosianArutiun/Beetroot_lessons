"use strict";

// the task 1

let shoppingList = [
  { name: "Peanut", quantity: 3, buy: true },
  { name: "Bananas", quantity: 10, buy: false },
  { name: "Pears", quantity: 15, buy: true },
  { name: "Garne", quantity: 3, buy: true },
  { name: "Cabbage", quantity: 1, buy: false },
  { name: "Bow", quantity: 5, buy: true },
  { name: "Water", quantity: 2, buy: false },
  { name: "Peas", quantity: 1, buy: true },
  { name: "Tomatoes", quantity: 8, buy: false },
  { name: "Peach", quantity: 9, buy: false },
];

// 1.1
let sortShoppingList = [...shoppingList];
sortShoppingList.sort(function (a, b) {
  return b.buy - a.buy;
});

console.log(sortShoppingList);

// 1.2
let shoppingListAdd = [...shoppingList];

let addToShoppingList = (name) => {
  const indx = shoppingListAdd.findIndex(
    (product) => product.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (indx >= 0) {
    shoppingListAdd.splice(indx, 1, {
      ...shoppingListAdd[indx],
      quantity: shoppingListAdd[indx].quantity + 1,
    });
  } else {
    shoppingListAdd.unshift({ name, quantity: 1, buy: false });
  }
};

addToShoppingList("bananas");
console.log(shoppingListAdd);

// 1.3

let shoppingListbuy = [...shoppingList];
let buyProduct = (name) => {
  const idx = shoppingListbuy.findIndex(
    (product) => product.name.toLocaleLowerCase() == name.toLocaleLowerCase()
  );
  if (idx >= 0) {
    shoppingListbuy.splice(idx, 1, { ...shoppingListbuy[idx], buy: true });
  } else {
    return `no such product`;
  }
};

buyProduct("Peach");
console.log(shoppingListbuy);

// the task 2

let cashierReceipt = [
  { name: "Peanut", quantity: 1, price: 200 },
  { name: "Bananas", quantity: 1, price: 150 },
  { name: "Pears", quantity: 1, price: 240 },
  { name: "Garne", quantity: 1, price: 300 },
  { name: "Cabbage", quantity: 2, price: 20 },
  { name: "Bow", quantity: 1, price: 60 },
  { name: "Water", quantity: 1, price: 450 },
  { name: "Peas", quantity: 1, price: 80 },
  { name: "Tomatoes", quantity: 1, price: 32 },
  { name: "Peach", quantity: 1, price: 45 },
];

console.log(cashierReceipt);

// 2.1

let printoutOfCheck = [...cashierReceipt];

printoutOfCheck.forEach((product) =>
  console.log(
    `product: ${product.name} / quantity: ${product.quantity} / price: ${product.price}`
  )
);

// 2.2

let purchaseAmount = () => {
  let sum = 0;
  cashierReceipt.forEach(
    (product) => (sum += product.price * product.quantity)
  );
  return sum;
};

console.log(`total purchase amount : ${purchaseAmount()}`);

// 2.3

const expensiveProduct = () => {
  let prices = cashierReceipt.map(
    (product) => product.price * product.quantity
  );
  let bigPrices = Math.max(...prices);
  console.log(bigPrices);
};

expensiveProduct();

// 2.4

const getAveragePrice = () => {
  let sumPurchase = purchaseAmount();
  let sumQuantity = 0;
  cashierReceipt.forEach((product) => (sumQuantity += product.quantity));
  let averagePrice = Math.round(sumPurchase / sumQuantity);
  return averagePrice;
};

console.log(`average cost of goods: ${getAveragePrice()}`);

// the task 4

let academyAudiences = [
  { name: "224", places: 15, facultyName: "Международные отношения" },
  { name: "325", places: 20, facultyName: "Ивент-менеджмент" },
  { name: "389", places: 13, facultyName: "Информационная политика" },
  { name: "135", places: 10, facultyName: "Дизайн и реклама" },
  { name: "478", places: 18, facultyName: "Сценическое искусство" },
  { name: "547", places: 13, facultyName: "Информационная политика" },
];

// 4.1

academyAudiences.forEach((audiences) =>
  console.log(
    `number: ${audiences.name} , places: ${audiences.places} , facultyName: ${audiences.facultyName}`
  )
);

// 4.2

let showAudiencesByFacultyName = (facultyName) => {
  academyAudiences.forEach((audiences) => {
    if (facultyName.toLowerCase() === audiences.facultyName.toLowerCase()) {
      console.log(`Audience: ${facultyName} - ${audiences.name}`);
    }
  });
};

showAudiencesByFacultyName("Информационная политика");

// 4.2

const showAudienceToStudents = ({ name, quantity, faculty }) => {};

// 4.3

let sortByPlaces = [...academyAudiences];
sortByPlaces.sort(function (a, b) {
  return a.places - b.places;
});

console.log(sortByPlaces);

// 4.4

let sortByName = [...academyAudiences];
sortByName.sort(function (a, b) {
  return a.name.toLowerCase() - b.name.toLowerCase();
});

console.log(sortByName);
