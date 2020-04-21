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

// Dynamic function (without function name)
var myName = function (value) {
  return value;
};
console.log(myName("Mostafa"));

// ES6 Variables (var, let, const) ==================================================
var myName = "Mostafa";
myName = "Mahmud"; // Reasigned with myName

console.log(myName); // Output Mahmud

let me = "Mostafa";
me = "Mahmud"; // Reasign with me

console.log(me); // Output Mahmud

// var and let can be reasigned but const can be reasigned
const sonName = "Shams";
// sonName = "Safwaan"; // It can not be

// var can be redeclared and last value is executed but let and const can't be
var country = "Bangladesh";
var country = "USA"; // Redaclared...

console.log(country);

// let and const can not be redeclared
let num = 3;
// let num = 5; // Redeclare can not be

const name = "Shams";
// const name = "Sadia"; // Redeclare can not be

// Variable Scope (local)
function myFuncForLocalVar() {
  var localName = "Javascript";
  console.log(localName);
}
myFuncForLocalVar();

// Variable Scope (global)
var globalName = "ECMAScript6";
function myFunction() {
  console.log(globalName);
}
myFunction();
console.log(globalName);

// Variable Hoisting (Firstly value assign then variable declare)
subName = "CSE";
console.log(subName);
var subName;

// for loop usages ======================
var i; // i for iteration
for (i = 0; i < 100; i = i + 49) {
  console.log("Allah"); // 3 times printed
}

// for...of loop usages =======================
var subArray = ["CSE", "Math", "English", "Physics", "Chemistry"];
for (let subject of subArray) {
  console.log(subject);
}

// Create Objects and Use their values =======================================
var myComputer = {
  monitor: true,
  speaker: false,
  CPU_box: "black",
  motherboard: "Gigabyte",
};

var myComputerPro = {
  motherboard: {
    processor: "core_i3",
    VGA: false,
    RAM: "4GB",
  },

  monitor: {
    color: "silver",
    size: "22inch",
    LED: true,
  },
};

console.log(`Values are ${myComputer["monitor"]} and ${myComputer["motherboard"]}`);
// Output is "Values are true and Gigabyte"

// Values from nested object
console.log(myComputerPro["monitor"]["size"]); // Output "22inch"

// for...in loop ===================================
var myPC = { monitor: true, speaker: false, CPU_box: "black", motherboard: "Gigabyte" };

for (let props in myPC) {
  console.log(props); // property name only
  console.log(myPC[props]); // value only
  console.log(props + ": " + myPC[props]);
}

// if...else statement =============================
if (myComputerPro["motherboard"]["processor"] == "DualCore") {
  console.log("Your PC is outdated");
} else if (myComputerPro["motherboard"]["processor"] == "core_i3") {
  console.log("Your PC is Okay to run");
} else if (myComputerPro["motherboard"]["processor"] == "core_i7") {
  console.log("Your PC is up to date");
} else {
  console.log("Not found");
}
