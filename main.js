"use strict"; // Strict Mode as like Police for error detection
console.log("Hello BD!");

myName();

function myName() {
  var name = "mostafa";
}

// Spread Operator ==============================
let IITStudent = ["Mostafa", "Ahmed"];

let IITTeacher = [...IITStudent, "Patuwary", "Jesmin", "Yusuf"];

let IITMembers = [...IITTeacher, ...IITStudent];

// console.log(IITMembers);

// Push method without using spread operator ======================
let iitStaff = ["Kamal", "Kalam"];
IITMembers.push(iitStaff);

console.log(IITMembers); // Push function merge in separate array but spread does not

// Rest parameter
function Summation(...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(sum); // Output is 45
}
Summation(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Rest parameter + more parameters
function sumRest(a, b, ...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(sum); // Output is 15 because a and b parameters are not calculated here

  let totalSum = a + b + sum;
  console.log(totalSum); // Output is 65
}
sumRest(20, 30, 1, 2, 3, 4, 5);

// Dynamic function
