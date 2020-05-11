/*
Hash - hash table, hash map, unordered map or dictionary
A data structure that pairs keys to values converting a range of 
key values into a range of indexes of an array
*/

// Convert string to 32bit integer (another example) 
var strToHash32Bit = (str) => {

    var hash = 0;

    if (str.length !== 0) {
        for (i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }
    return hash;
}
console.log(strToHash32Bit("Mostafa")); // -1389067687

// Create simple hash function with max limit
var hash = (str, max) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        // charCodeAt() returns the Unicode of the ith character in a string
        hash += str.charCodeAt(i);
    }
    return hash % max;
};

// Create HashTable constructor
let HashTable = function () {

    let storage = new Array();
    const storageMax = 10;

    this.print = () => {
        console.log(storage)
    }

    // Add new element to the HashTable passing key, value
    this.add = (key, value) => {
        // Hashing the data (key) and store into index variable
        var index = hash(key, storageMax);
        if (storage[index] !== undefined) {
            // Compare the passing key with index key (storage[index][i][0]) then assign value
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            // If not matched with key, executes this statement
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        } else {
            // If storage[index] is undefined, assign [key, value]
            storage[index] = [
                [key, value]
            ];
        }
    };

    // Remove an element from the HashTable
    this.remove = (key) => {
        // Store the data given passing through parameter to the index variable
        var index = hash(key, storageMax);
        // Compare the key with index key
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    // Search/Lookup for an element and return
    this.lookUp = (key) => {
        var index = hash(key, storageMax);
        if (storage[index] !== undefined) {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    // Return value
                    return storage[index][i][1];
                    // Return key, value
                    // return storage[index][i];
                }
            }
        }
        return undefined + ": Not found.";
    };

};


console.log(hash('Mostafa', 10)); // 5
console.log(strToHash32Bit("Mahmud")); // -1997734392

let myHash = new HashTable();
myHash.add('Mostafa', 'father');
myHash.add("Shams", "Son");
myHash.add("Mahmud", "Developer");
myHash.remove("Mahmud");
console.log(myHash.lookUp("Shams"))
myHash.print(); // [ , , , , , [ [ 'Mostafa', 'father' ] ], , , [ [ 'Shams', 'Son' ] ] ]

/*
[
  <5 empty items>,
  [ [ 'Mostafa', 'father' ] ],
  <2 empty items>,
  [ [ 'Shams', 'Son' ] ]
]
*/