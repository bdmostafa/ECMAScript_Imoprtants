"use strict";
// Returning Early Pattern from Functions
function xyTest(x, y) {
  if (x < 0 || y < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
}
console.log(xyTest(2, 2)); // 8
console.log(xyTest(2, -5)); // undefined

// Counting Cards (Multiple case handle)====================================
var count = 0;

function countingCards(c) {
  switch (c) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  //   var hold = "Hold";
  //   if (count > 0) {
  //     hold = "Bet";
  //   }

  // Using Ternary Operator
  var hold = count > 0 ? "Bet" : "Hold";

  return count + " " + hold;
}

countingCards(2);
countingCards("K");
countingCards(6);
countingCards("J");
countingCards("A");
countingCards(5);
countingCards("Q");
countingCards(7);
console.log(countingCards(10));

// Accessing object properties with (.)dot / [] bracket/ variables
var person = {
  name: "Mostafa Al Mahmud",
  "zip code": 1340,
  1340: "Savar",
};

var personName = person.name;
var personZipcode = person["zip code"];
var areaCode = 1340;
var personArea = person[areaCode];

console.log(personName); // Mostafa Al Mahmud
console.log(personZipcode); // 1340
console.log(personArea); // Savar

// Updating object properties
person.name = "Shams";
console.log(person.name); // Shams

// Add new properties to object
person.id = 123;
person["status"] = "standard";

console.log(person);
/*
{
  '1340': 'Savar',
  name: 'Shams',
  'zip code': 1340,
  id: 123,
  status: 'standard'
}
*/

// Delete properties from an object
delete person.id;
console.log(person);
/*
{
  '1340': 'Savar',
  name: 'Shams',
  'zip code': 1340,
  status: 'standard'
}
*/

// Using objects for Lookups
function careerLookup(v) {
  //var value = "";

  var career = {
    CSE: "Software Engineer",
    IT: "IT Executive",
    MBA: "CEO",
  };

  //   var value = career[v];
  //   return value;
  return career[v];
}

console.log(careerLookup("CSE")); // Software Engineer

// Testing Objects for Properties
function objTest(isProp) {
  if (!person.hasOwnProperty(isProp)) {
    return false;
  } else {
    return person[isProp];
  }
}
console.log(objTest("hello")); // false
console.log(objTest("name")); // Shams

// Manipulating Complex Objects
// {} - object = {property:value, property:value}
// [] - object = [{property: [val1, val2, val3]}, {property: value, property:value}]
var myPC = [{
    type: "PC",
    model: "core i3",
    accessories: ["speaker", 123, "mouce"],
    headphone: false,
    drives: {
      c: "local",
      d: "soft",
      e: "data",
    },
  },
  {
    type: "Laptop",
    model: "core i3",
    accessories: ["keyboard", "wifi"],
    headphone: true,
  },
];

console.log(myPC[1].accessories); // [ 'keyboard', 'wifi' ]

// Accessing nested objects by . & []
console.log(myPC[0].drives.c); // local
console.log(myPC[0].drives["c"]); // local

// Accessing nested arrays
console.log(myPC[0].accessories[1]); // 123

// Record / Update collection using JSON parse ======================
var collections = {
  101: {
    name: "Mostafa",
    degree: ["BBA", "MIT"],
    hobbies: ["travel", "reading", "coding"],
  },
  102: {
    name: "Ahmed",
    degree: ["Law", "MSC"],
    hobbies: ["job", "Movies", "playing"],
  },
  103: {
    name: "Yeasin",
    degree: ["MSC"],
    hobbies: ["business", "noble", "programming"],
  },
  104: {
    name: "Shams",
    degree: ["LLM"],
    hobbies: ["playing"],
  },
};

// Various ways to access object properties
console.log(collections["102"].name); // Ahmed
// Copy from object collection
var collectionsCopy = JSON.parse(JSON.stringify(collections));

console.log(collectionsCopy["102"]); // { name: 'Ahmed', degree: ['Law', 'MSC'], hobbies: [ 'job', 'Movies', 'playing' ] }

console.log(collectionsCopy["103"]["degree"]); // MSC
console.log(collectionsCopy["103"].degree); // MSC

function updateCollection(id, property, value) {
  // Delete the property if not value exists
  if (value === "") {
    delete collections[id][property];
  } else if (property === "degree") {
    // 'degree' is an array preperty because if not an array, error shows like this '.push is not a function'
    collections[id][property] = collections[id][property] || [];
    collections[id][property].push(value);
  } else if (property === "hobbies") {
    // 'hobbies' is an array preperty because if not an array, error shows like this '.push is not a function'
    collections[id][property] = collections[id][property] || [];
    collections[id][property].push(value);
  } else {
    collections[id][property] = value;
  }

  return collections;
}

console.log(updateCollection(102, "degree", "MBA"));
/*
   Before:
    102: {
        name: "Ahmed",
        degree: ["Law", "MSC"],
        hobbies: ["job", "Movies", "playing"],
    },

    After:
    '102': {
        name: 'Ahmed',
        degree: [ 'Law', 'MSC', 'MBA' ],
        hobbies: [ 'job', 'Movies', 'playing' ]
    },
*/

console.log(updateCollection(103, "business", true));
/*
Before:
102: {
    name: "Ahmed",
    degree: ["Law", "MSC"],
    hobbies: ["job", "Movies", "playing"],
  },

After:
'103': {
    name: 'Yeasin',
    degree: [ 'MSC' ],
    hobbies: [ 'business', 'noble', 'programming' ],
    business: true
  },
*/

console.log(updateCollection(104, "hobbies", "reading"));
/*
Before:
104: {
    name: "Shams",
    degree: ["LLM"],
    hobbies: ["playing"],
  },

After:
'104': {
    name: 'Shams',
    degree: [ 'LLM' ],
    hobbies: [ 'playing', 'reading' ]
  }
*/

// Iterate through an Array with For Loops
var arr = [1, 2, 3, 4, 5];
var arrTotal = 0;

for (var i = 0; i < arr.length; i++) {
  arrTotal += arr[i];
}

console.log(arrTotal); // 15

// Nested array / Multidimensional array
function addAll(arr) {
  var addition = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      addition += arr[i][j];
    }
  }
  return addition;
}

