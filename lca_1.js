// class Tri
// {
//     constructor(value)
//     {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// const bst = (node,key)=>{

//     var path = [];
//     path.push(node.value);

//     while(node)
//     {       
//         if( node.value == key)
//         {
//             return path;
//         }
//         else if(node.value > key && node.left)
//         {
//             node = node.left;
//             path.push(node.value);
//         }
//         else if( node.value < key && node.right)
//         {
//             node = node.right
//             path.push(node.value)
//         }
//     }
// }

// const lca = (root,p,q) => {
//     let path_p = [];
//     let path_q = [];
//     let common;

//     path_p = bst(root,p);
//     path_q = bst(root,q);

//     let p_len = path_p.length;
//     let q_len = path_q.length;
//     let i=0;
//     let j=0;

//     while(i < p_len && j < q_len)
//     {
//         if(path_p[i] == path_q[i])
//             common = path_p[i];

//         i+=1;
//         j+=1;    
//     }

//     console.log(" LCA Parent= "+common);
// }

// const root = new Tri(6);

// root.left = new Tri(2);
// root.right = new Tri(8);

// root.left.left = new Tri(0);
// root.left.right = new Tri(4);
// root.right.left = new Tri(7);
// root.right.right = new Tri(9);

// const p=0;
// const q=7;
// lca(root,p,q);

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
     
// const bst = (node,key)=>{

//     var path = [];
//     path.push(node);

//     while(node)
//     {       
//         if( node.val == key)
//         {
//             return path;
//         }
//         else if(node.val > key && node.left)
//         {
//             node = node.left;
//             path.push(node);
//         }
//         else if( node.val < key && node.right)
//         {
//             node = node.right
//             path.push(node)
//         }
//     }
// }

// var lowestCommonAncestor = function(root, p, q) {
//     let path_p = [];
//     let path_q = [];
//     let common;

//     path_p = bst(root,p);
//     path_q = bst(root,q);

//     let p_len = path_p.length;
//     let q_len = path_q.length;
//     let i=0;
//     let j=0;

//     while(i < p_len && j < q_len)
//     {
//         if(path_p[i].val == path_q[i].val)
//             common = path_p[i];

//         i+=1;
//         j+=1;    
//     }

//     return common;
// };

const lca = (root,p,q)=>{
        if( root.val >= p.val && root.val <= q.val || root.val <= p.val && root.val >= q.val)
        {
            return root;
        }    
        else if( root.val > p.val && root.val > q.val)
            return lca(root.left,p,q);
        else if( root.val < p.val && root.val < q.val )
            return lca(root.right,p,q);
  
}

const root = new TreeNode(6);

root.left = new TreeNode(2); 
root.right = new TreeNode(8);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);//p
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

root.left.right.left = new TreeNode(3); //q
root.left.right.right = new TreeNode(5); 

root.left.left.left = null;
root.left.left.right = null;

let p= root.left.right;
const q= root.left.right.left;
let current_node = new TreeNode();

  current_node = lca(root,p,q);
  console.log(current_node.val);