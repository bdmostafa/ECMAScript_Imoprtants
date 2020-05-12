/* LinkedList */

// Create LinkedList constructor that has various methods like
// size(), head(), insert(), remove(), isEmpty(), indexOf(), elementAt(), insertAt(), removeAt()...
const LinkedList = function () {
    var length = 0;
    var head = null; // head as a pointer

    // Create default Node constructor that has two property element and next
    var Node = function (e) {
        this.element = e;
        this.next = null;
    };

    this.size = () => {
        return length;
    };

    this.head = () => {
        return head;
    };

    // Add/Insert an element to the list
    this.insert = (e) => {
        var node = new Node(e);
        // If head has any node, execute this following statement
        if (head !== null) {
            var currentNode = head;
            // Iterate currentNode to next to next until (!currentNode.next)
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // When currentNode.next is null, assign new node to currentNode.next
            currentNode.next = node;
        } else {
            // If head is null, assign new node to head
            // It comes for the first node
            head = node;
        }
        // When any new node is assigned, increament length
        length++;
    };

    // Remove an element from the list passing an element through parameter
    this.remove = (e) => {
        var currentNode = head;
        var previousNode;
        // If the element is on the head, assign head pointer to the next of the current node
        if (currentNode.element === e) head = currentNode.next;
        else {
            // If e is not the head pointer, continue loop until found
            while (currentNode.element !== e) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Delete the element replacing/assigning the following node link to the previous node link
            previousNode.next = currentNode.next;
        }
        // After removing, decreament length
        length--;
        return currentNode.element;
    };

    // Check if the list is empty or not
    this.isEmpty = () => {
        return length === 0;
    };

    // Find index number through passing an element
    this.indexOf = (e) => {
        var currentNode = head;
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === e) {
                // If 1st element is matched with the passing element, return index that is now '0'
                return index;
            } // If current element is not equal to the given element, assign next to current and continue loop until end
            else currentNode = currentNode.next;
        }

        return -1;
    };

    // Find an element through passing an index number
    this.elementAt = (index) => {
        var currentNode = head;
        var count = 0;
        // If index that is passed through parameter is less than 0 
        // or more than length, return undefined
        if (index < 0 || index > length) {
            return undefined;
        } else {
            while (index > count) {
                count++;
                currentNode = currentNode.next
            }
            return currentNode.element;
        }
    };

    // Insert/Add an element at a specific index 
    this.insertAt = (index, e) => {
        var node = new Node(e);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index > length) {
            return false;
        } else if (index === 0) {
            // Assign head node (currenNode) to the next
            node.next = currentNode;
            // And Assign head pointer to the new node
            head = node;
        } else {
            while (currentIndex < index) {
                // Continue loop till currentIndex is less than index
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // When the given index is matched with currentIndex, stop looping
            // Assign currentNode to the next of the new node
            // Finally assign new node to the next of the previous node
            node.next = currentNode;
            previousNode.next = node;
        }
        // Length must be increamented because of a new element is added
        length++;
        return node.element;
    }

    // Remove an element passing an index through parameter
    this.removeAt = (index) => {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= length) {
            // If index is not found, return null
            return null;
        } else if (index === 0) {
            // If index is on the head pointer, assign head to the next node
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // When currentIndex is similar to the given index, loop stops
            // Assign the next of the current node to the next of the previous node
            // So current node (expected indexed node) is automatically taken out from the list
            previousNode.next = currentNode.next
        }
        length--; // Decreament length because of removing an element
        return currentNode.element;
    }

}

var myList = new LinkedList();

myList.insert("CSE");
myList.insert("IT");
myList.insert("Data Science");
myList.insert("Artificial Intelligence");
myList.insert("Deep Learning");


console.log(myList.size()); // 5
console.log(myList.head());
/*
Node {
  element: 'CSE',
  next: Node {
    element: 'IT',
    next: Node { element: 'Data Science', next: [Node] }
  }
}
*/
console.log(myList.head().element); // CSE
console.log(myList.head().next);
/*
Node {
  element: 'IT',
  next: Node {
    element: 'Data Science',
    next: Node { element: 'Artificial Intelligence', next: [Node] }
  }
}
*/
console.log(myList.isEmpty()); // flase
console.log(myList.size()); // 5

console.log(myList.remove("Deep Learning")); // Deep Learning
console.log(myList.elementAt(1)); // IT
console.log(myList.elementAt(7)); // undefined
// console.log(myList.elementAt(4));

console.log(myList.indexOf("Artificial Intelligence")); // 3

console.log(myList.removeAt(3)); // Artificial Intelligence
console.log("Removing 3th index, now myList size: " + myList.size());
// Removing 3th index, now myList size: 4

console.log(myList.insertAt(3, "Finance")); // Finance
console.log("Inserting at 3th index position, now myList size: " + myList.size());
// Inserting at 3th index position, now myList size: 5

console.log(myList.elementAt(3)); // Finance