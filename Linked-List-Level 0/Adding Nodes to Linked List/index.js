function addAtHead(val){  // add at starting
    let newNode = new Node(val);
    newNode.next = this.head;
 this.head = newNode;
 this.size++;
}


// add at tail(last)
function addAtTail(val){
    let newNode = new Node(val);
    if(this.head==null) {
         this.head = newNode
         return;
    }else{
    let curr = this.head;
    while(curr.next!==null){
        curr = curr.next;
    }
    curr.next = newNode;}
    this.size++
}

// add at specific index with value
function addAtIndex(index, val) {
    if (index < 0 || index > this.size) return -1;  

    if (index === 0) {
        this.addAtHead(val);   
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);   
        return;
    }

    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;  
}
