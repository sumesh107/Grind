
 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    reverse = function (node){
        if(!node){
            return;
        }

        temp = node.left;
        node.left = node.right;
        node.right = temp;

        reverse(node.left);
        reverse(node.right);
    }

    reverse(root);
    return root;

};

var root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

root = invertTree(root);