var addition = addAll([
  [1, 2],
  [3, 4],
  [5, 6],
]);
console.log(addition); // 21

// Difference between while and do...while
// Iterate with while
var arr = [];
var i = 10;

while (i < 5) {
  arr.push(i);
  i++;
}
console.log(i, arr); // 10, []

// Iterate with Do...While Loop
do {
  arr.push(i);
  i++;
} while (i < 5);
console.log(i, arr); // 11 [10]

// Details Profile Lookups
var profiles = [{
    id: "01565423",
    name: "Mostafa",
    email: "ms@gm.cm",
    username: "mostafa.bd",
    likes: ["movies", "history", "coding"],
  },
  {
    id: "44752121",
    name: "Sadia",
    email: "sadia@gm.cm",
    username: "sadia.bd",
    likes: ["cooking", "playing", "watching"],
  },
  {
    id: "45654512",
    name: "Shams",
    email: "shams@gm.cm",
    username: "shams.bd",
    likes: ["playing", "traveling", "sleeping"],
  },
];

function detailsProfile(req, property) {
  for (var i = 0; i < profiles.length; i++) {
    if (
      profiles[i].id === req ||
      profiles[i].name === req ||
      profiles[i].username === req ||
      profiles[i].email === req
    ) {
      // For lookup property
      // return profiles[i][property] || "No such property"; // || executes when there is no property

      // lookup full details
      return profiles[i];
    }
  }
  return "Not found";
}

var data = detailsProfile("mostafa.bd");

console.log(data);

// Random fraction function
function randomFraction() {
  return Math.random(); // Between 0 and 1
}
console.log(randomFraction());

// Generate Random wholeNumbers
var randomWholeNumber = Math.floor(Math.random() * 20);
console.log(randomWholeNumber); // Less than 20 but whole number

// Generate Random wholeNumbers within a Range
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(5, 10)); // 5 - 10

// parseInt Function
function toString(str) {
  return parseInt(str);
}
console.log(toString("10"));

function toInteger(str) {
  // return parseInt(str, 2); // Base 2
  return parseInt(str, 16); // Base 16
}
console.log(toInteger("F")); // 15

// Multiple Ternary Operators
function compareFunc(a, b, c) {
  var result =
    a > b && a > c ?
    "A is big" :
    b > a && b > c ?
    "B is big" :
    c > a && c > b ?
    "C is Big" :
    "Press another unique numbers";
  return result;
}
console.log(
  compareFunc(
    0.000000000000000000000000000000000000000000000000000003,
    0.0000000000000000000000000000000000000000000000002,
    0.00000000000000000001
  )
); // C is Big

// const - read-only variable, can't be reassigned
// Mutate/Change an Array declared with const
const s = [9, 8, 7];

function editConstArr() {
  // s = [7, 8, 9]; // Can't be reassigned
  s[0] = 7;
  s[1] = 8;
  s[2] = 9;
}
editConstArr();
console.log(s);

// Prevent Object Data Mutation - (object.freeze())
function object() {
  const CONSTANT_PI = {
    PI: 3.14159265359,
  };

  // Object.freeze() method freezes an object
  Object.freeze(CONSTANT_PI);

  try {
    CONSTANT_PI.PI = 1111;
  } catch (err) {
    console.log(err);
  }

  return CONSTANT_PI.PI;
}

const PI = object();
console.log(PI); // Show TypeError:...........

// Anonymous Function
const concatFunc = (arrOne, arrTwo) => arrOne.concat(arrTwo);

console.log(concatFunc([1, 2, 3], [4, 5, 6, 7]));
/*
[
  1, 2, 3, 4,
  5, 6, 7
]
 */

// Higher-Order Arrow function (map, filter, reduce, find)
const realNumArr = [2, -7, 7, 4.3, 1, 5.9, 9, -42, 11];

