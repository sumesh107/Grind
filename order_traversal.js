// given root traverse the tree from left to right
class TreeNode 
{   
    constructor(val,left,right)
    {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
        
}

const order = function (root)
{
    let level=0;
    let q = [];
    let curr_nod;
    let arr = [];
    let curr_arr = [];

    if(!root)
        return arr;
    else 
    {
        q.push(root);
        arr.push([root.val]);
    }
        
    
    while(q.length > 0)
    {   
        level = q.length;

        for(let i=0;i<level;i++)
        {
            curr_nod = q.shift();
            if(curr_nod.left)
            {
                q.push(curr_nod.left);
                curr_arr.push(curr_nod.left.val);
            }
            if(curr_nod.right)
            {
                q.push(curr_nod.right);
                curr_arr.push(curr_nod.right.val);
            }
        }
        
        arr.push(curr_arr);
        curr_arr = [];
    }    

    arr = arr.slice(0,-1);
    return arr;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const root_1 = new TreeNode(1);
root_1.left = new TreeNode(2);
root_1.right = new TreeNode(2);

root_1.left.left = new TreeNode(3);
root_1.left.right = new TreeNode(3);

root_1.left.left.left = new TreeNode(4);
root_1.left.left.right = new TreeNode(4);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);

let res_arr = order(root_1);
console.log(res_arr);
