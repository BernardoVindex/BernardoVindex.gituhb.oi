 class Node {
     constructor(value) {
         this.left  = null
         this.right = null
         this.value = value
     }
 }

 class BinarySearchTree {
     constructor() {
         this.root = null
     }
     insert(value) {
        const newNode = new Node  (value)
        if(this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
     }
     
     serch(value) { 
        let currentNode = this.root
        while(true) {
            if   (value < currentNode.value) {
                currentNode = currentNode.left
            } 
            else (value > currentNode.value) { 
                currentNode = currentNode.right
            }
            
        }
    }
 }

 const myTree = new BinarySearchTree()

/* anBinarySearchTree {
    root = null
}


aNode {
    value = value
    left  = null,
    right = null,

}

anBinarySearchTree {
    root = aNode {
        value = 10
        left  = aNode {
            value = 4
            left  = null,
            right = null,
        
        },
        right = aNode {
            value = 20
            left  = null,
            right = null,
        
        },
    
    }
}
*/