const makeSquare = (arr) => {
  // Higher-Order (filter, map)
  const intSquare = arr.filter((x) => Number.isInteger(x) && x > 0).map((x) => x * x);
  return intSquare;
};

const listIntWithSquare = makeSquare(realNumArr);
console.log(listIntWithSquare); // [ 4, 49, 1, 81, 121 ]

// Parameter value initialization

// const addFunction = (function () {
//   return function addFunction(num, val = 3) {
//     return num + val;
//   };
// })();

const addFunction = (num, val = 3) => {
  return num + val;
};

console.log(addFunction(5, 2)); // 7
console.log(addFunction(5)); // 8

// Rest operator with Function Parameter (High-order - reduce())
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(5, 6, 7)); // 18 (5 + 6 + 7)

// Using Rest...
const product = (...rest) => {
  return rest.reduce((a, b) => a * b, 2);
};
console.log(product(1, 2, 3, 4)); // 48 (2 * 1 * 2 * 3 *4)

// Higher-Order (find) with Anonymous
var Students = [{
    rollNo: 1,
    name: 'Alpha',
    prizesWon: 3
  },
  {
    rollNo: 2,
    name: 'Beta',
    prizesWon: 2
  },
  {
    rollNo: 3,
    name: 'Gamma',
    prizesWon: 3
  }
];

var achievers = Students.find(Student => Student.prizesWon == 3);

// Display only first Student who won four prizes 
console.log(achievers); // { rollNo: 1, name: 'Alpha', prizesWon: 3 }

// Spread Operator to evaluate Arrays In-place
const weekDays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
let weekArray;

(function () {
  weekArray = weekDays; // [ '1st Day', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]
  weekArray = [...weekDays]; // ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  weekDays[0] = '1st Day';
})()

console.log(weekArray)

// Destructing Assignments to Assign Varialbes from Objects
// Destructuring - Example 1
const user = {
  name: 'Mostafa',
  age: 29
}

// const userName = user.name;
// const userAge = user.age;

// Destructuring
const {
  name: userName,
  age: userAge
} = user

console.log(userName) // Mostafa

// Destructuring - Example 2
var xyzToAbc = {
  x: 1.2,
  y: 7.5,
  z: 0.9
}

// var x = xyzToAbc.x  // 1.2
// var y = xyzToAbc.y  // 7.5
// var z = xyzToAbc.z  // 0.9

// Destructuring
const {
  x: a,
  y: b,
  z: c
} = xyzToAbc

console.log(a, b, c) // 1.2 7.5 0.9

// Destructuring inside the function - Example 3
const TEMP = {
  yesterday: 65.9,
  today: 71.5
}

function getTempToday(temp) {
  // Destructuring through parameter
  const {
    today: tempOfToday
  } = temp

  return tempOfToday
}

console.log(getTempToday(TEMP)) // 71.5

// Destructuring with Nested Objects - Example 4
const TEMP_MIN_MAX = {
  yesterday: {
    min: 80.3,
    max: 81.5
  },
  today: {
    min: 75.9,
    max: 79.5
  }
}

function getMaxOfYesterday(temp) {
  // Destructuring with nested
  const {
    yesterday: {
      max: maxOfYesterday
    }
  } = temp

  return maxOfYesterday
}

console.log(getMaxOfYesterday(TEMP_MIN_MAX)) // 81.5

// Destructuring to Assign Variables from Arrays - Example 5
var [x, y, , z] = [1, 2, 3, 4, 5, 6, 7]
console.log(x, y, z) // 1 2 4

var x = 1,
  y = 3,
  z = 5;

(() => {
  [x, y, z] = [z, y, x]
})();

console.log(x, y, z) // 5 3 1

// Destructuring with Rest Operator - Example 6
const totalList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function removeFirstTwo(list) {
  // destructuring
  const [, , ...arr] = list;

  return arr;
}

console.log(removeFirstTwo(totalList))
console.log(totalList)

// Desrcuturing to Pass an Object as Parameters - Example 7
// Best usages when API calls
const tradeStats = {
  min: 29.5,
  avg: 45.73,
  median: 37.78,
  mode: 31.3,
  max: 53.12
};

// const half = (args) => {
//   return (tradeStats.min + tradeStats.max) / 2;  // 41.31
// }

// Destructuring (max, min)
const half = ({
  max,
  min
}) => {
  return (max + min) / 2; // 41.31
}

console.log(tradeStats);
console.log(half(tradeStats))

// Create String using Template Literals
const msg = {
  success: ["max-width", "bg-grey", "congratulations-msg"],
  failure: ["notification-bar", "linebreak", "alert-msg"],
  hidden: ["hidden-list", "hidden-keys"]
}

function msgList(arr) {
  const showListsArr = [];
  for (let i = 0; i < arr.length; i++) {
    showListsArr.push(`<li class="text-worning">${arr[i]}</li>`)
  }

  return showListsArr;
}

console.log(msgList(msg.failure));
/*
[
  '<li class="text-worning">notification-bar</li>',
  '<li class="text-worning">linebreak</li>',
  '<li class="text-worning">alert-msg</li>'
]
 */