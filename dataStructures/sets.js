/* Sets - add, remove, subset, union, intersection, difference */

// Create MySet constructor
const MySet = function () {
    // To handle all the collections of sets
    var collectionSets = [];

    // Check for the presence of an element if exists or not and returns as boolean
    this.has = (setElement) => {
        return (collectionSets.indexOf(setElement) !== -1);
    };

    // Return all the values in the array collectionSets
    this.values = () => {
        return collectionSets;
    };

    // Add new element to the set
    this.add = (newElement) => {
        // Check newElement first if exists then add by .push()
        if (!this.has(newElement)) {
            collectionSets.push(newElement);
            return true;
        }
        return false;
    };

    // Return the size of the collectionSets
    this.size = () => {
        return collectionSets.length;
    };

    // Remove an element holding its index from a set
    this.remove = (removeElement) => {
        if (this.has(removeElement)) {
            index = collectionSets.indexOf(removeElement);

            // .splice is used to adds/removes items to/from an array, and returns the removed item(s)
            collectionSets.splice(index, 1); // 1 element removes from index
            return true;
        }
        return false;
    };

    // Return the union of two sets
    this.union = (otherSet) => {
        var unionSet = new MySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        // Add values onto unionSet
        firstSet.forEach((e) => {
            unionSet.add(e);
        });

        // Add values onto unionSet
        secondSet.forEach((e) => {
            unionSet.add(e);
        });
        return unionSet;
    };

    // Return the intersection of two sets as a new set
    this.intersection = (otherSet) => {
        var intersectionSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach((e) => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    // Return the difference of two sets as a new set
    this.difference = (otherSet) => {
        var differenceSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach((e) => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    // this method will test if the set is a subset of a different set
    this.subset = (otherSet) => {
        var firstSet = this.values();
        return firstSet.every((value) => {
            return otherSet.has(value);
        });
    };
}

// Create two set A and B using constructor function MySet
var setA = new MySet();
var setB = new MySet();

// Add new elements to setA
setA.add(1);
setA.add(2);

// Add new elements to setB
setB.add(5);
setB.add(2);
setB.add(9);
setB.add(1);

// Print collectionSet[] of both sets
console.log(setA.values()); // [ 1, 2 ]
console.log(setB.values()); // [ 5, 2, 9, 1 ]

// Check if setA is a subset of setB or not
console.log(setA.subset(setB)); // true

// Check subset of vice-versa
console.log(setB.subset(setA)); // false

// Print new set as intersectionSet of setA and setB
console.log(setA.intersection(setB).values()); // [ 1, 2 ] as order of setA
console.log(setB.intersection(setA).values()); // [ 2, 1 ] as order of setB

// Print size of new intersectionSet
console.log(setA.intersection(setB).size()); // 2

// Print difference elements of setB in terms of setA
console.log(setB.difference(setA).values()); // [ 5, 9 ]
console.log(setA.difference(setB).values());
// [] Returns empty array because of no difference in setA

// Print new set as unionSet of setA and setB
console.log(setA.union(setB).values()); // [ 1, 2, 5, 9 ]
console.log(setA.union(setB).size()); // 4

// Remove an element from a set and print values
setB.remove(0); // returns false as not exists
setB.remove(9);
console.log(setB.values()); // [ 5, 2, 1 ]


// Using Set built-in constructor in Javascript ==================================
// Create new Set object
const set1 = new Set(["a", "b", "c", "d", "e"])
const set2 = new Set(["d", "f", 1, "b", "c", "s"])
set2.add(2);

console.log(set1.values()); // [Set Iterator] { 'a', 'b', 'c', 'd', 'e' }
console.log(set2.values()); // [Set Iterator] { 'd', 'f', 1, 'b', 'c', 's', 2 }

// The next() method returns an object with two properties done and value
const iterator = set1.values();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }

// Has the value true if the iterator is past the end of the iterated sequence
// Has the value false if the iterator was able to produce the next value in the sequence
console.log(iterator.next().value); // c
console.log(iterator.next().value); // d
console.log(iterator.next().value); // e

// Any JavaScript value returned by the iterator can be omitted when done is true
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined

// Delete an element
set1.delete("a");
console.log(set1.has("a")); // false

// Add en element and check if it exists
set1.add("s");
console.log(set1.has("s"));

// Add and returns values
console.log(set1.add("d"));