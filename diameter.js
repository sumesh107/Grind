class TreeNode 
{   
    constructor(val,left,right)
    {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
        
}


const diameter = function (root){

    let lh; let rh;

    if(!root)
        return 0;
    
    let max_diameter = 0;

    const dfs = (node)=>{
    
            if(!node)
             return -1;
        
            else if(!node.left && !node.right)
                return 0;

            lh = 1 + dfs(node.left);    
            rh = 1 + dfs(node.right);

            max_diameter = Math.max(max_diameter,lh+rh); 

            return Math.max(lh,rh) + 1;
    }

    dfs(root);

    return max_diameter;
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

let rs = diameter(root);
console.log("Diameter= "+rs);