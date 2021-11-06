class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.first = newNode
            this.last  = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++

        return this
    }
    dequeue() {

    }
}

const myQueue = new Queue()

aNode {
    value : value,
    next : null
}

aQueue {  
    first  : {
        value : 1,
        next : null
    },
    last   : {
        value : 1,
        next : {
            value : 2,
            next : null
        }
    },
    length : 2
}