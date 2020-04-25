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
    degree: "MBA",
    hobbies: ["travel", "reading", "coding"],
  },
  102: {
    name: "Ahmed",
    degree: "Law",
    hobbies: ["job", "Movies", "playing"],
  },
  103: {
    name: "Yeasin",
    degree: "MSC",
    hobbies: ["business", "noble", "programming"],
  },
  104: {
    name: "Shams",
    degree: "LLM",
    hobbies: ["kk", "kjk"],
  },
};

console.log(collections["102"].name); // Ahmed
// Copy from object collection
var collectionsCopy = JSON.parse(JSON.stringify(collections));

console.log(collectionsCopy["102"]); // { name: 'Ahmed', degree: 'Law', hobbies: [ 'job', 'Movies', 'playing' ] }

console.log(collectionsCopy["103"]["degree"]); // MSC
console.log(collectionsCopy["103"].degree); // MSC

function updateCollection(id, property, value) {
  // Delete the property if not value exists
  if (value === "") {
    delete collections[id][property];
  } else {
    collections[id][property] = value;
  }

  return collections;
}

console.log(updateCollection(103, "degree", "MBA"));
