
class ListNode
{
    constructor (val, next)
    {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    } 
};
 
var addTwoNumbers = function(l1, l2) {
    let res 
    let rem=0;
    let head;

    res = new ListNode();
    head = res;

    while(l1 || l2)
    {   
        if(l1 && l2)
        {
            
            res.val = (l1.val + l2.val + rem) % 10;
            rem = Math.floor( (l1.val + l2.val + rem) / 10);
            l1 = l1.next;
            l2 = l2.next;
        }

        else if( !l1 && l2 )
        {
            res.val = (l2.val+rem) % 10;
            rem = Math.ceil( (l2.val+rem) / 10);
            l2 = l2.next;
        }

        else if( l1 && !l2 )
        {
            res.val = (l1.val+rem) % 10;
            rem = Math.ceil( (l1.val+rem) / 10);
            l1 = l1.next;
        }

        res.next = new ListNode();
        res = res.next;
    }

    if(rem != 0)
        res.val = rem;
    else
    {
        curr = head;
        while(curr.next)
        {
            curr = curr.next;
        }
        curr = null;
    }
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

addTwoNumbers(l1,l2);