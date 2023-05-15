/**
 * Definition for a binary tree node.*/

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var traverse = function(root,element){
    var path = [];

    while(root){

        path.push(root.val); 

        if(root.val == element)
            return path;
        
           
        else if(root.val > element)
            root = root.left;

        else
         root = root.right;
        
    }
}

// var lowestCommonAncestor = function(root, p, q) {
    
// };

// var root = new TreeNode(6);
// root.left = new TreeNode(2);
// root.right = new TreeNode(8);

// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(4);

// root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(9);

var root = new TreeNode(2);
root.left = new TreeNode(1);

arr1 = traverse(root,2);
arr2 = traverse(root,1);

console.log(arr1, arr2);

var lca = root.val;

for(let i=0,j=0; i < arr1.length && j<arr2.length; i++,j++){
    if( arr1[i] == arr2[j])
     lca = arr1[i];
    else 
     break;  
}

console.log(lca);