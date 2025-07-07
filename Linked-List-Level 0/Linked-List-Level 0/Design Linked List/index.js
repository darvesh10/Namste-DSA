function makenode(val) {
    this.val = val;
    this.next = null;
}

console.log(new makenode(5));

function mylinkedlist(){
    this.head = null;
    this.size = 0;
}
console.log(new mylinkedlist());
