"use strict";

//  1 function

const num1 = prompt(`enter the first number`);
const num2 = prompt(`enter the second number`);

const showNumber = function () {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return `incorrect value`;
  }
};

alert(showNumber());

//  2 function

function factorial(n = prompt(`enter the number`)) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

alert(factorial());

//  3 function

function getNumber(a, b, c) {
  if ((a > 9 && a < 1) || (b > 9 && b < 1) || (c > 9 && c < 1)) {
    return `invalid value`;
  } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return `invalid value`;
  } else {
    return `${String(a)}${String(b)}${String(c)}`;
  }
}

alert(getNumber(6, 5, 4));

//  4 function

function calcArea(a, b) {
  if (a && b !== undefined) {
    return a * b;
  } else if (a || b == undefined) {
    return a * a;
  } else {
    return `invalid value`;
  }
}

alert(calcArea(5, 6));

// 5 function
let x = parseInt(prompt("enter the number"));
function perfectNumber(x) {
  if (x === 0) {
    return false;
  }
  let i = 0;

  for (let divisor = 1; divisor < x; divisor++) {
    if (x % divisor === 0) {
      i += divisor;
    }
  }

  return i == x;
}

alert(perfectNumber(x));

// 6 function
let a = parseInt(prompt("enter the number"));
let b = parseInt(prompt("enter the number"));
function perfectRange(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (perfectNumber(min)) {
    alert(min);
  }
  if (min < max) {
    perfectRange(min + 1, max);
  }
  return;
}

alert(perfectRange(a, b));

// 7 function
let hh = parseInt(prompt("enter hours"));
let mm = parseInt(prompt("enter minutes"));
let ss = parseInt(prompt("enter seconds"));
const setTime = (hh, mm, ss) => {
  const now = new Date();
  now.setHours(hh, mm, ss);
  return now.toLocaleTimeString("ru", {
    hours: "numeric",
    minutes: "numeric",
    seconds: "numeric",
  });
};

alert(setTime(hh, mm, ss));

// 8 function
hh = parseInt(prompt("enter hours"));
mm = parseInt(prompt("enter minutes"));
ss = parseInt(prompt("enter seconds"));
const calcTimeSecond = (hh, mm, ss) => {
  return `your time in seconds : ${hh * 60 * 60 + mm * 60 + ss}`;
};

alert(calcTimeSecond(hh, mm, ss));

// 9 function
let n = parseInt(prompt("enter the number of seconds"));
const getTimeOfSeconds = (n) => {
  const hours = Math.floor(n / 60 / 60);
  const minutes = Math.floor(n / 60 - hours * 60);
  const second = n % 60;
  return setTime(hours, minutes, second);
};

alert(getTimeOfSeconds(n));

// 10 function
hh = parseInt(prompt("enter hours"));
mm = parseInt(prompt("enter minutes"));
ss = parseInt(prompt("enter seconds"));
const getTime1 = (hh, mm, ss) => {
  return `${hh * 60 * 60 + mm * 60 + ss}`;
};
alert(getTime1(hh, mm, ss));

let data1 = parseInt(getTime1(hh, mm, ss));

hh = parseInt(prompt("enter hours"));
mm = parseInt(prompt("enter minutes"));
ss = parseInt(prompt("enter seconds"));
const getTime2 = (hh, mm, ss) => {
  return `${hh * 60 * 60 + mm * 60 + ss}`;
};
alert(getTime2(hh, mm, ss));

let data2 = parseInt(getTime2(hh, mm, ss));

const timeDifference = () => {
  let dataresult = data1 - data2;
  return getTimeOfSeconds(dataresult);
};
alert(timeDifference());
