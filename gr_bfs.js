// bfs of a graph

class Graph{
    constructor(val)
    {   
        this.vert = val;
        this.edge = new Array(val);
        this.visited = new Array(val);

        for(let i = 0; i < val; i++)
            this.visited[i] = false;

        for(let i=0;i<val;i++)
        {
            this.edge[i] = [];
        }
    }

    addEdge(v1,v2)
    {
        this.edge[v1].push(v2);
    }

    bfs(node)
    {
        let q = [];
        let result= [];
        let front;
       
        q.push(node);

        while(q.length > 0)
        {
            front = q.shift();
            result.push(front);
            this.visited[front] = true;

            for(let i=0; i < this.edge[front].length ; i++)
            {
                if( !this.visited[this.edge[front][i]])
                {
                    q.push(this.edge[front][i]);
                }    
            }
        }
        return result;
    }

    dfs(node)
    {
        let q = [];
        let result= [];
        let top;
       
        q.push(node);

        while(q.length > 0)
        {
            top = q.pop();
            result.push(top);
            this.visited[top] = true;

            for(let i=0; i < this.edge[top].length ; i++)
            {
                if( !this.visited[this.edge[top][i]])
                {
                    q.push(this.edge[top][i]);
                }    
            }
        }
        return result;
    }
}

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

const ge = new Graph(4);
ge.addEdge(0, 1);
ge.addEdge(0, 2);
ge.addEdge(1, 2);
ge.addEdge(2, 0);
ge.addEdge(2, 3);
ge.addEdge(3, 3);

console.log(" Vertices - "+g.vert);
console.log(" Edges - "+g.edge)

console.log(" BFS traversal = "+ g.bfs(2));
console.log(" DFS traversal = "+ge.dfs(2));