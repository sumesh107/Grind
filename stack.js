class Stack{
    constructor()
    {
        this.stack = [];
        this.top = -1;
    }

    push(val)
    {
        this.top+=1;
        this.stack[this.top] = val;
    }

    pop()
    {
        if(this.top==-1)
         return new TypeError(" stack underflow ");

        let ele = this.stack[this.top];
        this.top-=1;
        return ele;
    }

    access()
    {
        return this.stack[this.top];
    }

    traverse(){
        let index = this.top;
        while(index!=-1)
        {
            console.log( this.stack[index])
            index-=1;
        }   

    }
}

const st = new Stack;

try {
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    st.pop();
    st.access();
    st.traverse();

} catch (error) {
    console.log(error);
}

