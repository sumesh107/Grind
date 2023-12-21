/*Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() 
and an additional operation getMin() which should return minimum element from the SpecialStack. 
All these operations of SpecialStack must have a time and space complexity of O(1). */

class Stack{
    constructor()
    {
        this.stack = [];
        this.top = -1;
        this.min = Number.MAX_VALUE;
    }

    push(val)
    {
        this.top+=1;

        if(this.top == 0){
            this.min = val;
            this.stack[this.top] = val;
            return;
        }
        
        else if( val < this.min){
            this.stack[this.top] = (2*val) - this.min;
            this.min = val;
        }

        else{
           
            this.stack[this.top] = val;
        }
    }

    pop()
    {

        if(this.top==-1){
            throw new TypeError(" stack underflow ");
        }
        
        let ele = this.stack[this.top]; 

        if( ele < this.min) 
        {
            this.min = (2*this.min) - ele;
        }
        
        this.top-=1;
    }

    getmin()
    {
        console.log(" min - "+this.min);
    }

    traverse(){
        let index = this.top;
        while(index!=-1)
        {
            console.log( "Stack - "+this.stack[index]);
            console.log( " min - "+this.min);
            index-=1;
        }   

    }
}

const st = new Stack;
const ele = [4,3,2];

try {
    
    for(let i=0;i<ele.length;i++)
    {
        st.push(ele[i]);
    }    

    st.traverse();
    
    st.getmin();
    st.pop()
    st.getmin();

} catch (error) {
    console.error(error);
}