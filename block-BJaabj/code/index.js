/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/

/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/

/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/

function addTwoNumbers() {
  let num1 = +prompt("Enter The First Number");
  let num2 = +prompt("Enter The Second Number");
  let sum = num1+num2;
  alert(sum);
}

/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/


function getTable() {
  let num = +prompt("Enter a number: ");
  let string = "";
  for (let i = 1; i <= 10; i++) {
    string += `${num} * ${i} = ${num*i} \n`;
  }
  console.log(string);
}


/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/

let year = +prompt("Enter any Year: ");
function isLeap(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 == 0 ) {
      return true;
  } else {
    return false;
  }
}

/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/

function getFactorial () {
  let num = +prompt("Enter a Number");
  let fact = num;
  let factorial = 1;
  while (num > 1) {
    factorial *= num;
    num--;
  } 
  alert(`The factorial of ${fact} is ${factorial}`);
}
