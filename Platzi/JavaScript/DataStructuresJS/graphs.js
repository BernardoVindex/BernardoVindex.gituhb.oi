class Graph {
    constructor() {
            this.nodes = 0
            this.adjecetList = {}
    }
    addVertex(node) {
            this.adjecetList[node] = []
            this.nodes++
    }
    addEdge(node1, node2) {
            this.adjecetList[node1].push(node2)
            this.adjecetList[node2].push(node1)
    }
}

const myGraph = new Graph()