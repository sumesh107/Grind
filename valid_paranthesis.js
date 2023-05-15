class Stack{

    constructor(){
        this.stack = []
        this.top = -1
    }
    push(ele){
        this.top = this.top+1
        this.stack[this.top]= ele
    }

    pop(){
        let ele = this.stack[this.top]
        this.top = this.top-1
    }

    peek(){
        return this.stack[this.top]
    }

    top(){
        return this.top
    }

}

var isValid = function(s) {

    const hash = []

    hash['}'] = '{';
    hash[')'] = '(';
    hash[']'] = '[';
    
    var stack = new Stack()
    var bool = false;

    if( s.length % 2 != 0 && s.length == 0){
        return bool;
    }

    for(var i=0; i < s.length; i=i+1 ){
        if( ( s[i] == '{' || s[i] == '(' || s[i] == '[') ){
            stack.push(s[i]);
        }
        else if( hash[s[i]] && stack.peek() == hash[s[i]] )
        {
            stack.pop();
        }
        else{
            return bool;
        }

    }

    if(stack.top == -1 && i == s.length){
        return true;
    }

    return bool;
};

console.log( isValid('{[]}'));