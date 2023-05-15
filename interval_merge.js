/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let start = intervals[0][0];
    let end = intervals[0][1];
    let interval = [];
    var mergeinterval = [];

    for(let i=1;i<=intervals.length;i++){
        interval = intervals[i];
        // detect overlap
        if(newInterval[0] < end){
            end = Math.max(newInterval[1],end);
        }
        else{
            mergeinterval.push([start,end]);
            start = interval[0];
            end = interval[1];
        }
    }
};

var intervals = [[1,3],[6,9]]
var newInterval = [2,5]
const res = insert(intervals,newInterval);
console.log(res);