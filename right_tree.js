// right side view of the bin tree
class TreeNode 
{   
    constructor(val,left,right)
    {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
        
}

const right = function(node){
    let level=0;
    let q=[];
    let res_arr = [];
    let curr;

    q.push(node);

    while(q.length > 0)
    {
        level = q.length;

        for(let i=0;i<level;i++)
        {
            curr = q.shift();

            if(curr.left)
            {
                q.push(curr.left);
            }
            if(curr.right)
            {
                q.push(curr.right);
            }

            if(i==level-1)
                res_arr.push(curr.val);
        }
    }
    return res_arr;
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

let res_arr = right(root_1);
console.log(res_arr);