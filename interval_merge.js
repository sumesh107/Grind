/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


var insert = function(intervals) {
    
    if( intervals.length < 1 || intervals==[])
    {
        return [intervals];
    }

    intervals.sort((a,b)=>a[0]-b[0]);
    
    let stack = [];
    stack.push(intervals[0]);

    for(let i=1;i<intervals.length;i++)
    {   
        //new.start   < stack.end  && new.end > stack.end
        if( intervals[i][0] <= stack[0][1] && intervals[i][1] > stack[0][1])
        {
            let ele = stack.shift();
            ele[1] = intervals[i][1];
            stack.unshift(ele);
        }    
        else if(intervals[i][1] > stack[0][1] && intervals[i][0] > stack[0][1] )
        {
            stack.unshift(intervals[i])
        }
    }

    return stack.reverse();
};

var intervals = [[1,3],[2,6],[8,10],[15,18]]

const res = insert(intervals);
console.log(res);