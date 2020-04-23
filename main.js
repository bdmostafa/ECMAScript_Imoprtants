"use strict"; // Strict Mode for error detection and code structure
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

// Functions ==============================================================

// Simple function
function mycalc() {
  var x = 10;
  var y = 20;
  var z = x + y;
  console.log(z);
}
mycalc();

// Parameterized function
function parameterizedFunction(x, y) {
  var z = x + y;
  console.log(z);
}
parameterizedFunction(5, 10);

// Rest Parameters (...x)
function restParameterFunc(...x) {
  console.log(x); // Shows all values as array
  console.log(x[5]); // 6
}
restParameterFunc(1, 2, 3, 4, 5, 6, 7, "X", "Y", "Z");

// Returning function
function returnFunc1() {
  return 100;
}

function returnFunc2() {
  return 200;
}

function returnFunc3() {
  return returnFunc1() + returnFunc2();
}

function returnFunc4() {
  return returnFunc3();
}

console.log(returnFunc3()); // Output 300
console.log(returnFunc3() + 33); // Output 333
console.log(returnFunc4()); // Output 300

// Anonymous function ================================================
var anonymousFunc = function () {
  return "Mostafa";
};

console.log(anonymousFunc()); // Mostafa

let functionAnonymous = () => "Hello Mostafa";
console.log(functionAnonymous()); // Hello Mostafa

// Anonymous function with parameter
var anonymousFunction = function (x) {
  return x;
};
// let anonymousFunction = (x) => {return x;}

console.log(anonymousFunction("Shams")); // Shams

// Anonymous function with rest parameter
var anonymousFunction = function (...x) {
  return x;
};

console.log(anonymousFunction(1, 2, 3, 4, 5)); // all values as array
// Anonymous function can be reassigned and last function is executed

// Arrow function =========================================
var arrowFunc = () => {
  console.log("Ahmed Yeasin");
};
arrowFunc();

// Arrow function with parameter
var arrowFunc = (x) => {
  console.log(x);
};
arrowFunc("Mostafa");

// Arrow function with rest parameter
var arrowFunc = (...x) => {
  console.log(x);
};
arrowFunc("Mostafa", 1, 2, 3);

// Arrow function with return
var arrowFunc = (...x) => {
  return x;
};
console.log(1, 2, 3);

var arrowFunc = () => {
  return "Mostafa";
};
console.log(arrowFunc());

// Function Constructor ==========================
function Student(name, roll, subject) {
  this.studentName = name;
  this.studentRoll = roll;
  this.studentSubject = subject;
}

var Mostafa = new Student("Mostafa", 1, "IT");

console.log(Mostafa);
// Output is:
// Student {
//     studentName: 'Mostafa',
//     studentRoll: 1,
//     studentSubject: 'IT'
//   }
console.log(Mostafa.studentSubject); // Output "IT"

// ES6 Array ================================================================

// Simple Array
var simpleArray = ["A", "B", "C", "D", "E"];

var simpleArrayConstructor = new Array("A", "B", "C", "D", "E");

console.log(simpleArray); // [ 'A', 'B', 'C', 'D', 'E' ]

for (let a of simpleArray) {
  console.log(a);
}

for (let b of simpleArrayConstructor) {
  console.log(b);
}

// ES6 Multidimensional Arrays
var arrayOne = ["A", "B", "C", "D", "E"];

var arrayTwo = ["F", "G", "H", "I", "J"];

var arrayThree = ["K", "L", "M", "N", "O"];

var total = [arrayOne, arrayTwo, arrayThree];

console.log(total[1][2]); // H

console.log(total[0][3]); // D

console.log(total[2][5]); // undefined

// ES6 Array de-structuring ================================
var currencies = ["BDT", "USD", "CAD", "EUR", "JPY"];

var [a, c, , d] = currencies;
console.log(d); // EUR

var [, , c, , e] = currencies;
console.log(c); // CAD

var [a, , c, ...rest] = currencies;
console.log(rest); // [ 'EUR', 'JPY' ]

var symbols = ["৳", "$", "$", "€", "¥"];
var newArr = [...currencies, ...symbols];
// var newArr = currencies.concat(symbols); // Exactly same as newArr
console.log(newArr);
// [
//   'BDT', 'USD', 'CAD',
//   'EUR', 'JPY', '৳',
//   '$',   '$',   '€',
//   '¥'
// ]

function multiplyAndDivide(a, b) {
  return [a * b, a / b];
}
const array = multiplyAndDivide(10, 5);
console.log(array); // [ 50, 2 ]

// De-structuring
const [multiply, divide, addition = "No addition"] = multiplyAndDivide(10, 5);
console.log(multiply); // 50
console.log(divide); // 2
console.log(addition);
// returns No addition as a default value but if it gets 3rd parameter on return function

// Object de-structuring
const studentOne = {
  stdName: "Mostafa",
  Dept: "IT",
  ID: 102,
  Status: "Regular",
  result: {
    CSE101: "A",
    CSE102: "B",
  },
};

const studentTwo = {
  stdName: "Yeasin",
  Dept: "Business",
  ID: 101,
  result: {
    BBA101: "A+",
    BBA102: "A",
  },
};

