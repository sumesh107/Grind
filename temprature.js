const temp = [73,74,75,71,69,72,76,73];

let res = new Array(temp.length).fill(0);
let map = new Map();
let stack = [];

let i=0;   
stack.push([temp[0],0]);

while(i< temp.length)
{   
    i++;

    if(stack.length==0 || temp[i] < stack[stack.length-1][0])
    {
        stack.push([temp[i],i]);
        continue;
    }

    while(stack.length>0 && temp[i] > stack[stack.length-1][0] )
    {
        res[stack[stack.length-1][1]] = i - stack[stack.length-1][1];
        stack.pop();
    }
    stack.push([temp[i],i])
}

console.log(res);

