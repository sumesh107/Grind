const Deque = require("./dequeue");

class Tri
{
    constructor(value)
    {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

const bfs = function ( root ){

    const qu = new Deque();
    var res = [];

    qu.push(root);
    let levelsize=1;

    while( levelsize > 0)
    {
        levelsize = qu.lengt();

        for(let i=0;i<levelsize;i++)
        {
            let current_node = qu.pop();

            if(current_node.left)
                qu.push(current_node.left);
            if(current_node.right)
                qu.push(current_node.right);
            
                res.push(current_node.val);
        }
    }

    console.log(res);
}

const root = new Tri(1);

root.left = new Tri(2);
root.right = new Tri(3);

root.left.left = new Tri(4);
root.left.right = new Tri(5);
root.right.left = new Tri(6);
root.right.right = new Tri(7);

bfs(root);