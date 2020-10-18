// Stacks- push, pop, peek, length ============================

// Palindrome check
var stringArr = []; // stack

var string = "121";
var string = "Racecar";
var string = "I did, did I?";

// Replace symbols characters with blank ''
string = string.replace(/^(\W?)|\W/g, '');

// To handle upper case
string = string.toLowerCase();

var reversedString = "";

// Put digits of num into stack
for (var i = 0; i < string.length; i++) {
    stringArr.push(string[i]);
}
console.log(stringArr); // [ '1', '2', '1' ]

// Pop off the stack in reverse order
for (var i = 0; i < string.length; i++) {
    reversedString += stringArr.pop();
}
console.log(reversedString); // 121

if (reversedString === string) {
    console.log(string + " is a palindrome.");
} else {
    console.log(string + " is not a palindrome.");
}

// Another way to check palindrome
const isPalindrome = (inString) => {
    inString = inString.replace(/\W/g, '');
    inString = inString.toLowerCase();
    console.log(inString); // ididdidi

    // for (var i = 0; i < inString.length; i++) {
    //     if (inString[i] !== inString[inString.length - 1 - i]) {
    //         return `${inString} is not a palindrome.`;
    //     }
    // }
    // return `${inString} is a palindrome.`;

    // Or using reverse()===========
    if (inString === inString.split('').reverse().join()) {
        return `${inString} is a palindrome.`;
    }
    return `${inString} is not a palindrome.`;
}

console.log(isPalindrome(string));
// ididdidi is a palindrome.

// Create a stack and check by push, pop, peek =====================
var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = (val) => {
        this.storage[this.count] = val;
        this.count++;
    }

    // Removes and returns the value at the end of stack
    this.pop = () => {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var showStorage = this.storage[this.count];
        delete this.storage[this.count];
        return showStorage;
    }

    this.size = () => {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = () => {
        return this.storage[this.count - 1];
        // '-1' because 'this.push' has 'count++' after assigning value
    }
}

var myStack = new Stack();

myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // 20
console.log(myStack.pop()); // 20
console.log(myStack.peek()); // 10
console.log(myStack.size()); // 1
myStack.push("Mostafa");
console.log(myStack.size()); // 2
console.log(myStack.peek()); // Mostafa
console.log(myStack.pop()); // Mostafa
console.log(myStack.peek()); // 10


// Stack philosophy (LIFO - First In Last Out)
class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if(this.stack.length) {
            return this.stack.pop();
        }
    }
}

const card = new Stack();
card.add('A');
card.add('B');
card.add('C');
card.add('D');

console.log(card.stack);

const removedCard = card.remove();

console.log(removedCard);

console.log(card.stack);