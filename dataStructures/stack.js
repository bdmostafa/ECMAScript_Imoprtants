// Stacks- push, pop, peek, length

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