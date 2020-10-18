const arrNum = [11, 51, 78, -5, 67, 43, 55, 99];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

console.log(selectionSort(arrNum));
// [-5, 11, 43, 51, 55, 78, 99]