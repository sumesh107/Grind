// trying to print a dfs tree

class Tri{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const dfs = (node) => {
    let st = [];
    st.push(node);

    while(st.length > 0)
    {
        let curr_node = st.pop();

        console.log(curr_node.value);

        if(curr_node.right)
            st.push(curr_node.right);
        if(curr_node.left)
            st.push(curr_node.left)
    }
}

const root = new Tri(1);

root.left = new Tri(2);
root.right = new Tri(3);

root.left.left = new Tri(4);
root.left.right = new Tri(5);
root.right.left = new Tri(6);
root.right.right = new Tri(7);

dfs(root);