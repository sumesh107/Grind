var kClosest = function(points, k) {
    let heap = []
    
    // now we need to try to add all points to the heap
    for(let i=0; i<points.length; i++) {
        if(heap.length >= k && distance(points[i]) > distance(heap[0])) { // it's bigger than the max, we can just skip it
            continue
        }
        add(heap, points[i], distance)
        if(heap.length > k) {
            remove(heap, distance)
        }
    }
    
    return heap
    
    // add at end, heapify up
    function add(heap, node, weightFunction) {
        heap.push(node)
        heapifyUp(heap, heap.length - 1, weightFunction)
    }
    
    // compare with parent and swap if needed, repeat
    function heapifyUp(heap, idx, weightFunction) {
        if(idx === 0) return
        let parent = Math.floor((idx-1) / 2)
        if(weightFunction(heap[idx]) > weightFunction(heap[parent])) {
            [heap[idx], heap[parent]] = [heap[parent], heap[idx]]
            heapifyUp(heap, parent, weightFunction)
        }
    }
    
    // read 0, replace 0 with last position, heapifyDown
    function remove(heap, weightFunction) {
        let val = heap[0]
        heap[0] = heap.pop()
        heapifyDown(heap, 0, weightFunction)
        return val
    }
    
    // compare with children, swap with biggest, repeat
    function heapifyDown(heap, idx, weightFunction) {
        let left = 2*idx + 1
        let right = 2*idx + 2
        let biggest = left
        
        if(left >= heap.length) return
        
        if(right < heap.length && weightFunction(heap[left]) < weightFunction(heap[right])) {
            biggest = right
        }
        
        if (weightFunction(heap[idx]) < weightFunction(heap[biggest])) {
            [heap[idx], heap[biggest]] = [heap[biggest], heap[idx]]
            heapifyDown(heap, biggest, weightFunction)
        }
    }
    
    function distance(point) {
        return point[0] * point[0] + point[1] * point[1]
    }
}

const points = [[3,3],[5,-1],[-2,4]];
const k = 2;

let res_arr = kClosest(points,k);
console.log(res_arr);