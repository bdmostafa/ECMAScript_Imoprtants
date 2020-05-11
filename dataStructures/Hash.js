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