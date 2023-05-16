// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

var distance = function(A,B){
    let x1 = A[0];
    let x2 = B[0];
    let y1 = A[1];
    let y2 = B[1];
    // x2^2 - x1^2 + y2^2 - y1^2
    return Math.sqrt( ( Math.pow(x2-x1,2) ) + ( Math.pow(y2-y1,2) ) )
}

var kClosest = function(points, k) {
    
    var dist = [];

    for(let i=0;i<points.length;i++){
        dist.push( distance(points,[0,0]));
    }

    console.log(dist);

};

let points = [[3,3],[5,-1],[-2,4]];
kClosest(points);