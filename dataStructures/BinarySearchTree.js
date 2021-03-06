/*
Binary Search Tree - BST, a non linear data structure, a collection of node connected by some edges. 
A Binary Search tree is a binary tree in which nodes which have lesser value are stored on the left 
while the nodes with higher value are stored at the right.
*/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const BinarySearchTree = function () {
    // Root of a binary seach tree 
    this.root = null;

    // Create a new node to be inserted in a tree with a value data
    this.insert = (data) => {
        const newNode = new Node(data);

        // Check if root is null or not and add to the tree
        if (this.root === null) this.root = newNode;
        // Find the correct position and add the node in the tree
        else this.searchTree(this.root, newNode);
    }

    this.searchTree = (node, newNode) => {
        // If the new data is less than the node data, move left of the tree
        if (newNode.data < node.data) {
            // If node left is null, insert here
            if (node.left === null) {
                node.left = new Node(newNode.data);
                return;
            } else if (node.left !== null) {
                // If node left is not null, again call/recurr searchTree() until null is found
                return this.searchTree(node.left, newNode);
            }
        }

        // If new data is more than node data, move right of the tree and same as before
        else if (node.data < newNode.data) {
            if (node.right === null) {
                node.right = new Node(newNode.data);
                return;
            } else if (newNode.right !== null) {
                // Recurr until null is found
                return this.searchTree(node.right, newNode);
            }
        } else {
            return null;
        }
    };

    // Get root node of a tree
    this.getRootNode = () => {
        return this.root;
    }

    // Check for a node if it is exists or not and return true or false
    this.has = (data) => {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Search for a node with given data
    this.search = (data) => {
        let current = this.root;
        while (current.data !== data) {
            // If data is less than node's data move left, otherwise move right
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            // If tree is empty eturn null
            if (current === null) {
                return null;
            }
        }
        // If data is equal to the node's data, (current.data === data), return current
        return current;
    }

    // Remove a node with a given data (helper method)
    this.remove = (data) => {
        // removeNode recurrs over the tree to find the data and removes it
        const removeNode = (node, data) => {
            // If node is null, returns null
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                // If node has no children 
                if (node.left === null && node.right === null) {
                    return null;
                }
                // If node has no left child 
                if (node.left === null) {
                    return node.right;
                }
                // If node has no right child 
                if (node.right === null) {
                    return node.left;
                }
                // If node has two children
                // Minumum node of the rigt subtree is stored in tempNode
                var tempNode = this.findMinNode(node.right);
                node.data = tempNode.data;

                // Or use the following method =======
                // var tempNode = node.right;
                // while (tempNode.left !== null) {
                //     tempNode = tempNode.left;
                // }
                // node.data = tempNode.data;

                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data > node.data) {
                // If data to be deleted is greater than node, move to right subtree 
                node.right = removeNode(node.right, data);
                return node;
            } else {
                // Otherwise, move to left subtree (data < node.data)
                node.left = removeNode(node.left, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }


    // Find the minimum node in the tree
    this.findMinNode = () => {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;

        // Or use recurring function
        // if (current.left === null) return current.data;
        // else return this.findMinNode();
    }

    // Find the maximum node in the tree
    this.findMaxNode = () => {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;

        // Or use recurring function
        // if (current.right === null) return current.data;
        // else return this.findMaxNode();
    }

    this.isBalanced = () => {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    // Find the minimum distance path from root node to any leaf node in the tree
    this.findMinHeight = (node = this.root) => {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    // Find the maximum distance path from root node to any leaf node in the tree
    this.findMaxHeight = (node = this.root) => {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    // Inorder traversal of a tree starting from a given node
    // Here from root node
    this.inOrder = () => {
        if (this.root == null) {
            return null;
        } else {
            var result = [];

            // 1. Traverse the left subtree
            // 2. Visit the root
            // 3. Traverse the right subtree
            function traverseInOrder(node) {
                // "Short Circuit Conditionals with &&" =========
                // If node.left exists, recurr traverseInorder function
                // Or if(node.left) traverseInOrder(node.left);
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                // If node.right exists, recurr traverseInorder function
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }

    // Preorder traversal from root node (or it can be from a given node)
    this.preOrder = () => {
        if (this.root == null) {
            return null;
        } else {
            var result = [];

            // 1. Visit the root
            // 2. Traverse the left subtree
            // 3. Traverse the right subtree
            function traversePreOrder(node) {
                result.push(node.data);
                // "Short Circuit Conditionals with &&" =========
                // If node.left exists, recurr traverseInorder function
                node.left && traversePreOrder(node.left);
                // If node.right exists, recurr traverseInorder function
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }

    // Postorder traversal
    this.postOrder = () => {
        if (this.root == null) {
            return null;
        } else {
            var result = [];

            // 1. Traverse the left subtree
            // 2. Traverse the right subtree
            // 3. Visit the root
            function traversePostOrder(node) {
                // "Short Circuit Conditionals with &&" =========
                // If node.left exists, recurr traverseInorder function
                node.left && traversePostOrder(node.left);
                // If node.right exists, recurr traverseInorder function
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }

    // Level order traversal of the tree
    this.levelOrder = () => {
        let result = [];
        let temp = [];
        if (this.root != null) {
            temp.push(this.root);
            // Loop continues until all the nodes from the tree
            while (temp.length > 0) {
                // Find the first element in the array
                let node = temp.shift();
                result.push(node.data);
                if (node.left != null) {
                    temp.push(node.left);
                };
                if (node.right != null) {
                    temp.push(node.right);
                };
                // Push every level with left and right node into result array
                // Again continue loop until temp.length = zero
            };
            return result;
        } else {
            return null;
        };
    };
}


const myBST = new BinarySearchTree();

myBST.insert(15);
myBST.insert(25);
myBST.insert(10);
myBST.insert(7);
myBST.insert(22);
myBST.insert(17);
myBST.insert(13);
myBST.insert(5);
myBST.insert(9);
myBST.insert(27);

console.log(myBST.getRootNode());
/*
         15 
        /  \ 
       10   25 
      / \   / \ 
     7  13 22  27 
    / \    / 
   5   9  17  
*/

console.log(myBST.search(5)); // Node { data: 5, left: null, right: null }

console.log(myBST.search(10));
/*
Node {
  data: 10,
  left: Node {
    data: 7,
    left: Node { data: 5, left: null, right: null },
    right: Node { data: 9, left: null, right: null }
  },
  right: Node { data: 13, left: null, right: null }
}
*/

console.log(myBST.has(5)); // true
console.log(myBST.has(30)); // false

console.log(myBST.findMinNode()); // 5
myBST.remove(5);

// After removing 5
console.log(myBST.search(5)); // null
console.log(myBST.findMinNode()); // 7
console.log(myBST.findMaxNode()); // 27
console.log(myBST.getRootNode());

console.log(myBST.findMinHeight()); // 2
console.log(myBST.findMaxHeight()); // 3
console.log(myBST.isBalanced()); // true

console.log(myBST.inOrder()); // [5, 7, 9, 10, 13, 15, 17, 22, 25, 27]
console.log(myBST.preOrder()); // []
console.log(myBST.postOrder()); // []
console.log(myBST.levelOrder()); // []