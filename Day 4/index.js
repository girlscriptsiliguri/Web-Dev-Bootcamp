// --------------------------JavaScript String-------------------------------
// var name = "Babu Rao";
// console.log(typeof name);     // prints the datatype
// console.log(name.length);     // 8
// console.log(name.toUpperCase()); // BABU RAO
// console.log(name.toLowerCase()); // babu rao

// ----------------------------------JavaScript function-------------------------------------
// -------Type 1 Function with no parameter no return
// define function (style 1)
// function hello() {
//   console.log("Hello World");
//   console.log("Welcome user");
// }
// hello(); // function call

// -------Type 1 Function with no parameter no return
// var hello = function () {
//   console.log("Hello World");
//   console.log("Welcome user");
// };
// hello();

// ------Type 2 Functions with parameter no return
// function hello(name) {
//   console.log("Welcome " + name);
// }
// hello("Babu Rao");
// hello("John");

// -----Type 3 Functions with parameter and return
// sum of two numbers
// function sum(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }
// var sumofDigits = sum(10, 5);
// var avg = sumofDigits / 2;
// console.log(avg);

// --------------------------JavaScript Object-------------------------
// var car = {
//   model: "Audi R8", // properties
//   price: 1280000,
//   isTwoSeater: true,
//   print: function () {
//     // methods
//     console.log("Hello");
//   },
// };
// ---------Accesing objects properties and methods--------------
// console.log(car.model);
// console.log(car.price);
// console.log(car.isTwoSeater);
// car.print();

// -----------------------var vs. let vs. const-------------------------
// -------const example
// const name = "John";
// name = "Jane";
// console.log(name);   // output: Error we can't modify any const variable after initialization

// ------var example
// for (let i = 1; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);  // output: 1 2 3

// ------let example
// for (let i = 1; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);  // Error as i is defined inside for loop

// -------------------------Difference between == vs === ----------------------
// ------Example of ==
// if (3 == "3") {
//   console.log("same");   // output : same
// } else {
//   console.log("Not same");
// }

// -------Example of ===
// if (3 === "3") {
//   console.log("same");
// } else {
//   console.log("Not same");   // output : Not same
// }
