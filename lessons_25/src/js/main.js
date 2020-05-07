"use strict";

// the task 1

let car = {
  manufacturer: "Mercedes",
  model: "C 300 Sport",
  year: 2019,
  "average speed": 150,
};

const getVehicleInformation = () => {
  for (let key in car) {
    console.log(`${key}:${car[key]}`);
  }
};

getVehicleInformation();

let speed = car["average speed"];
const calcTime = (km, speed) => {
  let result = km / speed;
  let minutes = (result * 60) % 60;
  let hours = (result * 60 - minutes) / 60;
  let x = 0;
  for (let i = 1; i <= hours; i++) {
    if (i % 4 == 0) {
      x = i / 4;
    }
  }
  if (isNaN(km)) {
    return "it's not speed, enter a number";
  }
  return `you need to ride ${hours + x} hours ${Math.floor(minutes)} minutes`;
};

console.log(calcTime(1250, speed));

// the task 2

let fractionOne = {
  num: 8,
  denum: 6,
};

let fractionTwo = {
  num: 9,
  denum: 3,
};

const calcSumFraction = () => {
  let result = `${
    fractionOne.num * fractionTwo.denum + fractionTwo.num * fractionOne.denum
  } `;
  if (fractionOne.denum == fractionTwo.denum) {
    return `${fractionOne.num + fractionTwo.num} / ${fractionOne.denum}`;
  }
  return `${result} / ${fractionOne.denum * fractionTwo.denum}`;
};

console.log(calcSumFraction());

const calcSubtractionFraction = () => {
  let result = `${
    fractionOne.num * fractionTwo.denum - fractionTwo.num * fractionOne.denum
  } `;
  if (fractionOne.denum == fractionTwo.denum) {
    return `${fractionOne.num - fractionTwo.num} / ${fractionOne.denum}`;
  }
  return `${result} / ${fractionOne.denum * fractionTwo.denum}`;
};

console.log(calcSubtractionFraction());

let calcMultiplicationFraction = () => {
  return `${fractionOne.num * fractionTwo.num} / ${
    fractionOne.denum * fractionTwo.denum
  }`;
};

console.log(calcMultiplicationFraction());

let calcDivisionFraction = () => {
  return `${fractionOne.num * fractionTwo.denum} / ${
    fractionOne.denum * fractionTwo.num
  }`;
};

console.log(calcDivisionFraction());

function reduction(num, denum) {
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      num = num / i;
    }
  }

  for (let i = 1; i < denum; i++) {
    if (denum % i == 0) {
      denum = denum / i;
    }
  }
  return `${num} / ${denum}`;
}

console.log(reduction(4, 3));

// the task 2

const time = {
  hours: "5",
  minutes: "30",
  seconds: "45",
};

const hours = Number(time.hours);
const minutes = Number(time.minutes);
const seconds = Number(time.seconds);

const setTime = (hours, minutes, seconds) => {
  const now = new Date();
  now.setHours(hours, minutes, seconds);
  return now.toLocaleTimeString("ru", {
    hours: "numeric",
    minutes: "numeric",
    seconds: "numeric",
  });
};

console.log(setTime(hours, minutes, seconds));

const addSeconds = (newSeconds) => {
  return console.log(setTime(hours, minutes, [seconds + newSeconds]));
};

console.log(addSeconds(30));

const addMinutes = (newMinutes) => {
  return console.log(setTime(hours, [minutes + newMinutes], seconds));
};

console.log(addMinutes(61));

const addHours = (newHours) => {
  return console.log(setTime([hours + newHours], minutes, seconds));
};

console.log(addHours(5));
