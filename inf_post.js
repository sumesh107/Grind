// take an infix expression convert it to postfix
// evaluate the postfix
// 4*3+2 => 43*2+  , so the lesser precedence cant sit on top of higher precedence.

const pred = function (litera){

    if( litera == '(')
        return Number.MIN_SAFE_INTEGER;
    if( litera == "'\'")
    {
        return 4;
    }
    else if( litera == "*")
    {
        return 3;
    }
    else if( litera == "+")
    {
        return 2;
    }
    else if( litera == "-")
    {
        return 1;
    }

}

const eval = function (tokens){

    const st = [];
    const exp = [];

    for(let i=0;i<tokens.length;i++)
    {   
        // evaluate expression
        if(!Number.isInteger(parseInt(tokens[i])))
        {   // operand if stack is empty || if its left curly braces
            if( tokens[i] == '(' || st.length==0)
            {
                st.push(tokens[i]);
                continue;
            } 
            // processing right braces
            else if( tokens[i] == ')')
            {
                let x = st.pop();
                while( x !=='(')
                {
                    exp.push(x);
                    x = st.pop();
                }
            }
            // processing higher precedence operators
            else if(  st.length > 0 && pred(tokens[i]) > pred(st[st.length-1])  )
            {
                st.push(tokens[i])
            }  
            //processing lower or equal precedence operators 
            else if( st.length > 0 && pred(tokens[i]) <= pred(st[st.length-1]) )
            {
                exp.push(st.pop());
                st.push(tokens[i]);
            }
        }
        // evaluate a number - push into the stack blindly
        else if( Number.isInteger(parseInt(tokens[i])) )
         exp.push(tokens[i]);
    }

    // popping all stack into expression
    while(st.length != 0)
    {
        exp.push( st.pop() );
    }

    return exp;
}

const tokens = ["(","2","+","3",")","*","4"];

console.log( eval(tokens) );
exports.eval = eval;