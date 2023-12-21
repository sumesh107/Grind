class Noder {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};
     

var cloneGraph = function(node) {
    if(!node)
         return node;
 
     let m = new Map();
     let q = [];
 
     let newNode = new Noder(node.val)
 
     q.push(node);
     m.set(node,newNode);
 
     while(q.length>0)
     {
         let currnode = q.shift();
         for(let idx=0;idx < currnode.neighbors.length;idx++)
         {
         if(!m.has(currnode.neighbors[idx]))
             {
                 newNeighbor =  new Noder(currnode.neighbors[idx])
                 m.set(currnode.neighbors[idx],newNeighbor);
                 q.push(currnode.neighbors[idx]);
             }
         //map(node).neighbors = map(neighbors[i..])    
         // newNode.neighbours = newNeighbor[i..]    
         m.get(currnode).neighbors.push(m.get(currnode.neighbors[idx]))
         }
     }
     
     return newNode;
 };

const lis = [[2,4],[1,3],[2,4],[1,3]];
var nod = [];



for(let i=0; i<lis.length; i++)
{
    nod[i] = new Noder(i+1);
    nod[i].neighbors = [];
}

for(let i=0; i<lis.length; i++)
{
    for(let j=0; j<lis[i].length; j++)
    {
        nod[i].neighbors.push( nod[lis[i][j]-1] );
    }
}    
    


nod = cloneGraph(nod[0]);