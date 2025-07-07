function hasLinkedList(head){
    let seenNode = new Set();
     let curr = head;
     while(curr != null){
        if(seenNode.has(curr)){
            return true;
        }
        seenNode.add(curr);
        curr = curr.next;
     } 
     return false;
}