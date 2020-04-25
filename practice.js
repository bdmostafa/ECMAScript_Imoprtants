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
var myPC = [
  {
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
var profiles = [
  {
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
