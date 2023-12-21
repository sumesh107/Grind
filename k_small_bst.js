class TreeNode 
{   
    constructor(val,left,right)
    {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
        
}

// const k_small = function(node,arr,k){

//     if(!node)
//         return;

    
//     k_small(node.left,arr,k);
//     arr.push(node.val);
//     k_small(node.right,arr,k);

// }

const k_small = function(node,ans,count,k){

    if(!node)
        return;

    if(count>=k)
        return;    
    
    k_small(node.left,ans,count,k);
    count+=1;
    if(count==k)
        ans = node.val;
    k_small(node.right,ans,count,k);
}

var kthSmallest = function(root, k) {
    let count=0;
    let ans = 0;

    k_small(root,ans,count,k);
    return ans;
};




const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(2);

root.right = new TreeNode(8);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

let arr = [];
let k = 5;

console.log(kthSmallest(root,2));


