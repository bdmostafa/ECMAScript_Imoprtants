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
