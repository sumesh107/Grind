// sorted number array, return the
const distance = (point1) =>{
    return ( Math.sqrt( Math.pow(point1[0],2) + Math.pow(point1[1],2)) );
}

const kpoint = function(points,k)
{
    var heap = [];

    for(let i=0;i<points.length;i++)
    {   // if upcoming element is larger we are not concerned, while the heap is not k-full
        if(heap.length >= k && distance(points[i]) > distance(heap[0]))
            continue;

        // add all points to heap till the k-th one.     
        add(heap,points[i]);
        // if its k+1 th one we try to remove the max one. 
        if(heap.length > k)
        {
          remove(heap);
        }
    }
    return heap;
}

const add = (heap,node) => {
    heap.push(node);
    // if there are 2 elements in a heap only we need heapifying.
    if(heap.length>1)
    {
        heapifyup(heap,heap.length-1,distance);
    }
}

const remove = (heap)=>{
    heap[0] = heap.pop();

    heapifydown(heap,0);
}

const heapifyup = (heap,idx,distance)=>
{
    // if the inserted node is not at root.
    if(idx > 0)
    {
        // calculate the parent 
        let parent = Math.floor((idx-1)/2);
        //  evaluate swap parent and the newly inserted child at index - idx by comparison
        if(distance(heap[idx]) > distance(heap[parent]))
        {
            [heap[idx],heap[parent]] = [heap[parent],heap[idx]];
            heapifyup(heap,parent,distance);
        }
    }
}

const heapifydown = (heap,idx)=>{
    let left = (2*idx)+1;
    let right = (2*idx)+2;

    let large = left;

    if(left >= heap.length)
        return;
    else if( right < heap.length && distance(heap[right]) > distance(heap[large]) )
        large = right;

    if( distance(heap[idx]) < distance(heap[large]) )
    {
        [heap[idx],heap[large]] = [heap[large],heap[idx]];    
        heapifydown(heap,large);
    }     
}

const points = [[-93,70],[-22,-64],[-43,-17],[-86,-33],[93,-74],[-7,-78],[5,-37],[-11,-84],[-29,-29],[-11,17],[9,-64],[10,25],[29,14],[25,19],[42,71],[52,30],[-76,19],[66,40],[99,-61]];
const k = 6;

let res_arr = kpoint(points,k);
console.log(res_arr);