const { stdName, ID } = studentOne;
console.log(stdName); // Mostafa
console.log(ID); // 102

const {
  result: { BBA101 },
  ...restData
} = studentTwo;
console.log(BBA101); // A+
console.log(restData); // { stdName: 'Yeasin', Dept: 'Business', ID: 101 }

// Object data overriding by combining/destructuring two objects
const studentThree = { ...studentOne, ...studentTwo };
console.log(studentThree);

// Object de-structuring in function parameter
function showStudent(data) {
  console.log(`Name is ${data.stdName}. ID is ${data.ID}`);
}
showStudent(studentTwo); // Name is Yeasin. ID is 101

function showStd({ stdName, ID, choice = "Programing" }) {
  console.log(`Name is ${stdName}. ID is ${ID}. Choice is ${choice}`);
}
showStd(studentTwo); // Name is Yeasin. ID is 101. Choice is Programing
// If choice property is in the object, returns the value from the object. If not, returns value from function parameter

// Array filter()
const items = [
  { name: "PC", price: 30000 },
  { name: "TV", price: 7000 },
  { name: "AC", price: 45000 },
  { name: "Mobile", price: 5500 },
  { name: "iPod", price: 25000 },
];

const filteredItems = items.filter((items) => {
  return items.price <= 10000;
});

console.log(filteredItems); // [ { name: 'TV', price: 7000 }, { name: 'Mobile', price: 5500 } ]

const lengthItems = items.filter((items) => {
  return items.name.length > 3;
});
console.log(lengthItems); // [ { name: 'Mobile', price: 5500 }, { name: 'iPod', price: 25000 } ]

// Array map()
const itemsName = items.map((item) => {
  return item.name;
});
console.log(itemsName); // [ 'PC', 'TV', 'AC', 'Mobile', 'iPod' ]

// Array find()
const foundItem = items.find((items) => {
  return items.name === "PC";
});
console.log(foundItem); // { name: 'PC', price: 30000 }

// Array forEach()
items.forEach((items) => {
  console.log(`${items.name} : ${items.price}`);
});

// Array .some()
const itemsFree = () => {
  items.price = 0;
};
console.log(items.some(itemsFree)); // returns false as boolean

// This should be fixed==================
// const itemMatched = () => {
//   items.name === "TV";
// };
// console.log(items.some(itemMatched));

// Array .every()
const itemsAllLessPrice = () => {
  items.price <= 10000;
};
console.log(items.every(itemsAllLessPrice));
// returns false as boolean because all items are not under condition

// Array reduce()
const itemReducer = items.reduce((accumulator, items) => {
  return items.price + accumulator;
}, 0);
// 30000 + 7000 + 45000 + 5500 + 25000
console.log(itemReducer); // 112500

const arraySum = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4 + 5
console.log(arraySum.reduce(reducer)); // 15

// 5 + 1 + 2 + 3 + 4 + 5
console.log(arraySum.reduce(reducer, 5)); // 20

// Array include() determines whether an array includes a certain value or not
console.log(items.includes("TV"));

const arrInclude = arraySum.includes(7);
console.log(arrInclude); // returns false as boolean

// ES6 Map (group of data)========================================
var map = new Map();

map.set("country", "BD");
map.set("currency", "BDT");
map.set("status", "developing");
map.set("education", "mid-level");
map.set("GDP", "8+");

console.log(map.keys()); // [Map Iterator] { 'country', 'currency', 'status', 'education', 'GDP' }
console.log(map.values()); // [Map Iterator] { 'BD', 'BDT', 'developing', 'mid-level', '8+' }

// ES6 Map loop
for (let value of map.values()) {
  console.log(value);
}

for (let key of map.keys()) {
  console.log(key);
}

// ES6 Map (delete/get/clear/has)
// delete(key)
// get(key)
// has(key)
// clear()

map.delete("GDP");
for (let value of map.values()) {
  console.log(value);
}

console.log(map.get("country")); // BD

if (map.has("status")) {
  console.log("Found"); // Found
} else {
  console.log("Not found");
}

map.clear();
for (let value of map.values()) {
  console.log(value);
}

if (map.has("status")) {
  console.log("Found");
} else {
  console.log("Not found"); // Not found
}

// ES6 Promises ============================================================

// Basic idea on Promise (fulfill, reject)
let myPromise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 4) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((message) => {
    console.log("'.then()' message is " + message);
  })
  .catch((message) => {
    console.log("'.catch()' message is " + message); // '.catch()' message is Failed
  });

// Pending (setTimeout()), fulfill (resolve(), then()), reject (reject(), catch())
let learnComplete = true;

let learnJS = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (learnComplete) {
      resolve("ECMAScript learning completed");
    } else {
      reject("ECMAScript learning not completed");
    }
  }, 3 * 1000);
});

// Consuming a Promise: then, catch, finally methods
function startLearn() {
  console.log("Create an account and enjoy learning!");
}

