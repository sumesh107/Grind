/*A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.*/

class TreeNode 
{   
    constructor(val,left,right)
    {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
        
}

const height = (node) => {
    if (!node)
        return -1;
    else if (!node.left && !node.right)
        return 0;
    else 
        return Math.max(1 + height(node.left), 1 + height(node.right));
}

var isBalanced = function(root) {

    if(!root)
     return true;


    let hi_left = height(root.left);
    let hi_right = height(root.right);

    if( Math.abs( hi_left - hi_right) < 2 && isBalanced(root.left) && isBalanced(root.right) )
        return true;
    
    return false;
   // return res < 2 ? true:false;
};

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


console.log(" root Balanced? - "+isBalanced(root));
console.log(" root_1 Balanced? - "+isBalanced(root_1));

//console.log( height(root));
//console.log( height(root_1));