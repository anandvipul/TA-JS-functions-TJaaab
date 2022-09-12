// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(num) {
  return num + 1;
}

// - Write a Function Expression

const addOne = function addOne(num) {
  return num + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (num) => num + 1;

// - Write an Arrow Function with curly brackets

let addOne = (num) => {return num + 1;};

// - Execute the function
addOne(3);

// - Execute the function and store the return value in a variable.

let add = addOne(3);

// - What is the typeof returnValue

//"Number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(number) {
  return number - 1 ;
}

// - Write a Function Expression

const substractOne = function (sub_num) {
  return sub_num - 1 ;
};

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (sub_num) => sub_num - 1 ;

// - Write an Arrow Function with curly brackets

let substractOne = (sub_num) => {
  return sub_num - 1;
} ;

// - Execute the function

substractOne(4);

// - Execute the function and store the return value in a variable.

let sub = substractOne(4);

// - What is the typeof returnValue

//Number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(num1, num2) {
  return num1 + num2;
}

// - Write a Function Expression

const sum = function (num1, num2) {
  return num1 + num2;
} 

// - Write an Arrow Function without curly brackets(if possible)

let sum = (num1, num2) => num1 + num2 ;

// - Write an Arrow Function with curly brackets

let sum = (num1, num2) => {
  return num1 + num2;
}

// - Execute the function

sum(2, 3);

// - Execute the function and store the return value in a variable

let sum_result = sum(2, 3);

// - What is the typeof returnValue

//Number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(num) {
  return num ** 2;
}

// - Write a Function Expression

let square = function (num) {
  return num ** 2;
}

// - Write an Arrow Function without curly brackets(if possible)

let square = (num) => num ** 2;

// - Write an Arrow Function with curly brackets

let square = (num) => {
  return num ** 2;
}

// - Execute the function

square(3);

// - Execute the function and store the return value in a variable

let square_result = square(3) ;

// - What is the typeof returnValue

//number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  if (num % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd"
  }  
};

// - Write an anonymous Function Expression

let oddOrEven = function (num) {
  if (num % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
};

// - Write an named Function Expression

let oddOrEven = function oddOrEven(num) {
  if (num % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
} 

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (num) => (num % 2 == 0 ) ? alert("Number is Even!") : alert("Number is Odd"); 

// - Write an Arrow Function with curly brackets

let oddOrEven = (num) => {
  if (num % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
}

// - Execute the function

oddOrEven(4);

// - Execute the function and store the return value in a variable
let odd_even = OddOrEven(4);
// - What is the typeof returnValue
//String