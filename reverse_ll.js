
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 //
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var reverseList = function(head) {
    let curr = new ListNode();
    let prev = new ListNode();

    prev.val = null;
    curr = head;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

head = reverseList(head);

while(head){
    console.log(head.val+" ");
    head = head.next;
}