learnJS
  .then((success) => {
    console.log(success);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(() => {
    startLearn(); // finally() executes whether the promise is fulfilled or rejected
  });

// Callback, errorCallback functions ====================================
const userJoin = true;
const userWatchingMovie = true;

function watchMoving(callback, errorCallback) {
  if (userJoin && userWatchingMovie) {
    callback({
      name: "User joined.",
      message: "Enjoy the movie :(",
    });
  } else if (userJoin && !userWatchingMovie) {
    callback({
      name: "User joined.",
      message: "Just joined now but not watching movie!",
    });
  } else {
    errorCallback("Welcome to our site...");
  }
}

watchMoving(
  (message) => {
    console.log(message.name + " " + message.message);
  },
  (error) => {
    console.log(error);
  }
);

// Transfering callback function into Promise object ==========================
function watchMovingPromise() {
  return new Promise((resolve, reject) => {
    if (userJoin && userWatchingMovie) {
      resolve({
        name: "User joined.",
        message: "Enjoy the movie :(",
      });
    } else if (userJoin && !userWatchingMovie) {
      resolve({
        name: "User joined.",
        message: "Just joined now but not watching movie!",
      });
    } else {
      reject("Welcome to our site...");
    }
  });
}

watchMovingPromise()
  .then((message) => {
    console.log(message.name + " " + message.message);
  })
  .catch((error) => {
    console.log(error);
  });

// Async/ Await function with Promise object =========================
function asyncTask(i) {
  return new Promise((resolve) => resolve(i + 1));
}
async function runAsyncTasks() {
  const response1 = await asyncTask(0);
  const response2 = await asyncTask(response1);
  const response3 = await asyncTask(response2);
  return "Everything done";
}
runAsyncTasks().then((result) => console.log(result)); // "Everything done" returns when every tasks are completed

// Promise without Async ================================
function runAsyncTasksPromise() {
  return asyncTask(0)
    .then((response1) => {
      return asyncTask(response1);
    })
    .then((response2) => {
      return asyncTask(response2);
    })
    .then((response3) => {
      return asyncTask(response3);
    })
    .then((response4) => {
      return "Everything done asynchronously";
    });
}

runAsyncTasksPromise().then((result) => {
  console.log(result);
});

// Promise.all() ====================================
const promiseOne = Promise.resolve(11); // Promise.resolve(value)
const promiseTwo = new Promise((resolve, reject) => {
  resolve("Promise two done");
});
const promiseThree = 99;
const promiseFour = new Promise((resolve, reject) => {
  // One structure for setTimeout ===================
  //   setTimeout(() => {
  //     resolve("Promise four done");
  //   }, 500);

  // Another structure =========================
  //   setTimeout(
  //     () => {
  //       resolve;
  //     },
  //     500,
  //     "Promise four done"
  //   );

  setTimeout(resolve, 500, "Promise four done"); // Single line structure
});

Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then((values) => {
  console.log(values);
});

// Promise.race() ======================
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // Both resolve, but promiseTwo is faster and output is "two"
});

// Simple promise resolve within a given time in the async function
const timeLimit = (t) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve(`Finished within ${t}`);
    // }, t);

    setTimeout(resolve, t, `Finished within ${t}`); // Same as above code
  });
};

timeLimit(300).then((result) => console.log(result));
// Finished within 300

Promise.all([timeLimit(100), timeLimit(200), timeLimit(300)]).then((result) =>
  console.log(result)
);
// [ 'Finished within 100', 'Finished within 200', 'Finished within 300' ]
// The output is consoled as an array only after resolving all the promises chronologically

const timeSlots = [1000, 2000, 3000];
const promises = [];

// Mapping the timeSlots
timeSlots.map((duration) => {
  // Pushing the pending promise to the array promises
  promises.push(timeLimit(duration));
});

console.log(promises); // To check the pending status on promises
// [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]

// Now passing the 'promises' pending array to Promise.all
Promise.all(promises).then((result) => console.log(result));
// [
//   'Finished within 1000',
//   'Finished within 2000',
//   'Finished within 3000'
// ]
// Promise.all results after all the promises are resolved

// What happens if any of the promises is rejected?!
const timeEnd = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 1000) {
        reject(`Rejected in ${t}`);
      } else {
        resolve(`Finished in ${t}`);
      }
    }, t);
  });
};

const tValues = [500, 1000, 1500];

const promisesArray = [];

tValues.map((time) => {
  promisesArray.push(timeEnd(time));
});

console.log(promisesArray);
// (node:8528) UnhandledPromiseRejectionWarning: Rejected in 1000
// (node:8528) UnhandledPromiseRejectionWarning: Unhandled promise rejection.

// Now passing pending promisesArray to Promise.all
Promise.all(promisesArray)
  .then((result) => console.log(result)) // Promise.all not resolved and because of one rejecting, all the rest of the promises fail
  .catch((err) => console.log(`Error throws in ${err}`)); //Returns "Error throws in Rejected in 1000"

// To handle this error for each promise, have to return catch function inside promiseArr out of Promise.all before passing to it(Promise.all)
const promiseArr = tValues.map((time) => {
  return timeEnd(time).catch((err) => err);
});

Promise.all(promiseArr)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error throws in ${err}`));
//  [ 'Finished in 500', 'Rejected in 1000', 'Finished in 1500' ]
