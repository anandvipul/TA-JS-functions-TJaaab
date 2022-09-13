// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age, rate = 1) {
  // Your code goes here
  return `${age * rate} dig Years`;
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, numOfMovies) {
  // Your code goes here
  const weeksinLife = 4680;
  return `No. of Movies in Life ${weeksinLife * numOfMovies};`;
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temperature) {
  // Your code goes here
  return `${(9 * temperature) / 5 + 32};`;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temperature) {
  // Your code goes here
  return `${((temperature - 32) * 5) / 9};`;
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x, n) {
  // Your code goes here
  if (x < 0) {
    return "The Number below 1 is not allowed.";
  } else {
    return `The power of ${x} to ${n} is ${x ** n}`;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(num, operator) {
  // Your code goes here

  let loop_sum = (n) => (n * (n + 1)) / 2;
  let loop_mul = (n) => {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  };

  switch (operator) {
    case "sum":
      return loop_sum(num);
      break;

    case "product":
      return loop_mul(num);
      break;

      default:
        return 'Enter valid Parameters';
  }
}

sumOrProductOfN(4, "sum"); // 10
sumOrProductOfN(4, "product"); // 24
sumOrProductOfN(4, "hello"); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return `Sum of 1 to ${n} is ${sum}`;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

function sumOfN(n) {
  // Your code goes here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
      sum += i;
    }
  }
  return `Sum of 1 to ${n} is ${sum}`;
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a, b) {
  // Your code goes here
  if (a < b) {
    return `First NO. is Minimum among two.`;
  } else {
    return `Second No. is Minimum among two.`;
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(arg) {
  // Your code goes here
  return typeof arg;
}
