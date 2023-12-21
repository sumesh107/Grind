let V;
let adj = [];

function Graph(v)
{
    V =v;
    for(let i=0;i<V;i++)
    {
        adj[i] = new Array();
    }
}

function addEdge(u,v)
{
    adj[u].push(v);
}

function isCyclicutil(visited,stack_path,i)
{
    if(stack_path[i])
        return true;

    if(visited[i])
        return false;

    visited[i] = true;
    stack_path[i] = true;
    
    for(let c of adj[i] )
    {
        if(isCyclicutil(visited,stack_path,c))
         
        return true;
    }

    stack_path[i] = false;
    return false;
}

function isCyclic()
{
    let visited = new Array(V);
    let stack_path = new Array(V);

    for(let i=0;i<visited.length;i++)
    {
        visited[i] = false;
    }

    for(i=0;i<visited.length;i++)
    {
        stack_path[i] = false;
    }

    return isCyclicutil(visited,stack_path,0);
}

// Driver code
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);
 
if(isCyclic())
    console.log("Graph contains cycle");
else
    console.log("Graph doesn't "
                   + "contain cycle");
 