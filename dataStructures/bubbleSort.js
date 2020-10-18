const arrNum = [11, 51, 78, 43, 55, 99];

function bubbleSortFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const sortedData = bubbleSortFunc(arrNum);

console.log(sortedData); // [11, 43, 51, 55, 78, 99]