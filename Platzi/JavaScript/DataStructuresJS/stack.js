class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++
        
        return this
    }
    pop() {
        this.length--
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
        this.top.value = this.top.next.value
        this.top.next = this.top.next.next
        

        return this
        }
    }

}

const myStack = new Stack()

theNode {
    value = value
    next = null
}

theStack {
    top = {
        value = 4,
        next = {
            value = 3,
            next = {
                value = 2,
                next = {
                    value = 1,
                    next = null
                }
            }
        }
    },
    bottom = {
        value = 1,
        next = null
    },
    length = 4
}