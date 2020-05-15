/* Trie Data Structure - also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated; i.e., the value of the key is distributed across the structure.
https://en.wikipedia.org/wiki/Trie
*/

let Node = function () {
    this.keys = new Map(); // ES6 Map Constructor with key-value pair
    this.end = false;
    this.setEnd = () => {
        this.end = true;
    };
    this.isEnd = () => {
        return this.end;
    };
};

let Trie = function () {

    this.root = new Node();
    // If not passing any node, set default this.root as node
    this.add = (input, node = this.root) => {
        if (input.length == 0) {
            // If input length is 0, function ends here
            node.setEnd();
            return;
        } // has(), set(), get() methods are from ES6 built-in Map object
        else if (node.keys.has(input[0])) {
            // Recurr add function and add every letter of input one by one following get(input[0])
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            // If 1st character/element of existing node is not matched with input[0], 
            // add the new element, (input[0]), with key and value pair Map as a (new Node()) containg of the folder of new node
            node.keys.set(input[0], new Node());
            // Recurr add function and add every letter of input one by one 
            // noted that get(input[0]), is just that is set from above line, set(input[0]
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };

    // Seach/Check if a word exists in the Trie
    this.hasWord = (word) => {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                // If 1st character of word is missing,
                // there is no word starting that letter in the Trie
                return false;
            } else {
                // When ist letter is found, assign this keys to the node
                node = node.keys.get(word[0]);
                // Add 1st character to the word
                word = word.substr(1);
                //Continue loop And looking for the word end in that node
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
            true : false;
    };

    this.display = () => {
        let words = [];
        let searchNode = (node, string) => {
            // Passing this.root and new string through parameter
            if (node.keys.size != 0) {
                // Recurr search function and concat all the letters of node to string
                for (let letter of node.keys.keys()) {
                    searchNode(node.keys.get(letter), string.concat(letter));
                };
                // When last character of node is added to string, push string to array 'words'
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        searchNode(this.root, new String());
        return words.length > 0 ? words : null;
    };

};

myTrie = new Trie();
myTrie.add('developer');
myTrie.add('answer');
myTrie.add('umbrella');
myTrie.add('university');
myTrie.add('banana');
myTrie.add('ann');
myTrie.add('teacher');
myTrie.add('tax');
myTrie.add('apple');
myTrie.add('under');

console.log(myTrie.hasWord('appl')); // false
console.log(myTrie.hasWord('tax')); // true
console.log(myTrie.hasWord('unde')); // false
console.log(myTrie.display());
/*
Display node one by one as sequence of Trie structure according to add function
[
  'developer', 'answer',
  'ann',       'apple',
  'umbrella',  'university',
  'under',     'banana',
  'teacher',   'tax'
]

Graphical presentation of this Trie data structure as follows:
                        root
                 /  |   |     |    \
                d   a   u     b     t
                |   |\  |\    |     |\
                e   n p m n   a     e a
                |  /| | | |\  |     | |
                v s n p b i d n     a x
                | |   | | | | |     |
                e w   l r v e a     c
                | |   | | | | |     |
                l e   e e e r n     h
                | |     | |   |     |
                o r     l r   a     e
                |       | |         |
                p       l s         r
                |       | |
                e       a i
                |         |
                r         t
                          |
                          y


*/