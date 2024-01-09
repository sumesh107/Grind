/**
 * Definition for singly-linked list.*/
 class ListNode{
    constructor(val,next)
    {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }  
 }
 
 function merge(headA,headB){
    while(headB){
        let next=headA.next;
        headA.next=headB;
        headA=headB;
        headB=next;
    }
}

var reorderList = function(head) {
 
    let stack = [];
    let node;

    while(head)
    {
        stack.push(head);
        head = head.next;
    }

    node = head;

    for(i=0;i<stack.length;i++)
    {
        if(i%2==0)
          node.next = stack.shift();
        else
          node.next = stack.pop();
        node = node.next;
    }
    node.next = null;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = null;

reorderList(head);