// priority queue or heap

const Heap = require("collections/heap")

let min_heap = new Heap([],null, (a,b)=>b-a );

let array = [2,8,3,7,5,4,9,0];

for (let index = 0; index < array.length; index++) {
    min_heap.add(array[index]);
}

console.log(min_heap);

console.log(" minimum element = "+min_heap.peek());



