// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
class kHeap{
    constructor(k){
        this.heap = [];
        this.length = 0;
        this.limit = k;
    }

    swap(pos1,pos2){
        let temp = this.heap[pos1];
        this.heap[pos1] = this.heap[pos2];
        this.heap[pos2] = temp;
    }

    insert(ele){

        if(this.length===0)
        {
            this.heap[0] = ele;
            this.length++;
            return;
        }

        if( ele > this.heap[0] && this.length === this.limit){
            return;
        }

        this.length++;
        this.heap[this.length-1] = ele;

        for(let i=Math.floor(this.length/2);i>=0;i--){
            this.heapify(i);
        }

        if(this.length > this.limit)
        {
            this.length--;
        }
    }

    peek(){
        return this.heap;
    }

    heapify(i){   
        let left,right;

        if(i==0)
        {
            left = i+1;
            right = 2*i;
        }

        left = (2*i);
        right = (2*i)+1;

        if(this.heap[i] <= this.heap[left] && this.heap[left]){
            this.swap(i,left);
        }
        else if(this.heap[i] < this.heap[right] && this.heap[right])
        {
            this.swap(i,right);
        }
    }

}

var distance = function(A,B){
    let x1 = A[0];
    let x2 = B[0];
    let y1 = A[1];
    let y2 = B[1];
    // x2^2 - x1^2 + y2^2 - y1^2
    return Math.sqrt( ( Math.pow(x2-x1,2) ) + ( Math.pow(y2-y1,2) ) )
}

// a function to have a heap

var kClosest = function(points, k) {
    
    const dist = new kHeap(k);

    for(let i=0;i<points.length;i++){
        dist.insert( distance(points[i],[0,0]));
    }
    console.log(dist.peek())
};

let points = [[3,3],[5,-1],[-2,4],[0,2],[1,1],[5,6]];
kClosest(points,2);



// ------------
// Manual heap 

