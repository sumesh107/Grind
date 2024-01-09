
 // Definition for a Node.
 class Node{
    constructor(val, next=null, random=null) 
    {
     this.val = val;
     this.next = next;
     this.random = random;
    }
}  

var copyRandomList = function(head) {
    let map = new Map();
    let curr;

    curr = head;
    while(curr)
    {
        map.set( curr, new Node(curr.val));
        curr = curr.next;
    }

    
   curr = head;
   while(curr)
   {
    map.get(curr).next = map.get(curr.next);
    map.get(curr).random = map.get(curr.random);
    curr = curr.next; 
   }

   return map.get(head);

};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = null;

copyRandomList(head);