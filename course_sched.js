/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

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

var isCyclic = function(i,visited,stack)
{
    if(stack[i])
     return true;

    if(visited[i])
        return false;

    visited[i]=true;
    stack[i]= true;

    for(let c in adj[i])
    {
        if(isCyclic(c,visited,stack))
            return true;
    }     
    stack[i] = false;
    return false;
}


var canFinish = function(numCourses, prerequisites) {
    Graph(numCourses);

    var visited = new Array(numCourses);
    var stack = new Array(numCourses);

    for(let i=0;i<prerequisites.length;i++)
    {
        addEdge(prerequisites[i][0],prerequisites[i][1]);
        visited[i] = false;
        stack[i] = false;
    }

    for(i=0;i<numCourses.length;i++)
    {
        if(isCyclic(i,visited,stack))
        {
            return false;
        }
    }

    return true;
};

const numCourses = 2;
const prerequisites = [[0,1]];

canFinish(numCourses,prerequisites);