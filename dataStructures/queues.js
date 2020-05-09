/*
Queues works on the FIFO(First in First Out) principle. Hence, it performs two basic operations
that is addition of elements at the end of the queue and removal of elements from the front of the queue.
Like Stack, Queue is also a linear data structure.
*/

const Queue = function () {
    listQueue = [];

    this.printQueue = () => {
        if (this.isEmpty()) return "Empty queue.";
        // console.log(listQueue);
        return listQueue;
    };
    this.enqueue = (e) => {
        listQueue.push(e);
    };
    this.dequeue = () => {
        // Remove an element from the queue and return underflow if queue is empty
        if (this.isEmpty()) return "Underflow queue.";
        return listQueue.shift();
    };
    this.front = () => {
        // Return the front element of the queue without removing it
        if (this.isEmpty()) return "Empty queue.";
        return listQueue[0];
    };
    this.size = () => {
        return listQueue.length;
    };
    this.isEmpty = () => {
        // Return true if the queue is empty.
        return (listQueue.length === 0);
    };
}

// Create new object myQueue
var myQueue = new Queue();

// Add some elements
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("d");
myQueue.enqueue("e");

console.log(myQueue.printQueue()); // [ 'a', 'b', 'c', 'd', 'e' ]

console.log(myQueue.dequeue()); // a
console.log(myQueue.front()); // b
console.log(myQueue.printQueue()); // [ 'b', 'c', 'd', 'e' ]


/* Using Queue constructor, auto generate binary numbers function */
const generateBinary = function (n) {
    // Create an object of Queue constructor 
    var binaryQueue = new Queue();

    // Enqueue the first binary number 0 or 1 from randomStart()
    binaryQueue.enqueue(randomStart());

    // Random starting function
    function randomStart() {
        // Return a random integer from 0 to 1
        return Math.floor(Math.random() * 2).toString();
    }

    var arrBinary = [];
    // Loop until less zero and print binary numbers
    while (n-- > 0) {
        // Print the front of queue 

        var b1 = binaryQueue.front();
        arrBinary.push(binaryQueue.front());
        binaryQueue.dequeue();


        // Store b1 into b2 before changing it 
        var b2 = b1;

        // Append "0" to b1 and enqueue it 
        binaryQueue.enqueue(b1 + "0");

        // Append "1" to b2 and enqueue it
        binaryQueue.enqueue(b2 + "1");

        // Add toString() to get rid of adding 1 with b1 and b2
        binaryQueue.enqueue(b1 + randomStart() + "0");

        binaryQueue.enqueue(b2 + randomStart() + "1");
    }

    console.log(arrBinary);
}

generateBinary(10);
/*
[
  '0',   '00',   '01',
  '010', '001',  '000',
  '001', '0010', '0001',
  '010'
]
*/
/*
[
  '1',   '10',   '11',
  '100', '101',  '100',
  '101', '1000', '1001',
  '110'
]
*/

/*
Priority Queue is an extension of queue with following properties.
1. Every item has a priority associated with it.
2. An element with high priority is dequeued before an element with low priority.
3. If two elements have the same priority, they are served according to their order in the queue.
*/

const PriorityQueue = function () {
    var queueCollection = [];

    this.printCollection = () => {
        if (this.isEmpty()) return "Empty queue.";
        return queueCollection;
    };

    this.enqueue = (e) => {
        if (this.isEmpty()) {
            queueCollection.push(e);
        } else {
            var contain = false;
            for (var i = 0; i < queueCollection.length; i++) {
                //checking priorities
                if (e[1] < queueCollection[i][1]) {
                    // splice() method adds/removes items to/from an array, and returns the removed item(s)
                    // from 'ith' index, remove '0' and replace with 'e'
                    queueCollection.splice(i, 0, e);
                    contain = true;
                    break;
                }
            }
            if (!contain) {
                queueCollection.push(e);
            }
        }
    };

    this.dequeue = () => {
        if (this.isEmpty()) return "Underflow queue.";

        // Delete 0th index value (1st element)
        var value = queueCollection.shift();
        return value[0]; // Safwaan Shams

        // Or we can use single line in return like below but it return with priority number '1'
        // return queueCollection.shift(); // [ 'Safwaan Shams', 1 ]
    };

    this.front = () => {
        if (this.isEmpty()) return "Empty queue.";
        return queueCollection[0];
    };

    this.size = () => {
        return queueCollection.length;
    };

    this.isEmpty = () => {
        return (queueCollection.length === 0);
    };
}

var pqueue = new PriorityQueue();

pqueue.enqueue(["Mostafa Al Mahmud", 3]);
pqueue.enqueue(["Safwaan Shams", 1]);
pqueue.enqueue(["Sadia Akter", 2])
pqueue.enqueue(["Ela", 2]);

console.log(pqueue.printCollection());
/*
Here priority is like 1 >> 2 >> 3
And if any priority is more than one, output will be by order
[
  [ 'Safwaan Shams', 1 ],
  [ 'Sadia Akter', 2 ],
  [ 'Ela', 2 ],
  [ 'Mostafa Al Mahmud', 3 ]
]
*/

console.log(pqueue.front()); // [ 'Safwaan Shams', 1 ]

// Delete from priority, not in first enqueue
console.log(pqueue.dequeue()); // Safwaan Shams

console.log(pqueue.front()); // [ 'Sadia Akter', 2 ]

console.log(pqueue.size()); // 3