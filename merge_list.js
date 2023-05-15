 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    //declaring list 3   
    var list3 = new ListNode();
    const beg = list3;

//initializing list 3
    if(!list1 && !list2)
    {
        list3 = null;
        return list3;
    }    
    
    else if(list1 && !list2){
        list3 = list1;
        return list3;
    }   
        
    
   else if(!list1 && list2){
       list3 = list2;
       return list3;
   }   

   else{
       if(list1.val <= list2.val){
           list3.val = list1.val;
           list1 = list1.next;
       }    
       else{
           list3.val = list2.val;
           list2 = list2.next;
       }
   }
        
    
// conditional listing 
    while( list1 && list2){
        if(list1.val <= list2.val){
            list3.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else if(list1.val > list2.val){
            list3.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        list3 = list3.next;
    }

//end of list 
    if(!list1 && !list2)
        list3.next = null;
    
    else if(list1)   
        list3.next = list1;
    
    else if(list2)
        list3.next = list2;   

    return beg;    
}

var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

var list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

mergeTwoLists(list1,list2);