'use strict';






const whoAreYou = function () {
    const child = "child";
    const teenager = "teenager";
    const adult = "adult";
    const pensioner = "pensioner"; 

    const age = prompt ("how old are you");

    if (isNaN(age) || age === '') {
        alert(`is not number`);
        whoAreYou();
    } else if (age <= 12) {
        alert(`you are a ${child}`);
    } else if (age > 12 && age <= 18) {
        alert(`you are a ${teenager}`);
    } else if (age > 18 && age <= 60) {
        alert(`you are a ${adult}`);
    }else if (age > 60) {
        alert(`you are a ${pensioner}`);
    };
    
};
whoAreYou();








const yourSymbol = function () {
    const one = '!';
    const two = '@';
    const three = '#';
    const four = '$';
    const five = '%';
    const six = '^';
    const seven = '&';
    const eight = '*';
    const nine = '(';
    const zero = ')';

    const number = prompt ('enter a number from 0 - 9');

    if (isNaN(number) || number === '') {
        alert(`is not number`);
        yourSymbol();
    } else if (number > 9) {
        alert(`incorrect value`);
        yourSymbol();
    } else if (number == 1) {
        alert(`your symbol -  ${one}`);
    } else if (number == 2) {
        alert(`your symbol -  ${two}`);
    }
    else if (number == 3) {
        alert(`your symbol -  ${three}`);
    }
    else if (number == 4) {
        alert(`your symbol -  ${four}`);
    }
    else if (number == 5) {
        alert(`your symbol -  ${five}`);
    }
    else if (number == 6) {
        alert(`your symbol -  ${six}`);
    }
    else if (number == 7) {
        alert(`your symbol -  ${seven}`);
    }
    else if (number == 8) {
        alert(`your symbol -  ${eight}`);
    }
    else if (number == 9) {
        alert(`your symbol: - ${nine}`);
    }
    else if (number == 0) {
        alert(`your symbol: - ${zero}`);
    }

}
yourSymbol();





const matchedNumbers = function () {
    const number2 = prompt ('enter a three digit number');
    
    if (isNaN(number2) || number2 === '') {
                alert(`is not number`);
                matchedNumbers();
            } else if (number2 < 100 || number2 > 999) {
                alert(`this is not a three digit number`);
                matchedNumbers();
            } else if (number2 [0] == number2 [1] || number2 [0] == number2 [2] || number2 [1] == number2 [2]) {
                alert(`have the same numbers`);
            } else {
                alert(`no identical numbers`);
            };
}
matchedNumbers();







const leapYear = function () {
    const year = prompt ('Enter any year');
    if (isNaN(year) || year === '') {
        alert(`is not year`);
        leapYear();
    } else if (year % 4 == 0 && year % 100 !== 0) {
        alert(`it is a leap year`);
    } else {
        alert(`it is not leap year`);
    };
}
leapYear();





const palindrome = function() {
    const numberFiveDigit = prompt('enter a five-digit number');
    if (isNaN(numberFiveDigit) || numberFiveDigit === '') {
        alert(`is not five-digit`);
        palindrome();
    } else if (numberFiveDigit.length !== 5) {
        alert(`is not five-digit`);
        palindrome();
    } else if (numberFiveDigit === numberFiveDigit.split('').reverse().join('')) {
        alert(`is palindrome `);
    } else {
        alert(`is not palindrome `);
    };
}
palindrome();






const exchangeDollars = function() {
    const usd = prompt ('Enter the amount USD');
    if (isNaN(usd) || usd === '') {
        alert(`is not number`);
        exchangeDollars();
    };
    const exchange = prompt('EUR = 1, UAH = 2, AZN = 3');
    if (isNaN(exchange) || exchange === '') {
        alert(`wrong choice, enter 1 or 2 or 3`);
        exchangeDollars();
    } else if (exchange > 3 || exchange == 0) {
        alert(`wrong choice, enter 1 or 2 or 3`);
        exchangeDollars();
    }

    switch(exchange) {
        case '1':
            alert(`${usd * 0.92} EUR`);
            break;
        case '2':
            alert(`${usd * 27.06} UAH`);
            break;
        case '3':
            alert(`${usd * 1.70} AZN`);
            break;
    }
}
exchangeDollars();





const purchaseAmount = function () {
    const discountOne = 3 / 100;
    const discountTwo = 5 / 100;
    const discountThree = 7 / 100;

    const discountedAmount = prompt ('enter purchase amount from 200');
    if (isNaN(discountedAmount) || discountedAmount === "") {
        alert(`this is not a number`);
        purchaseAmount();
    } else if (discountedAmount < 200) {
        alert(`incorrect amount`);
        purchaseAmount();
    } else if (discountedAmount >= 200 && discountedAmount <= 300) {
        alert(`discounted amount ${discountedAmount - (discountedAmount * discountOne)}`);
    } else if (discountedAmount > 300 && discountedAmount <= 500) {
        alert(`discounted amount ${discountedAmount - (discountedAmount * discountTwo)}`);
    } else if (discountedAmount > 500) {
        alert(`discounted amount ${discountedAmount - (discountedAmount * discountThree)}`);
    };

}
purchaseAmount();



const circleSquared = function() {
    const PI = 3.14;

    const circumference = prompt ('enter the circumference');
    if (isNaN(circumference) || circumference === "") {
        alert(`this is not a number`);
        circleSquared();
    };


    const squarePerimeter = prompt ('enter the perimeter of the square');
    if (isNaN(squarePerimeter) || squarePerimeter === "") {
        alert(`this is not a number`);
    } else if (circumference / PI < squarePerimeter / 4) {
        alert(`your circle will fit in your square`);
    } else {
        alert(`your circle will not fit in your square`);
    };
};
circleSquared();




const question = function() {
    const questionOne = prompt('2 + 2 = 4 ; 2 + 2 = 5 ; 2 + 2 = 3');
    if (isNaN(questionOne) || questionOne === "" || questionOne < 3 || questionOne > 5) {
        alert(`incorrect amount`);
    };
    switch(questionOne) {
        case '4':
            alert(`tru`);
            break;
        case '5':
            alert(`false`);
            break;
        case '3':
            alert(`false`);
            break;
    };


    const questionTwo = prompt('3 + 3 = 7 ; 3 + 3 = 6 ; 3 + 3 = 8');
    if (isNaN(questionTwo) || questionTwo === "" || questionTwo < 6 || questionTwo > 8) {
        alert(`incorrect amount`);
    };
    switch(questionTwo) {
        case '6':
            alert(`tru`);
            break;
        case '7':
            alert(`false`);
            break;
        case '8':
            alert(`false`);
            break;
    };

    const questionThree = prompt('4 * 5 = 21 ; 4 * 5 = 22 ; 4 * 5 = 20');
    if (isNaN(questionThree) || questionThree === "" || questionThree < 20 || questionThree > 22) {
        alert(`incorrect amount`);
    };
    switch(questionThree) {
        case '20':
            alert(`tru`);
            break;
        case '21':
            alert(`false`);
            break;
        case '22':
            alert(`false`);
            break;
    };


};
question();


