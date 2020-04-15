'use strict';


const showGreeting = function () {
    const name = prompt ("what is your name?");
    alert(`Hello, ${name}`);
}
showGreeting();




const showAge = function () {
    const birthDay = prompt ("What is the year of your birth?");
    const YEAR = 2020;
    const age = YEAR - birthDay;
    alert(`Your age ${age}`);
}
showAge();




const showSquarePerimeter = function () {
    const a = prompt ("Indicate the length of the side of the square");
    const perimeter = a * 4;
    alert(`square perimeter ${perimeter}`);
}
showSquarePerimeter();




const showAreaCircle = function () {
    const radius = prompt ("Indicate circle radius");
    const PI = 3.1415;
    alert(`Area of your circle ${PI * Math.pow(radius, 2)}`);
}
showAreaCircle();




    const km = prompt ("distance between cities ( km )");
    const time = prompt ("how long does it take ( hours )");
    alert(`you need to move at a speed ${km / time} km / h`);




    const USD = prompt("enter dollar amount");
    const EUR = 0.91;
    alert(`you will get ${USD * EUR} EUR`);



    const flashDrive  = prompt("indicate how much memory is on a flash drive ( GB )");
    const fileSize = 820;
    alert(`${Math.floor(flashDrive / fileSize)} files will fit on your flash drive`);



    const amountWallet = prompt("amount in your wallet");
    const priceChocolates = prompt("price for one chocolate bar");
    alert(`${Math.floor(amountWallet / priceChocolates)} chocolates you can buy`);
    alert(`balance in wallet ${amountWallet % priceChocolates}`);



// ВАРИАНТ ПЕРВЫЙ ИЗ ГУГЛА
    
const numeric = prompt("enter a three-digit number (for example: 123)");
alert(`${numeric.split("").reverse().join("")} your number`);

   
// ВАРИАНТ ВТОРОЙ КОНЕЧНО НАМУДРИЛ НЕ ПОНЯТНО ЧТО СКОРЕЕ ВСЕГО НЕ ПРАВИЛЬНО НО РАБОТАЕТ))

const number = prompt("enter a three-digit number (for example: 456)");
const number1 = number % 10; // 3
const number2 = number1 / 1000; // 0.003
const number3 = number / 1000; // 0.123
const number4 = number3 - number2; // 0.12
const number5 = number4 * 100; // 12
const number6 = number5 % 10; // 2
const number7 = number6 / 100; // 0.02
const number8 = number4 - number7 ; // 0.1
const number9 = number8 * 10; // 1
alert(`${number1}${number6}${Math.round(number9)}`);



const depositAmount = prompt("enter the amount you want to invest");
const interestRate = 0.05;
const MONTHS = 12;
const depositPeriod = 2;
alert(`${depositAmount * interestRate / MONTHS * depositPeriod } you will receive in two months`)



