/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  
    l=0;
    let r = nums.length-1;
    let mid;

    while(l<=r)
    {
        mid = Math.floor( (l+r) / 2 );

        if(nums[mid] == target)
            return mid;

        else if( nums[l] <= nums[mid])
        {
          if( target < nums[l] || target > nums[mid] )
            l = mid+1;
          else
            r = mid-1;  
        }

        else
        {
            if( target > nums[r] || target < nums[mid] )
                r = mid-1;
            else
                l = mid+1;    
        }
         
    }

    return -1; 
};

const nums = [4,5,6,7,0,1,2];
const target = 0

console.log(findMin(nums));