/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max_count = 0;
    let map = new Map();
    let start = [];

    
    //hash of all numbers
    for(let i=0;i<nums.length;i++)
    {
        map.set(nums[i],i);
    }

    //finding jsut the start values
    for(i=0;i<nums.length;i++)
    {
        if(map.has(nums[i]-1))
            continue;
        else
            start.push(nums[i]);
    }

    let count=0;
    i=0;
      
    while(i<start.length)
    {   
        num = start[i];

        while(map.has(num))
        {
            count = count+1;
            max_count = Math.max(count,max_count);
            num = num+1;
            continue;
        }
        count=0;
        i++;
    }

    return max_count;

};

const nums1 = [100,4,200,1,3,2];
const nums2 = [0,3,7,2,5,8,4,6,0,1];

console.log(longestConsecutive(nums1));