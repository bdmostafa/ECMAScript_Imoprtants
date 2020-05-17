/*
A heap - a type of data structure where each node is either greater than/equal or less than/equal to the node’s children.
It is essentially used to get the highest priority element at any point in time. There are two types of heaps, 
based on the heap property — MinHeap and MaxHeap. MinHeap: The parent node is always less than the child nodes. 
MaxHeap: The parent node is always greater than or equal to the child nodes
*/

// Create MinHeap constructor with insert, remove, sort methods
const MinHeap = function () {
    let heap = [null];

    this.insert = (number) => {
        heap.push(number);
        // If heap has more than one item 
        // that means 0 index is null, 1st index is one item
        if (heap.length > 2) {
            // Find last index in the heap since first index is null
            let index = heap.length - 1;
            // Find parent index: (i / 2) so [Math.floor(index / 2)] is the equation of the parent node
            // If parent is more than last item, continue loop
            while (heap[Math.floor(index / 2)] > heap[index]) {
                // If index is not the root node - (index >= 1) or (index != 0)
                if (index >= 1) {
                    // Destructuring Syntax in ES6 for swap
                    // Parent to child and child to parent
                    [heap[Math.floor(index / 2)], heap[index]] = [heap[index], heap[Math.floor(index / 2)]];
                    // If the parent is not the root node or more than root node
                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2);
                    } else {
                        break;
                    }
                }
                // Continue loop until parent node is less than child node
            }
        }
    }

    this.remove = () => {
        // In MinHeap, heap[1], (index 1), is the smallest all the time 
        let smallestHeap = heap[1];

        // If the heap has only one item, cut off last item using splice()
        if (heap.length === 2) {
            heap.splice(1, 1);
        }

        // If there is more than one node in the tree, two options here: 2 items or more
        else if (heap.length > 2) {
            // Last node is assigned to the first node
            heap[1] = heap[heap.length - 1];
            // Shorten the array heap by 1 using splice()
            heap.splice(heap.length - 1);

            // When there are only two items in the heap =======
            if (heap.length === 3) {
                // If heap has only two item, compare them
                if (heap[1] > heap[2]) {
                    // Swap if parent node is more than child node
                    [heap[1], heap[2]] = [heap[2], heap[1]]; // ES6 destructuring swap syntax
                };
                return smallestHeap;
            };

            // When there are more than two items in the heap =======
            let idx = 1;
            let left = idx * 2; // For left child index
            let right = idx * 2 + 1; // For right child index

            while (heap[idx] >= heap[left] || heap[idx] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    // If left child is less than right, it is to be swapped with idx
                    [heap[idx], heap[left]] = [heap[left], heap[idx]];
                    // After swapping, increament idx for left child because next child to be checked next in looping
                    idx = idx * 2;
                } else {
                    // If right child is less than left, it is to be swapped with idx
                    [heap[idx], heap[right]] = [heap[right], heap[idx]];
                    idx = idx * 2 + 1; // Increament idx for right child
                };

                // set left and right node to be the left and right to pass down 
                // And check again if it matches with the above condition 
                // If left or right child is undefined means that it reached bottom of the heap 
                // and break looping 
                left = idx * 2;
                right = idx * 2 + 1;
                if (heap[left] === undefined || heap[right] === undefined) {
                    break;
                };
            };
        }

        // Otherwise, when heap has no element, return null
        else {
            return null;
        };
        return smallestHeap;
    };

    this.sort = () => {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove());
        };
        return result;
    };

    this.print = () => heap;

}


// Create MaxHeap constructor with insert, remove, sort methods
const MaxHeap = function () {
    let heap = [null];

    this.insert = (number) => {
        heap.push(number);

        // If heap has more than one element
        if (heap.length > 2) {
            // Assign last index in the heap to index variable
            let index = heap.length - 1;

            // If parent node is less than last child node, continue loop
            while (heap[Math.floor(index / 2)] < heap[index]) {
                if (index >= 1) {
                    // Swap child to parent and vice versa
                    [heap[Math.floor(index / 2)], heap[index]] = [heap[index], heap[Math.floor(index / 2)]];

                    // If the parent is not the root node or more than root node
                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2);
                    } else {
                        break;
                    };
                };
                // Execute break in loop when parent node is more than child node
            };
        };
    };

    this.remove = () => {
        // In MinHeap, heap[1], (index 1), is the smallest all the time 
        let biggestHeap = heap[1];

        // If the heap has only one element, cut off last item using splice()
        if (heap.length === 2) {
            heap.splice(1, 1);
        } else if (heap.length > 2) {
            // Last node is assigned to the first node
            heap[1] = heap[heap.length - 1];
            // Shorten the array heap by 1 using splice()
            heap.splice(heap.length - 1);

            // When there are only two items in the heap =======
            if (heap.length === 3) {
                if (heap[1] < heap[2]) {
                    // If child node is more than parent node, 
                    // Swap child to parent and vice versa
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return biggestHeap;
            };

            // When there are more than two items in the heap =======
            let idx = 1;
            let left = idx * 2; // For left child index
            let right = idx * 2 + 1; // For right child index

            while (heap[idx] <= heap[left] || heap[idx] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    // If left child is more than right child, it is to be swapped with parent node
                    [heap[idx], heap[left]] = [heap[left], heap[idx]];
                    idx = idx * 2;
                } else {
                    // If right child is more than left, it is to be swapped with parent node
                    [heap[idx], heap[right]] = [heap[right], heap[idx]];
                    idx = idx * 2 + 1;
                };

                // If left or right child is undefined means that it reached bottom of the heap 
                // and break looping 
                left = idx * 2;
                right = idx * 2 + 1;
                if (heap[left] === undefined || heap[right] === undefined) {
                    break;
                };
            };
        }

        // Otherwise, when heap has no element, return null
        else {
            return null;
        };
        return biggestHeap;
    };

    this.sort = () => {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove());
        };
        return result;
    };

    this.print = () => heap;
}








const myMinHeap = new MinHeap();

myMinHeap.insert(6);
myMinHeap.insert(8);
myMinHeap.insert(5);
myMinHeap.insert(9);
myMinHeap.insert(1);
myMinHeap.insert(3);
console.log(myMinHeap.print());
/*
[
  null, 1, 5, 3,
  9,    8, 6
]
*/
console.log(myMinHeap.sort());
/* [ 1, 3, 5, 6, 8, 9 ]

Graphical Presentation of Min Heap
            1
           / \
          5   3
         / \ / \
        9  8 6

*/
const myMaxHeap = new MaxHeap();
myMaxHeap.insert(5);
myMaxHeap.insert(9);
myMaxHeap.insert(1);
myMaxHeap.insert(3);
myMaxHeap.insert(6);
myMaxHeap.insert(8);

console.log(myMaxHeap.print());
/*
[
  null, 9, 6, 8,
  3,    5, 1
]

*/
console.log(myMaxHeap.sort());
// [ 9, 8, 6, 5, 3, 1 ]
/*
Graphical Presentation of Max Heap
            9
           / \
          6   8
         / \ / \
        3  5 1

*/