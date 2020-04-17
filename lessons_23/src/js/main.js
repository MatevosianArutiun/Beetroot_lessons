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
















