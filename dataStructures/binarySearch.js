let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 99, 101, 105, 211, 309];

const binarySearch = (numbers, target) => {

    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (exampleArray[mid] === target) {
            console.log('target item found in position', mid)
            return mid;
        }
        if (exampleArray[mid] < target) {
            start = mid + 1;
        }
        if (exampleArray[mid] > target) {
            end = mid - 1;
        }
    }
    // If targeted number is not found return -1
    return -1;
}

let target = 19;
let index = binarySearch(exampleArray, target);

console.log(index); // target item found in position 7

target = 9;
index = binarySearch(exampleArray, target);
console.log(index); // -1