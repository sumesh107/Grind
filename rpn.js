// evaluate reverse polish notation
// 2*(3+4) = 234+* , 2*3+4 = 23*4+
//

const eval = require("./inf_post");

function evalRPN(tokens){

    const op = {
        '/': add = function div(a,b) {
           return Math.trunc(a/b);
        },
        '*':function mu(a,b) {
            return a*b 
         },
        '+': function add(a,b) {
            return a+b 
        },
        '-':function sub(a,b) {
            return b-a 
         }
    };
    
    
    var st = [];
    
    for(let i=0;i<tokens.length;i++)
    {
        if( Number.isInteger(parseInt(tokens[i])) )
        {
            st.push(parseInt(tokens[i]));
        }
    
        else
        {
            let val1 = st.pop();
            let val2 = st.pop();
    
            fun = op[tokens[i]];
            st.push(parseInt(fun(val2,val1)));
        }
    }
    
    return st.pop();
}

const tokens = ["(","2","+","1",")","*","3"];

let post_exp = eval.
eval(tokens);
//const tokens = ["4","13","5","/","+"];
//const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

console.log( evalRPN(post_exp) );
//const tokens = ['4','*','3','+','2'];
//console.log( eval(tokens) );


