/* Queues works on the FIFO(First in First Out) principle. Hence, it performs two basic operations that is addition of elements at the end of the queue and removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure. */

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