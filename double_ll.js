// structure of the doubly linked list
class DoublyLinkedList{

    constructor(value){
        this.value = value;
        this.prev = null; // left
        this.next = null; // right
    }

};

//traversal.
function traversal(node){
 while(node != null){
    console.log(node.value);
    node = node.next;
 }
}

//insert at a position.
function insert(list,node,key){
    
    while(list.value!=key){
        list = list.next;
    }

    node.next = list.next;
    list.next = node;
    node.prev = list;
}

//delete at a position.
function delet(list,key){
    while(list.next.value != key){
        list = list.next;
    }

    let temp = list.next;
    list.next = temp.next;
    list.next.prev = list
    
    temp.next = temp.prev = null;
}

const node = new DoublyLinkedList(1);

node.next = new DoublyLinkedList(2);
node.next.prev = node;

node.next.next = new DoublyLinkedList(4);
node.next.next.prev = node.tail;

traversal(node);

const neo = new DoublyLinkedList(3);
insert(node,neo,2);

console.log(" After insertion ")
traversal(node);

console.log(" After deletion ")
delet(node,3);
traversal(node);