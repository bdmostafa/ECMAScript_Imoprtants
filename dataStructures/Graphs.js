/*
Graph is a non-linear data structure. A graph G contains a set of vertices V and set of Edges E.
Two broad categories of Graph:
    1. Directed Graph (Di- graph) – Where edges have direction.
    2. Undirected Graph – Where edges do not represent any directed
Ways to represent a Graph :-
    1. Adjacency Matrix
    2. Adjacency List/ Neighbors node of a node
*/

// Create Graph constructor/ Class declaration
let Graph = function (vertices) {
    this.vertices = vertices;
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

        // Because of undirected graphs, denote edge e to n (vice-versa)
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