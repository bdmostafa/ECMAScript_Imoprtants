/*
Graph is a non-linear data structure/networks. A graph G contains a set of vertices V and set of Edges E.
Two broad categories of Graph:
    1. Directed Graph (Di- graph) – Where edges have direction.
    2. Undirected Graph – Where edges do not represent any directed
Ways to represent a Graph :-
    1. Adjacency Matrix
    2. Adjacency List/ Neighbors node of a node
*/

// Create Graph constructor/ Class declaration
let Graph = function (numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map(); // ES6 provides Map object in order to implement Adjacency list

    // Add node to the graph
    this.addNode = (n) => {
        // Initialize the adjacent list with null array
        this.adjList.set(n, []);
    }

    // Add edge between nodes to the graphs
    this.addEdge = (n, e) => {
        // Get the node and push edge with it
        this.adjList.get(n).push(e);

        // Because of undirected graphs, 
        // denote edge e to n (vice-versa) because of being undirected graph
        this.adjList.get(e).push(n);
    }

    // Represent adjacency list in the graph
    this.showAdjList = () => {
        let keyVertices = this.adjList.keys();

        for (let i of keyVertices) {
            // Get the corresponding adjList for the node
            let valuesVertices = this.adjList.get(i);
            var concat = "";

            // Add all the values into a string
            for (let j of valuesVertices)
                concat += j + " ";

            // Print the node and its adjacency list/ its neighbors
            console.log(i + ": " + concat);
        }
    }

    // Represnt Adjacency Matrix in the graph
    // var adj = [100][100];
    this.adjMatrix = () => {
        // Will be added later ================
    }

    /* =================== Graph Traversal ========================= */
    // DFS(Depth First Search) Pre - order traversal on the graph
    this.dfs = (startingNode) => {

        var visited = [];
        for (var i = 0; i < this.numOfVertices; i++) {
            visited[i] = false;

            // Recurring function until loop ends
            this.dfsAll(startingNode, visited);
        }

        // Recurring function to reach all the adjacent list of the graph
        this.dfsAll = (v, visited) => {
            visited[v] = true;
            console.log(v);

            var foundNeighbours = this.adjList.get(v);
            // for...in is used to loop over an enumerable (when key-value pairs)
            for (var i in foundNeighbors) {
                var foundElement = foundNeighbours[i];

                if (!visited[foundElement])
                    this.dfsAll(foundNeighbours, visited);
            }
        }
    }


    // BFS (Breadth First Search) levelwise traversal
    this.bfs = (startingNode) => {
        var visited = [];
        for (var i = 0; i < this.numOfVertices; i++)
            visited[i] = false;

        const q = new Queue();

        // Push the starting node to the queue that is visited
        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()) {
            let qElement = q.dequeue();

            console.log(qelement);

            let qElementList = this.adjList.get(qElement);

            for (var i in qElementList) {
                let neighbours = qElementList[i];

                if (!visited[neighbours]) {
                    visited[neighbours] = true;
                    q.enqueue(neighbours);
                }
            }
        }

    }


    // An object that will output as key-value pair
    // key as node and value as its distance from the root
    this.bfs = (bfsGraph, root) => {
        // Store the distances to the root node
        let nodesDistances = {};

        for (var i = 0; i < bfsGraph.length; i++) {
            // Infinity indicates that a node is not reachable from the root node
            nodesDistances[i] = Infinity;
        }
        // As the distance of root is itself, assign 0
        nodesDistances[root] = 0;

        // Queue to track of nodes to visit
        var queue = [root];
        var currentTraverse; // Current node of travarsing

        // Continue loop until queue is empty 
        // or no node in the queue to traverse
        while (queue.length != 0) {
            // Pop off a node from the queue to traverse and assign to currentTraverse
            currentTraverse = queue.shift();

            // Assign all the connected nodes to currentNodeConn
            var currentNodeConn = bfsGraph[currentTraverse];
            // Keep a list of nodes connected to the current node
            var adjIndex = [];

            // indexOf(1) means the first node connected to the current node
            var idx = currentNodeConn.indexOf(1);

            while (idx != -1) {
                // Continue loop until there is no node with an index of one
                adjIndex.push(idx);
                // Search for next connected node
                idx = currentNodeConn.indexOf(1, idx + 1);
            }

            // When adjIndex list is ready, find the distances from the curent node
            for (var i = 0; i < adjIndex.length; i++) {
                if (nodesDistances[adjIndex[i]] === Infinity) {
                    // If the node is not set distance yet, set it to the value of nodesDistance array for the current node
                    nodesDistances[adjIndex[i]] = nodesDistances[currentTraverse] + 1;
                    // Push the neighbour node index to the queue to check the next adjacency node through while loop
                    queue.push(adjIndex[i]);
                }
            }
        }
        return nodesDistances;
    };

}

// Create a new object of Graph
const myGraph = new Graph();
var vertices = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < vertices.length; i++) {
    myGraph.addNode(vertices[i]);
}

console.log(myGraph.adjList);
// Map { 0 => [], 1 => [], 2 => [], 3 => [], 4 => [], 5 => [] }

// Add edges 
myGraph.addEdge(1, 5);
myGraph.addEdge(0, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(3, 5);
myGraph.addEdge(2, 3);
myGraph.addEdge(4, 2);
myGraph.addEdge(4, 5);

console.log(myGraph.adjList);
/*
Map {
  0 => [ 3 ],
  1 => [ 5, 4 ],
  2 => [ 3, 4 ],
  3 => [ 0, 5, 2 ],
  4 => [ 1, 2, 5 ],
  5 => [ 1, 3, 4 ]
}
*/
myGraph.showAdjList();
/*
0: 3
1: 5 4
2: 3 4
3: 0 5 2
4: 1 2 5
5: 1 3 4

Logical presentation of this graph as follows:

         1 ----- 5
     0    \   /   |
      \    \ /    |
       \    /\    |
        \ /   \   |
        3       \ |
      /          \|
     2 ---------- 4

*/

// console.log(myGraph.dfs(1));
// console.log(myGraph.bfs(1));

var bfsGraph = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 0]
];

// Get distance from every node to the root/targeted node
console.log(myGraph.bfs(bfsGraph, 1));
// { '0': 1, '1': 2, '2': 1, '3': 0, '4': 2, '5': 1 }