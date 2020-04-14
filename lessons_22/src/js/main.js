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



// const number = prompt("enter a three-digit number (for example: 123)");
// alert(`${number % 10}`);

const number = prompt("enter a three-digit number (for example: 123)");
alert(`${number.split("").reverse().join("")} your number`);

   




const depositAmount = prompt("enter the amount you want to invest");
const interestRate = 0.05;
const MONTHS = 12;
const depositPeriod = 2;
alert(`${depositAmount * interestRate / MONTHS * depositPeriod } you will receive in two months`)



