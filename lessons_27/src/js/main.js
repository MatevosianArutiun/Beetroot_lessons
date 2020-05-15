"use strict";

// the task 1

const sumNumbers = (num1, num2) => {
  let x = 0;
  if (isNaN(num1) || isNaN(num2)) {
    return `this is not a number enter a number`;
  } else if (num1 > num2) {
    for (let i = Number(num2); i <= Number(num1); i++) {
      x += i;
      if (i == num1) {
        return x;
      }
    }
  } else {
    for (let i = Number(num1); i <= Number(num2); i++) {
      x += i;
      if (i == num2) {
        return x;
      }
    }
  }
};

console.log(`sum of numbers of a given range : ${sumNumbers("10", "1")}`);

// the task 2

const commonFactorNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return `this is not a number enter a number`;
  } else if (num1 < num2) {
    for (let i = Number(num2); i >= 1; i--) {
      if (num1 % i == 0 && num2 % i == 0) {
        return i;
      }
    }
  } else {
    for (let i = Number(num1); i >= 1; i--) {
      if (num1 % i == 0 && num2 % i == 0) {
        return i;
      }
    }
  }
};

console.log(`greatest common factor : ${commonFactorNumbers(12, 36)}`);

// the task 3

const commonFactorNumber = (num) => {
  if (isNaN(num)) {
    return `this is not a number enter a number`;
  } else {
    console.log(`number caster : ${num}:`);
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        console.log(i);
      }
    }
  }
};

commonFactorNumber(12);

// the task 4

const numberOfDigits = (numb) => {
  if (isNaN(numb)) {
    console.log(`this is not a number enter a number`);
  }
  numb = String(numb);
  console.log(`The number of digits in the entered number: ${numb.length}`);
};

numberOfDigits(2255);

// the task 5

const statistics = (numb) => {
  let zero = 0;
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  numb = [];
  for (let i = 1; i <= 10; i++) {
    i = numb.push(prompt(``));
  }
  numb.forEach((number) => {
    if (number == 0) {
      zero++;
    } else {
      if (number > 0) {
        positive++;
      } else {
        negative++;
      }
      if (number % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
  });
  console.log(`you entered zero : ${zero} times`);
  console.log(`you entered positive number : ${positive} times`);
  console.log(`you entered negative number : ${negative} times`);
  console.log(`you entered even number : ${even} times`);
  console.log(`you entered odd number : ${odd} times`);
};

// statistics();

// the task 6

const calculator = (numb1, numb2, sign) => {
  numb1 = prompt(`enter the first number`);
  numb2 = prompt(`enter last number`);
  sign = prompt(`choose a sign "/" or "*" or "+" or "-"`);
  if (isNaN(numb1) || isNaN(numb2)) {
    alert(`is not number`);
    calculator();
  }
  if (sign == "/") {
    alert(`${numb1} ${sign} ${numb2} = ${numb1 / numb2}`);
  } else {
    if (sign == "*") {
      alert(`${numb1} ${sign} ${numb2} = ${numb1 * numb2}`);
    } else {
      if (sign == "+") {
        alert(`${numb1} ${sign} ${numb2} = ${Number(numb1) + Number(numb2)}`);
      } else {
        if (sign == "-") {
          alert(`${numb1} ${sign} ${numb2} = ${Number(numb1) - Number(numb2)}`);
        }
      }
    }
  }

  let question = confirm(`one more time?`);
  if (question == true) {
    calculator(numb1, numb2, sign);
  } else {
    alert(`see you`);
  }
};
// calculator();

// the task 7

const changeNumber = (numb, move) => {
  numb = prompt(``);
  move = prompt(``);
  let numbArr = [];
  for (let i = 1; i < numb.length + 1; i++) {
    numbArr.push(numb[i - 1]);
  }

  numbArr.splice(0, move);
  for (let i = 0; i < move; i++) {
    numbArr.push(numb[i]);
  }

  console.log(numbArr);
};

// changeNumber();

// the task 8

const nextDayOfWeek = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < 7; i++) {
    let question = confirm(`Today is ${days[i]}. Want to see the next day?`);
    if (i == 6) {
      i = 0;
    } else if (question !== true) {
      return;
    }
  }
};

// nextDayOfWeek();

// the task 9

let multiplicationTable = () => {
  for (let i = 2; i <= 9; i++) {
    for (let a = 1; a <= 10; a++) {
      console.log(`${i} * ${a} = ${i * a}`);
    }
  }
};
// multiplicationTable();

// the task 10

const GuessNumber = (numb) => {
  let n = 100;
  alert(`guess the number from 0 to 100`);
  do {
    numb = prompt(`your number > ${n} < or = ${n}`);
  } while (numb !== "=" && numb !== "<" && numb !== ">");
};
// GuessNumber();
