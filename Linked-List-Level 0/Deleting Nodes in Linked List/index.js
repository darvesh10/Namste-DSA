//find the value of given index
function valueAtIndex(index){
    if(index<0|| index>this.size) return-1
    let curr = this.head;
    for(let i=0; i<index; i++){
        curr = curr.next;
    }
    return curr.val
}

//delte at specfic index
function deleteAtIndex(index){
    if (index < 0 || index >= this.size) return; 
    if (index === 0) {  
        this.head = this.head.next;
    } else{
        let curr = this.head;
    for(let i=0; i<index-1; i++){
        curr = curr.next
    }
    curr.next = curr.next.next
}
this.size--;
}